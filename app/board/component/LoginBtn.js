"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="loginBtn"
      onClick={() => {
        signIn();
      }}
    >
      Login
    </button>
  );
}
