"use server";

import { Suspense } from "react";

import { GlobalLoading } from "@/components/Loading";
import { Portfolio } from "@/components/container/Portfolio";

export default async function Home() {
  return (
    <Suspense fallback={<GlobalLoading />}>
      <Portfolio />
    </Suspense>
  );
}
