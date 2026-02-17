"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      className={`relative group flex items-center px-4 py-3 rounded-xl transition-all duration-300 ease-out mb-1
          ${
            isActive
              ? "bg-blue-600/10 text-blue-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
          }
        `}
    >
      {/* Active Indicator Bar */}
      {isActive && (
        <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      )}

      <div
        className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-300
            ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-200"}
          `}
      >
        {icon}
      </div>

      <div className="flex flex-col ml-3">
        <span
          className={`text-[15px] font-semibold leading-none transition-colors duration-300
              ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}
            `}
        >
          {title}
        </span>
        <span
          className={`text-[11px] mt-1 font-medium transition-colors duration-300
              ${isActive ? "text-blue-400/70" : "text-slate-500 group-hover:text-slate-400"}
            `}
        >
          {subTitle}
        </span>
      </div>

      {/* Hover Arrow/Indicator */}
      <div
        className={`ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0
            ${isActive ? "text-blue-400" : "text-slate-600"}
          `}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </Link>
  );
};
