import { getServerSession } from "next-auth";

export default function Page({ session }:any) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session.user.email}!</p>
    </div>
  );
}