"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, SendHorizonal } from "lucide-react";

function RefineButton() {
  const [isRefining, setIsRefining] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      {!isRefining ? (
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => setIsRefining(true)}
        >
          Refine Product
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label
              htmlFor="refine-input"
              className="text-sm font-medium text-zinc-700"
            >
              What would you like to refine?
            </label>
          </div>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
              <ImageIcon className="h-5 w-5" />
            </span>
            <Input
              id="refine-input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="h-14 rounded-2xl border-zinc-200 bg-zinc-50 pl-12 pr-12 text-base text-zinc-800"
              placeholder="Describe the update"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-2 text-zinc-600 shadow-sm hover:bg-zinc-50"
            >
              <SendHorizonal className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default RefineButton;
