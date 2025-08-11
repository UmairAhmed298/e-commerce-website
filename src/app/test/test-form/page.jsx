"use client";

import React, { useActionState } from "react";

async function handleSubmit(previousState, formData) {
  console.log("PREV", previousState);
  console.log("FORM DATA", formData.get("email"));
  return {
    message: "HELLOS",
  };
}

const TestPage = () => {
  const initialState = {
    message: "",
  };
  const [state, formAction, pending] = useActionState(
    handleSubmit,
    initialState
  );

  return (
    <form
      className="flex items-center justify-center w-full h-screen flex-col"
      action={formAction}
    >
      <label htmlFor="email">Email</label>
      <input className="border h-12" type="email" name="email" id="email" />
      <p>{state?.message}</p>
      <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
    </form>
  );
};

export default TestPage;
