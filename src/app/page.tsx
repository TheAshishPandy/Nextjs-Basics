"use client"
import ClientComponent from "@/component/LearnClientComponent";
import DataFeteching from "@/component/LearnDataFeteching";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const id = 2;

  const router = useRouter();
  console.log(router)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>Hello Next JS</div>
      <Link href="/admin/dashboard"> Go To Admin Dashboard</Link><br />
      <Link href={`/user/${id}`}> Go To User Profile</Link>
      <button type="button" onClick={() => router.push("/admin/profile")}> Go to Admin Profile</button>
      <ClientComponent></ClientComponent>
      <DataFeteching />
      
    </main>
  );
}
