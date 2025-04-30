const SubmitButton2 = ({ loading }: { loading: boolean }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
      disabled={loading}
    >
      {loading ? "Submitting..." : "Create Order"}
    </button>
  );
};

export default SubmitButton2;