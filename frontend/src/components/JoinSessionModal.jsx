import { useState } from "react";
import { LoaderIcon, LogInIcon } from "lucide-react";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router";

function JoinSessionModal({ isOpen, onClose }) {
  const [joinCode, setJoinCode] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleJoin = async () => {
    if (!joinCode.trim()) {
      toast.error("Please enter a join code");
      return;
    }

    setIsJoining(true);
    try {
      const { data } = await axiosInstance.post("/sessions/join-by-code", {
        joinCode: joinCode.toUpperCase(),
      });

      toast.success("Joined session successfully!");
      onClose();
      navigate(`/session/${data.session._id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to join session");
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-2xl mb-6">Join Interview Session</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Enter Join Code</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            <input
              type="text"
              placeholder="e.g., ABC123"
              className="input input-bordered w-full text-center text-2xl tracking-widest uppercase"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              autoFocus
            />

            <p className="text-sm text-base-content/60 mt-2">
              Ask the interviewer for the 6-character join code
            </p>
          </div>

          <div className="modal-action">
            <button className="btn btn-ghost" onClick={onClose} disabled={isJoining}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleJoin}
              disabled={isJoining || joinCode.length !== 6}
            >
              {isJoining ? (
                <>
                  <LoaderIcon className="size-4 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  <LogInIcon className="size-4" />
                  Join Session
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinSessionModal;
