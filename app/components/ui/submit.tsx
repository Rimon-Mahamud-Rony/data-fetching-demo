"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  submitText: string;
  submittingText: string;
};

export const SubmitButton = ({ submitText, submittingText }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-cyan-500 hover:bg-cyan-700 text-slate-700 font-semibold py-2 px-4 rounded-md transition duration-300 cursor-pointer ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? submittingText : submitText}
    </button>
  );
};