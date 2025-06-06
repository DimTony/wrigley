"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import UserCard from "../components/UserCard";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  if (!session?.user) return;

  return (
    <section className='flex flex-col gap-6'>
      <div>client</div>
      {/* <UserCard user={session?.user} pagetype={"Client"} /> */}
    </section>
  );
}
