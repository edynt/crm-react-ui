import { useController, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

const InputField = ({ name, label, type = "text", inputRef }: InputFieldProps) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error }
  } = useController({ name, control });

  return (
    <div className="flex flex-col space-y-1">
      <label>{label}</label>
      <input {...field} ref={inputRef} type={type} className="border p-2 rounded" />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default InputField;
