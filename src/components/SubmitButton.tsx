import { useFormState } from "react-hook-form";

const SubmitButton = () => {
  const { isSubmitting } = useFormState();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Create Order"}
    </button>
  );
};

export default SubmitButton;