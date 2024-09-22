// /app/reset-password/[token]/page.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ResetPasswordPage: React.FC = () => {
  const router = useRouter();
  const { token } = router.query; // token is available here
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof token === "string") {
      try {
        const response = await axios.put(
          `http://localhost:3000/reset-password/${token}`,
          { password }
        );
        setMessage(response.data.msg);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setMessage(error.response?.data.msg || "Something went wrong");
        } else {
          setMessage("An unexpected error occurred");
        }
      }
    }
  };

  return (
    <div>
      <h1>Reset Your Password</h1>
      {token && (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordPage;
