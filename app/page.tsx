"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-16 font-sans dark:bg-black">
      <div className="flex flex-col w-[480px] mx-auto space-y-2">
        <p className="font-bold text-2xl">Hi John!</p>
        <div className="w-full space-y-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="w-full h-[40px]">
            <Input
              placeholder="What do you want to build today?"
              className="border-none outline-none focus:outline-none hover:outline-none shadow-none active:outline-none focus:ring-0"
            />
          </div>

          <div className="button-wrapper flex justify-between items-center">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full p-2"
            >
              <PlusIcon className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-600/90"
              variant="secondary"
              onClick={() => router.push("/product-overview")}
            >
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
