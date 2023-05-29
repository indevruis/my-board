"use client";

import { signOut } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button className="loginBtn" onClick={signOut}>
      Logout
    </button>
  );
}
