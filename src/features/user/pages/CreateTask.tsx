import { useState, type FormEvent } from "react";
import { PageHeader } from "../components/PageHeader";
import { TaskForm } from "../components/TaskForm";
import type { TaskFormData } from "../interface.model";
import { axiosInstance } from "@/lib/utils";
import { toast } from "react-toastify";

const CreateTask: React.FC = () => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "MEDIUM",
    status: "",
  });

  const handleBack = () => {
    console.log("Navigate back to dashboard");
  };

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

  //   const handleSaveDraft = () => {
  //     console.log("Draft saved");
  //   };

  //   const handleUseTemplate = () => {
  //     console.log("Template loaded");
  //   };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-7xl">
        <PageHeader onBack={handleBack} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <TaskForm onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>

          <div className="space-y-6">
            {/* <TaskPreview formData={formData} />
            <QuickActions 
              onSaveDraft={handleSaveDraft}
              onUseTemplate={handleUseTemplate}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
