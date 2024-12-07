import React from "react";
import { MainBanner } from "@/components/banners/mainBanner";

export default async function Home() {
  return (
    <section className="flex justify-center items-center w-full" id="mob-show">
      <MainBanner />
    </section>
  );
}
