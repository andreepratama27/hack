"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeftIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isRoot = pathname === "/";

  return (
    <nav className="flex items-center px-[16px] h-[56px] fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {!isRoot && (
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center p-1"
          aria-label="Go back"
          type="button"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
      )}
      <Link href="/" className="flex items-center gap-[8px]">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />

        <p className="text-lg font-bold leading-[24px] tracking-wider">
          Proto<span className="text-green-600">AI</span>
        </p>
      </Link>
    </nav>
  );
}

export default Navbar;
