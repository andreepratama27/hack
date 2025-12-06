import Image from "next/image";
import topComponent from "./assets/top-component.png";
import middleComponent from "./assets/middle-component.png";
import bottomComponent from "./assets/bottom-component.png";

interface STLViewerProps {
  onClick: (position: "top" | "middle" | "bottom") => void;
}

function STLViewer({ onClick }: STLViewerProps) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-50 p-8">
      <div className="relative flex w-full max-w-sm flex-col items-center">
        <Image
          src={topComponent}
          alt="Top component"
          className="w-full max-w-[280px] relative z-30"
          priority
          onClick={() => onClick("top")}
        />
        <Image
          src={middleComponent}
          alt="Middle component"
          className="w-full max-w-[280px] z-20 -top-4 relative"
          onClick={() => onClick("middle")}
        />
        <Image
          src={bottomComponent}
          alt="Bottom component"
          className="w-full max-w-[280px] relative z-10 -top-10"
          onClick={() => onClick("bottom")}
        />
      </div>
    </div>
  );
}

export default STLViewer;
