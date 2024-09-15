"use client";
import { useRouter } from "next/navigation";
import {signIn, signOut, useSession} from "next-auth/react";

export default function AppBar() {
    const session = useSession();
    return (
    <>
    <div>
      <button onClick={()=>{
          signIn();
        }}>Sign in</button>
    </div>
    <div>
    <button onClick={()=>{
        signOut();
    }}>Sign Out</button>
  </div>
  {JSON.stringify(session)}
    </>
  );
}