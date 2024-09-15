import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center p-3">20% off for all the items</div>
      {children}
    </div>
  );
}
