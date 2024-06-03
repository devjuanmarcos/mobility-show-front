import React from "react";
import { ContatoBanner } from "@/components/banners/contatoBanner";

export default async function Home() {
  return (
    <section className="flex justify-center items-center w-full h-full" id="mob-show">
      <ContatoBanner />
    </section>
  );
}
