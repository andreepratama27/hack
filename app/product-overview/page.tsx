"use client";

import { Button } from "@/components/ui/button";
import STLViewer from "./stl-viewer";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ProductOverview() {
  const router = useRouter();
  const [selectedPosition, setSelectedPosition] = useState<
    "top" | "middle" | "bottom"
  >("top");

  const renderProductDetail = () => {
    return (
      <div className="product-detail-section space-y-4">
        <p className="text-2xl font-bold text-black">Product Overview</p>

        <div className="container space-y-[20px] overflow-scroll h-[500px] scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent">
          <p className="font-bold text-lg text-black">Electronics</p>

          <div className="section space-y-2">
            <p className="text-base">PCB Front & Back</p>
            <button
              type="button"
              className="block w-fit p-0 bg-transparent border-none focus:outline-none"
              tabIndex={0}
              aria-label="View PCB Front & Back"
            >
              <Image
                src="/component-0.png"
                alt="PCB Front & Back"
                width={500}
                height={500}
                className="rounded-lg hover:outline-green-800 transition-all duration-150"
              />
            </button>
          </div>

          <div className="section space-y-2">
            <p className="text-base">Circuit Diagram</p>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="block w-fit p-0 bg-transparent border-none focus:outline-none"
                tabIndex={0}
                aria-label="View Circuit Diagram 1"
              >
                <Image
                  src="/pcb-1.png"
                  alt="Circuit Diagram"
                  width={500}
                  height={500}
                  className="  rounded-lg hover:outline-green-800 transition-all duration-150"
                />
              </button>

              <button
                type="button"
                className="block w-fit p-0 bg-transparent border-none focus:outline-none"
                tabIndex={0}
                aria-label="View Circuit Diagram 2"
              >
                <Image
                  src="/pcb-2.png"
                  alt="Circuit Diagram"
                  width={500}
                  height={500}
                  className=" rounded-lg hover:outline-green-800 transition-all duration-150"
                />
              </button>

              <button
                type="button"
                className="block w-fit p-0 bg-transparent border-none focus:outline-none"
                tabIndex={0}
                aria-label="View Circuit Diagram 3"
              >
                <Image
                  src="/pcb-3.png"
                  alt="Circuit Diagram"
                  width={500}
                  height={500}
                  className=" rounded-lg hover:outline-green-800 transition-all duration-150"
                />
              </button>

              <button
                type="button"
                className="block w-fit p-0 bg-transparent border-none focus:outline-none"
                tabIndex={0}
                aria-label="View Circuit Diagram 4"
              >
                <Image
                  src="/pcb-4.png"
                  alt="Circuit Diagram"
                  width={500}
                  height={500}
                  className=" rounded-lg hover:outline-green-800 transition-all duration-150"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 px-0 py-0">
      <div className="flex w-full items-stretch">
        <section className="flex flex-1 flex-col bg-zinc-50 p-10 shadow-sm mt-[46px]">
          <div className="mb-8">
            <p className="text-2xl font-semibold text-zinc-900">
              Product Overview
            </p>
          </div>

          <STLViewer onClick={(position) => setSelectedPosition(position)} />
        </section>

        <aside className="w-full flex flex-col justify-between pt-[72px] gap-[48px] max-w-xs relative border-zinc-200 bg-white p-8 text-zinc-600 self-stretch shadow-sm">
          {renderProductDetail()}

          <div className="button-wrapper space-y-4">
            <Button
              size="lg"
              className="w-full"
              variant="outline"
              onClick={() => router.push("/refine")}
            >
              Refine Product
            </Button>

            <Button size="lg" className="w-full" variant="secondary">
              Download Instruction
            </Button>

            <Button
              size="lg"
              className="w-full bg-green-600 text-white hover:bg-green-600/90"
            >
              Order Now [RM90.00]
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProductOverview;
