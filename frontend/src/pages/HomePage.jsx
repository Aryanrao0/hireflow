import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NAVBAR */}
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                HireFlow
              </span>
              <span className="text-xs text-base-content/60 font-medium -mt-1">Code Together</span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="group relative px-8 py-3.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Get Started</span>
              <ArrowRightIcon className="size-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg gap-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 cursor-default animate-pulse">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Code Together,
              </span>
              <br />
              <span className="text-base-content hover:text-primary transition-colors duration-300 cursor-default">Learn Together</span>
            </h1>

            <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
              The ultimate platform for collaborative coding interviews and pair programming.
              Connect face-to-face, code in real-time, and ace your technical interviews.
            </p>

            {/* FEATURE PILLS */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline hover:badge-success hover:scale-110 transition-all duration-300 cursor-default hover:shadow-lg">
                <CheckIcon className="size-4 text-success" />
                Live Video Chat
              </div>
              <div className="badge badge-lg badge-outline hover:badge-success hover:scale-110 transition-all duration-300 cursor-default hover:shadow-lg">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>
              <div className="badge badge-lg badge-outline hover:badge-success hover:scale-110 transition-all duration-300 cursor-default hover:shadow-lg">
                <CheckIcon className="size-4 text-success" />
                Multi-Language
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="group btn btn-primary btn-lg hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Start Coding Now</span>
                  <ArrowRightIcon className="size-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </SignInButton>

              
            </div>

            {/* STATS */}
            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="stat hover:bg-primary/10 transition-colors duration-300 cursor-default group">
                <div className="stat-value text-primary group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat hover:bg-secondary/10 transition-colors duration-300 cursor-default group">
                <div className="stat-value text-secondary group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat hover:bg-accent/10 transition-colors duration-300 cursor-default group">
                <div className="stat-value text-accent group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
            <img
              src="/hero.png"
              alt="CodeCollab Platform"
              className="relative w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
            Everything You Need to <span className="text-primary font-mono bg-primary/10 px-3 py-1 rounded-lg">Succeed</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group card bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/50">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                <VideoIcon className="size-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="card-title group-hover:text-primary transition-colors duration-300">HD Video Call</h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Crystal clear video and audio for seamless communication during interviews
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group card bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-secondary/50">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-secondary/50">
                <Code2Icon className="size-8 text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="card-title group-hover:text-secondary transition-colors duration-300">Live Code Editor</h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Collaborate in real-time with syntax highlighting and multiple language support
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group card bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent/50">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-accent/50">
                <UsersIcon className="size-8 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="card-title group-hover:text-accent transition-colors duration-300">Easy Collaboration</h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Share your screen, discuss solutions, and learn from each other in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
