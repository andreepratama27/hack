"use client";

import { Button } from "@/components/ui/button";
import STLViewer from "./stl-viewer";
import { useState } from "react";
import Image from "next/image";

import topComponent from "./assets/top-component.png";
import bottomComponent from "./assets/bottom-component.png";
import RefineButton from "./refine-button";

function ProductOverview() {
  const [selectedPosition, setSelectedPosition] = useState<
    "top" | "middle" | "bottom"
  >("top");

  const renderProductDetail = () => {
    if (selectedPosition === "top") {
      return (
        <div className="product-detail-section space-y-4">
          <div className="space-y-2">
            <p className="font-bold">Top Case</p>
            <p className="text-sm text-zinc-500">
              The top case is the top part of the product.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-bold">Image Component</p>
            <div className="image-wrapper">
              <Image
                src={topComponent}
                alt="Top Component"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      );
    }
    if (selectedPosition === "middle") {
      return (
        <div className="product-detail-section space-y-4">
          <div className="space-y-2">
            <p className="font-bold">PCB Front & Back</p>
            <p className="text-sm text-zinc-500">
              The top case is the top part of the product.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-bold">Circuit Diagram</p>
            <div className="image-wrapper">
              <Image
                src="/circuit-diagram.png"
                alt="Circuit Diagram"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      );
    }
    if (selectedPosition === "bottom") {
      return (
        <div className="product-detail-section space-y-4">
          <div className="space-y-2">
            <p className="font-bold">Bottom Case</p>
            <p className="text-sm text-zinc-500">
              The bottom case is the bottom part of the product.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-bold">Image Component</p>
            <div className="image-wrapper">
              <Image
                src={bottomComponent}
                alt="Bottom Component"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 px-0 py-0">
      <div className="flex w-full items-stretch">
        <section className="flex flex-1 flex-col bg-zinc-50 p-10 shadow-sm">
          <div className="mb-8">
            <p className="text-2xl font-semibold text-zinc-900">
              Product Overview
            </p>
          </div>

          <STLViewer onClick={(position) => setSelectedPosition(position)} />
        </section>

        <aside className="w-full flex flex-col justify-end gap-[48px] max-w-xs relative border border-zinc-200 bg-white p-8 text-zinc-600 self-stretch">
          {renderProductDetail()}

          <div className="button-wrapper space-y-4">
            <RefineButton />

            <Button size="lg" className="w-full" variant="secondary">
              Download Instruction
            </Button>

            <Button size="lg" className="w-full">
              Order Now [RM90.00]
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProductOverview;
