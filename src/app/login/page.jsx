"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MOCK_USER } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ check mock credentials
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // ✅ store auth info in cookie
      Cookies.set("auth", "true", { expires: 1 });

      // ✅ redirect after login
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-white/60 text-center mt-2">
          Access your dashboard using mock credentials
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/20"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black border border-white/20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-white/50 text-center">
          <p>Email: admin@example.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  );
}
