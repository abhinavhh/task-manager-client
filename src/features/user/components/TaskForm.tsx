import { Button } from "@/Components/common/button";
import { Input } from "@/Components/common/input";
import { FileText, Flag, Paperclip, Save, Send } from "lucide-react";
import { useState } from "react";
import type { TaskFormProps, TaskFormData } from "../interface.model";

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
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Task Title */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <FileText className="h-4 w-4 text-blue-600" />
            </div>
            Task Title
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="Enter task title..."
            value={formData.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange("title", e.target.value)
            }
            required
            className="w-full"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <div className="p-1.5 bg-purple-100 rounded-lg">
              <FileText className="h-4 w-4 text-purple-600" />
            </div>
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("description", e.target.value)
            }
            placeholder="Describe the task in detail..."
            rows={5}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
          />
        </div>

        {/* Status and Priority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <div className="p-1.5 bg-green-100 rounded-lg">
                <Flag className="h-4 w-4 text-green-600" />
              </div>
              Status
              <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleInputChange("status", e.target.value)
              }
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-white"
              required
            >
              <option value="">Select status...</option>
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <div className="p-1.5 bg-orange-100 rounded-lg">
                <Flag className="h-4 w-4 text-orange-600" />
              </div>
              Priority
              <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.priority}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleInputChange("priority", e.target.value)
              }
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all bg-white"
              required
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
              <option value="URGENT">Urgent</option>
            </select>
          </div>
        </div>

        {/* Attachments */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <div className="p-1.5 bg-indigo-100 rounded-lg">
              <Paperclip className="h-4 w-4 text-indigo-600" />
            </div>
            Attachments
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
            <div className="p-3 bg-gray-100 group-hover:bg-blue-100 rounded-full w-fit mx-auto mb-3 transition-all">
              <Paperclip className="h-8 w-8 text-gray-500 group-hover:text-blue-600 transition-all" />
            </div>
            <p className="text-gray-600 font-medium">
              Click to upload or drag and drop files here
            </p>
            <p className="text-sm text-gray-500 mt-2">
              PDF, PNG, JPG up to 10MB
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t-2 border-gray-100">
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
    </div>
  );
};
