"use client";

import type { NavGroup, NavItem } from "@/app/_lib/navigation";
import { cn } from "@/app/_lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavDropdownProps {
  group: NavGroup;
}

export function NavDropdown({ group }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!group.children || group.children.length === 0) {
    return (
      <Link
        href={group.href || "#"}
        className="text-sm font-medium text-white transition-opacity hover:opacity-80"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-white transition-opacity hover:opacity-80"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-56 rounded-lg border border-white/10 bg-black/90 py-2 shadow-lg backdrop-blur-md">
          {group.children.map((item, index) => (
            <NavDropdownItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function NavDropdownItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={itemRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
        aria-expanded={isOpen}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute top-0 left-full z-50 ml-1 w-56 rounded-lg border border-white/10 bg-black/90 py-2 shadow-lg backdrop-blur-md">
          {item.children.map((child, index) => (
            <NavDropdownItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}
