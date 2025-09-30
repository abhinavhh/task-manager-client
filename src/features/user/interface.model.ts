export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

 export interface DashboardHeaderProps {
  userName: string;
}

export interface MenuBarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface Tab {
  id: string;
  label: string;
}

export type Priority = 'high' | 'medium' | 'low';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
}

export interface TaskItemProps {
  task: Task;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  progress: number;
  teamSize: number;
  deadline: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface UpcomingDeadline {
  task: string;
  date: string;
  time: string;
}