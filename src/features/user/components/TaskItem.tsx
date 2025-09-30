import { Button } from '@/Components/common/button';
import { Badge, Calendar, MoreVertical } from 'lucide-react';
import React from 'react'
import type { Priority, TaskItemProps } from '../interface.model';

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const priorityColors: Record<Priority, string> = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    low: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent transition-colors">
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
      <div className="flex-1">
        <h4 className="font-medium">{task.title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <Badge  className={priorityColors[task.priority]}>
            {task.priority}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {task.dueDate}
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TaskItem