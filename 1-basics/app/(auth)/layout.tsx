import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="pt-3 text-center text-blue-400 border-b-2">
        Signup/Signin
      </div>

      {children}
    </div>
  );
}
