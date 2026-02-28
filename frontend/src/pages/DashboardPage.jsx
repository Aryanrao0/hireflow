import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useCreateSession, useMyRecentSessions } from "../hooks/useSessions.js";

import Navbar from "../components/Navbar.jsx";
import WelcomeSection from "../components/WelcomeSection.jsx";
import RecentSessions from "../components/RecentSessions.jsx";
import StatsCards from "../components/StatsCards.jsx";
import CreateSessionModal from "../components/CreateSessionModal.jsx";
import JoinSessionModal from "../components/JoinSessionModal.jsx";
import SessionCreatedModal from "../components/SessionCreatedModal.jsx";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [createdSession, setCreatedSession] = useState(null);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "", interviewType: "" });

  const createSessionMutation = useCreateSession();

  const { data: recentSessionsData, isLoading: loadingRecentSessions, isError, error } = useMyRecentSessions();

  // Note: User sync is handled automatically by Clerk webhooks
  // No manual sync needed here

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty || !roomConfig.interviewType) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
        interviewType: roomConfig.interviewType,
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          setCreatedSession(data.session);
          // Don't navigate immediately - show join code first
        },
      }
    );
  };

  const recentSessions = recentSessionsData?.sessions || [];
  // Show empty on any error (404 = not deployed, 401 = not authed yet)
  const showSessions = isError ? [] : recentSessions;
  const activeSessions = showSessions.filter(s => s.status === "active");

  return (
    <>
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <WelcomeSection 
          onCreateSession={() => setShowCreateModal(true)} 
          onJoinSession={() => setShowJoinModal(true)}
        />

        {/* Stats + Sessions */}
        <div className="container mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
          <StatsCards
            activeSessionsCount={activeSessions.length}
            recentSessionsCount={showSessions.length}
          />
          <RecentSessions sessions={showSessions} isLoading={loadingRecentSessions} />
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />

      <JoinSessionModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />

      <SessionCreatedModal
        session={createdSession}
        onClose={() => setCreatedSession(null)}
      />
    </>
  );
}

export default DashboardPage;
