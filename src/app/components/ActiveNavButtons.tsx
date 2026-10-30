"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveTab } from "./ActiveTabContext";

const popButton = cn(buttonVariants({ variant: "pop", size: "lg" }), "rounded-xl text-base");

export default function ActiveNavButtons() {
  const { setActiveTab } = useActiveTab();

  return (
    <div className="mt-6 flex flex-col gap-4 items-start">
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className={popButton}
          onClick={() => setActiveTab("/projects")}
        >
          Projects
        </Link>
        <Link
          href="/cv"
          className={popButton}
          onClick={() => setActiveTab("/cv")}
        >
          CV
        </Link>
      </div>
      <Link
        href="https://pomocd.org"
        target="_blank"
        className={popButton}
      >
        PomoCD
      </Link>
    </div>
  );
}
