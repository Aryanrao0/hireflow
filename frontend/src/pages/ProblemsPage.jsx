import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-sm sm:text-base text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="group card bg-base-100 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/30"
            >
              <div className="card-body">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1 w-full sm:w-auto">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 sm:size-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                        <Code2Icon className="size-5 sm:size-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-lg sm:text-xl font-bold truncate">{problem.title}</h2>
                          <span className={`badge badge-sm sm:badge-md ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-base-content/60 truncate">{problem.category}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-base-content/80 mb-3 line-clamp-2">{problem.description.text}</p>
                  </div>
                  {/* RIGHT SIDE */}

                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 flex-shrink-0 self-end sm:self-center transition-all duration-300">
                    <span className="font-medium text-sm sm:text-base group-hover:font-bold">Solve</span>
                    <ChevronRightIcon className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;
