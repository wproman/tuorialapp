"use client";

import { useRouter } from "next/navigation";

const RomanPage = () => {
  const router = useRouter();
  const Logout = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();
    console.log(json);

    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div>
      <h1>roaman page</h1>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default RomanPage;
