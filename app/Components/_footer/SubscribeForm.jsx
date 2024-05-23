"use client";
import { useState } from "react";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] z-10">
      <input
        type="text"
        placeholder="Email Id"
        value={email}
        name="email"
        className="text-center py-[5px] h-[64px] cursor-text"
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="submit"
        value="Subscribe Now"
        className="bg-[#242424] text-[#F9F6F3] h-[60px] cursor-pointer"
      />
    </form>
  );
}

export default SubscribeForm;
