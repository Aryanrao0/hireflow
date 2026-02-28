import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { INTERVIEW_QUESTIONS } from "../data/interviewQuestions";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);
  const interviewTypes = Object.keys(INTERVIEW_QUESTIONS);

  if (!isOpen) return null;

  // Get questions for selected interview type
  const selectedInterviewQuestions = roomConfig.interviewType 
    ? INTERVIEW_QUESTIONS[roomConfig.interviewType] 
    : [];

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-lg sm:max-w-2xl mx-4">
        <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

        <div className="space-y-8">
          {/* INTERVIEW TYPE SELECTION */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Select Interview Type</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <select
              className="select w-full"
              value={roomConfig.interviewType}
              onChange={(e) => {
                setRoomConfig({
                  ...roomConfig,
                  interviewType: e.target.value,
                  problem: "", // Reset problem when interview type changes
                  difficulty: "",
                });
              }}
            >
              <option value="" disabled>
                Choose interview type...
              </option>

              {interviewTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* PROBLEM SELECTION */}
          {roomConfig.interviewType && (
            <div className="space-y-2">
              <label className="label">
                <span className="label-text font-semibold">Select Question</span>
                <span className="label-text-alt text-error">*</span>
              </label>

              <select
                className="select w-full"
                value={roomConfig.problem}
                onChange={(e) => {
                  const selectedQuestion = selectedInterviewQuestions.find(
                    (q) => q.title === e.target.value
                  );
                  setRoomConfig({
                    ...roomConfig,
                    difficulty: selectedQuestion?.difficulty || "",
                    problem: e.target.value,
                  });
                }}
              >
                <option value="" disabled>
                  Choose a question...
                </option>

                {selectedInterviewQuestions.map((question) => (
                  <option key={question.id} value={question.title}>
                    {question.title} ({question.difficulty})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ROOM SUMMARY */}
          {roomConfig.problem && roomConfig.interviewType && (
            <div className="alert alert-success">
              <Code2Icon className="size-5" />
              <div>
                <p className="font-semibold">Session Summary:</p>
                <p>
                  Interview Type: <span className="font-medium">{roomConfig.interviewType}</span>
                </p>
                <p>
                  Question: <span className="font-medium">{roomConfig.problem}</span>
                </p>
                <p>
                  Difficulty: <span className="font-medium">{roomConfig.difficulty}</span>
                </p>
                <p>
                  Max Participants: <span className="font-medium">2 (1-on-1 session)</span>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem || !roomConfig.interviewType}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}
export default CreateSessionModal;
