"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST", // Specify the HTTP method
        headers: {
          "Content-Type": "application/json", // Indicate that the body contains JSON data
        },
        body: JSON.stringify({ username, password }), // Convert the payload to a JSON string
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        console.log("Login successful");
        router.push("/"); // Redirect to homepage or another page
      } else {
        console.error("Login failed:", response.statusText);
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
