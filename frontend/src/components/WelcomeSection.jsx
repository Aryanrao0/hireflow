import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon, LogInIcon } from "lucide-react";

function WelcomeSection({ onCreateSession, onJoinSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Text */}
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight truncate">
                Welcome back, {user?.firstName || "there"}!
              </h1>
            </div>
            <p className="text-base sm:text-xl text-base-content/60 ml-13 sm:ml-16">
              Ready to level up your coding skills?
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 shrink-0">
            <button
              onClick={onJoinSession}
              className="group px-5 py-3 sm:px-8 sm:py-4 bg-base-100 border-2 border-primary rounded-2xl transition-all duration-200 hover:bg-primary/10 w-full xs:w-auto"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-primary font-bold text-base sm:text-lg">
                <LogInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Join Session</span>
              </div>
            </button>
            <button
              onClick={onCreateSession}
              className="group px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl transition-all duration-200 hover:opacity-90 w-full xs:w-auto"
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg">
                <ZapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Create Session</span>
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
