import { Code2, Clock, Users, Trophy, Loader, ArrowRight } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { formatDistanceToNow } from "date-fns";
import { memo } from "react";
import { useNavigate } from "react-router";

const SessionCard = memo(({ session }) => {
  const navigate = useNavigate();
  const isActive = session.status === "active";

  return (
    <div
      onClick={() => isActive && navigate(`/session/${session._id}`)}
      className={`card relative transition-all duration-200 ${
        isActive
          ? "bg-success/10 border-success/30 hover:border-success/60 cursor-pointer hover:shadow-lg hover:scale-[1.02]"
          : "bg-base-200 border-base-300"
      }`}
    >
      {isActive && (
        <div className="absolute top-3 right-3">
          <div className="badge badge-success badge-sm gap-1">
            <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
            LIVE
          </div>
        </div>
      )}

      <div className="card-body p-4 sm:p-5">
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-br from-success to-success/70"
                : "bg-gradient-to-br from-primary to-secondary"
            }`}
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm sm:text-base mb-1 truncate pr-8">{session.problem}</h3>
            <span className={`badge badge-xs sm:badge-sm ${getDifficultyBadgeClass(session.difficulty)}`}>
              {session.difficulty}
            </span>
          </div>
        </div>

        <div className="space-y-1.5 text-xs sm:text-sm opacity-80 mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">{formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>{session.participant ? "2 participants" : "1 participant"}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-base-300">
          <span className="text-xs font-semibold opacity-80 uppercase">
            {isActive ? "Live Now" : "Completed"}
          </span>
          {isActive ? (
            <span className="flex items-center gap-1 text-xs text-success font-semibold">
              Join <ArrowRight className="w-3 h-3" />
            </span>
          ) : (
            <span className="text-xs opacity-40">
              {new Date(session.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

SessionCard.displayName = "SessionCard";

function RecentSessions({ sessions, isLoading }) {
  const activeSessions = sessions.filter((s) => s.status === "active");
  const completedSessions = sessions.filter((s) => s.status === "completed");

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Active Sessions */}
      {activeSessions.length > 0 && (
        <div className="card bg-base-100 border-2 border-success/30 hover:border-success/50">
          <div className="card-body p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-gradient-to-br from-success to-success/70 rounded-xl">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full animate-pulse" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black">Live Sessions</h2>
              <span className="badge badge-success badge-sm">Active</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {activeSessions.map((session) => (
                <SessionCard key={session._id} session={session} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Past Sessions */}
      <div className="card bg-base-100 border-2 border-accent/20 hover:border-accent/30">
        <div className="card-body p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2 bg-gradient-to-br from-accent to-secondary rounded-xl">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black">Past Sessions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {isLoading ? (
              <div className="col-span-full flex items-center justify-center py-16">
                <Loader className="w-8 h-8 sm:w-10 sm:h-10 animate-spin text-primary" />
              </div>
            ) : completedSessions.length > 0 ? (
              completedSessions.map((session) => (
                <SessionCard key={session._id} session={session} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 sm:py-16">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-accent/50" />
                </div>
                <p className="text-base sm:text-lg font-semibold opacity-70 mb-1">No past sessions yet</p>
                <p className="text-xs sm:text-sm opacity-50">Complete your first session to see it here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentSessions;
