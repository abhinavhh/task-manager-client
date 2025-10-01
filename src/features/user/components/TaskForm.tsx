import { Button } from "@/Components/common/button";
import {
  FileText,
  Flag,
  User,
  Calendar,
  Clock,
  Users,
  Tag,
  Paperclip,
  Save,
  Send,
} from "lucide-react";
import { useState } from "react";
import type { TaskFormProps, TaskFormData } from "../interface.model";
import { FormField } from "./FormField";

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "MEDIUM",
    status: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof TaskFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField label="Task Title" required icon={FileText}>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Enter task title..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </FormField>

      <FormField label="Description" icon={FileText}>
        <textarea
          value={formData.description}
          onChange={(e) =>
            handleInputChange("description", e.target.value.toUpperCase())
          }
          placeholder="Describe the task in detail..."
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </FormField>

      <FormField label="Status" required icon={Flag}>
        <select
          value={formData.status}
          onChange={(e) => handleInputChange("status", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="TODO">TODO </option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField label="Priority" required icon={Flag}>
          <select
            value={formData.priority}
            onChange={(e) => handleInputChange("priority", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </FormField>

        {/* <FormField label="Assign To" icon={User}>
          <select
            value={formData.assignee}
            onChange={(e) => handleInputChange("assignee", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select assignee...</option>
            <option value="john">John Doe</option>
            <option value="jane">Jane Smith</option>
            <option value="mike">Mike Johnson</option>
          </select>
        </FormField> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <FormField label="Due Date" required icon={Calendar}>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => handleInputChange("dueDate", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </FormField> */}

        {/* <FormField label="Due Time" icon={Clock}>
          <input
            type="time"
            value={formData.dueTime}
            onChange={(e) => handleInputChange("dueTime", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </FormField> */}
      </div>

      {/* <FormField label="Project" icon={Users}>
        <select
          value={formData.project}
          onChange={(e) => handleInputChange("project", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select project...</option>
          <option value="mobile-app">Mobile App Redesign</option>
          <option value="marketing">Marketing Campaign</option>
          <option value="website">Website Refresh</option>
        </select>
      </FormField> */}

      {/* <FormField label="Tags" icon={Tag}>
        <input
          type="text"
          placeholder="Add tags separated by commas..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) =>
            handleInputChange(
              "tags",
              e.target.value.split(",").map((t) => t.trim())
            )
          }
        />
      </FormField> */}

      <FormField label="Attachments" icon={Paperclip}>
        <div className="border-2 border-dashed rounded-md p-6 text-center hover:border-primary transition-colors cursor-pointer">
          <Paperclip className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            Click to upload or drag and drop files here
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            PDF, PNG, JPG up to 10MB
          </p>
        </div>
      </FormField>

      <div className="flex items-center justify-end gap-3 pt-6 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="button" variant="outline" className="gap-2">
          <Save className="h-4 w-4" />
          Save as Draft
        </Button>
        <Button type="submit" className="gap-2">
          <Send className="h-4 w-4" />
          Create Task
        </Button>
      </div>
    </form>
  );
};
