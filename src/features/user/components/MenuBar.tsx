import type { MenuBarProps, Tab } from "../interface.model";

const MenuBar: React.FC<MenuBarProps> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'tasks', label: 'My Tasks' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'calendar', label: 'Calendar' }
  ];

  return (
    <div className="flex items-center gap-6 border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
            activeTab === tab.id
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MenuBar