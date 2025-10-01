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

// Type Definitions
export interface PageHeaderProps {
  onBack: () => void;
}

export interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: string;
  status: string;
}

export interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface TaskPreviewProps {
  formData: TaskFormData;
}

export interface QuickActionsProps {
  onSaveDraft: () => void;
  onUseTemplate: () => void;
}