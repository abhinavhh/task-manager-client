// import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { TaskForm } from "../components/TaskForm";
import type { TaskFormData } from "../interface.model";
import { axiosInstance } from "@/lib/utils";
import { toast } from "react-toastify";

const CreateTask: React.FC = () => {
  const handleSubmit = async (data: TaskFormData) => {
    try {
      const response = await axiosInstance.post("/task/create", data);
      toast.success(response.data.message);
    } catch (err: any) {
      toast.error(
        err.error.error || err.response?.error || "Failed to add task"
      );
    }
  };

  const handleCancel = () => {
    console.log("Task creation cancelled");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <PageHeader />

        <div className="mt-6">
          <TaskForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Quick Tips
          </h3>
          <ul className="text-sm text-gray-600 space-y-1 ml-4">
            <li>• Use clear and descriptive titles for better organization</li>
            <li>
              • Set realistic priorities to manage your workload effectively
            </li>
            <li>
              • Add detailed descriptions to provide context for team members
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
