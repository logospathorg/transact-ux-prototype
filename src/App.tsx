import { useState } from 'react';
import type { Role, ViewId } from './types/transact';
import { AppShell } from './components/layout/AppShell';
import { Dashboard } from './pages/Dashboard';
import { BatchQueue } from './pages/BatchQueue';
import { ComingSoon } from './pages/ComingSoon';
import { demoUsers } from './data/users';
import { navSectionsForRole } from './data/navigation';
import { VIEW_META } from './data/views';

function App() {
  const [role, setRole] = useState<Role>('Operator');
  const [activeView, setActiveView] = useState<ViewId>('dashboard');

  const user = demoUsers[role];
  const meta = VIEW_META[activeView];

  // Switching role reshapes the nav; if the current view is no longer visible
  // to the new role, fall back to the dashboard.
  const handleRoleChange = (nextRole: Role) => {
    setRole(nextRole);
    const visible = navSectionsForRole(nextRole).some((section) =>
      section.items.some((item) => item.id === activeView),
    );
    if (!visible) setActiveView('dashboard');
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard role={role} userName={user.name} onNavigate={setActiveView} />;
      case 'batch-queue':
        return <BatchQueue />;
      default: {
        const comingSoon = meta.comingSoon;
        if (!comingSoon) return null;
        return (
          <ComingSoon
            title={meta.title}
            description={comingSoon.description}
            planned={comingSoon.planned}
            onBack={setActiveView}
          />
        );
      }
    }
  };

  return (
    <AppShell
      role={role}
      user={user}
      activeView={activeView}
      title={meta.title}
      onNavigate={setActiveView}
      onRoleChange={handleRoleChange}
    >
      {renderView()}
    </AppShell>
  );
}

export default App;
