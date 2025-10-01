import type { FormFieldProps } from "../interface.model";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  children,
  icon: Icon,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
};
