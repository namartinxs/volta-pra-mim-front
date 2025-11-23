"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Bem-vinda! Você está logada ✅</p>
    </div>
  );
}
