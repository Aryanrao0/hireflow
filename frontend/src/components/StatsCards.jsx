import { TrophyIcon, UsersIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
      {/* Active Count */}
      <div className="card bg-base-100 border-2 border-primary/20 hover:border-primary/40 transition-colors">
        <div className="card-body p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-xl sm:rounded-2xl">
              <UsersIcon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="badge badge-primary badge-sm sm:badge-md">Live</div>
          </div>
          <div className="text-3xl sm:text-4xl font-black mb-1">{activeSessionsCount}</div>
          <div className="text-xs sm:text-sm opacity-60">Active Sessions</div>
        </div>
      </div>

      {/* Total Count */}
      <div className="card bg-base-100 border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
        <div className="card-body p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 bg-secondary/10 rounded-xl sm:rounded-2xl">
              <TrophyIcon className="w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black mb-1">{recentSessionsCount}</div>
          <div className="text-xs sm:text-sm opacity-60">Total Sessions</div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
