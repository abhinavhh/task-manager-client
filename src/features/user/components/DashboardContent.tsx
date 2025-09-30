import { Button } from "@/Components/common/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/common/card";
import { Filter, Calendar, Plus, Users } from "lucide-react";
import type { Project, Task, UpcomingDeadline } from "../interface.model";
import ProjectCard from "./ProjectCard";
import TaskItem from "./TaskItem";

const DashboardContent: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create mockups for the new product landing page',
      priority: 'high',
      dueDate: 'Oct 5, 2025'
    },
    {
      id: 2,
      title: 'Update documentation',
      description: 'Review and update API documentation',
      priority: 'medium',
      dueDate: 'Oct 7, 2025'
    },
    {
      id: 3,
      title: 'Team meeting preparation',
      description: 'Prepare slides for quarterly review',
      priority: 'low',
      dueDate: 'Oct 10, 2025'
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: 'Mobile App Redesign',
      description: 'Complete UI/UX overhaul',
      status: 'In Progress',
      progress: 67,
      teamSize: 5,
      deadline: '2 weeks'
    },
    {
      id: 2,
      name: 'Marketing Campaign',
      description: 'Q4 product launch campaign',
      status: 'Planning',
      progress: 34,
      teamSize: 8,
      deadline: '1 month'
    }
  ];

  const upcomingDeadlines: UpcomingDeadline[] = [
    { task: 'Design review', date: 'Tomorrow', time: '2:00 PM' },
    { task: 'Client presentation', date: 'Oct 4', time: '10:00 AM' },
    { task: 'Sprint planning', date: 'Oct 6', time: '9:00 AM' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Tasks</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </CardContent>
        </Card>

        <div>
          <h3 className="text-lg font-semibold mb-4">Active Projects</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="bg-primary/10 p-2 rounded">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.task}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.date} at {item.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start gap-2" variant="outline">
              <Plus className="h-4 w-4" />
              Create Task
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Users className="h-4 w-4" />
              Invite Team Member
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Calendar className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent