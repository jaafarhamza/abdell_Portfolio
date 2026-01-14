"use client";

import { useState } from "react";
import Image from "next/image";
import { contactInfo } from "@/lib/contact-info";

type ContactItem = {
  id: string;
  icon: string;
  label: string;
  value: string;
  displayValue: string;
  bgColor: string;
  hoverColor: string;
};

const contactItems: ContactItem[] = [
  {
    id: "whatsapp",
    icon: "/contact/whatsapp.svg",
    label: contactInfo.whatsapp.label,
    value: contactInfo.whatsapp.phone,
    displayValue: contactInfo.whatsapp.displayPhone,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
  },
  {
    id: "drive",
    icon: "/contact/drive.svg",
    label: contactInfo.drive.label,
    value: contactInfo.drive.url,
    displayValue: contactInfo.drive.displayUrl,
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    id: "email",
    icon: "/contact/gmail.svg",
    label: contactInfo.email.label,
    value: contactInfo.email.address,
    displayValue: contactInfo.email.displayAddress,
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700",
  },
];

export function FloatingContactSidebar() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (item: ContactItem) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const truncateText = (text: string, maxLength: number = 25) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-100 flex flex-col pr-0">
      {contactItems.map((item) => {
        const isExpanded = expandedId === item.id;
        const isCopied = copiedId === item.id;

        return (
          <div
            key={item.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setExpandedId(item.id)}
            onMouseLeave={() => setExpandedId(null)}
          >
            {/* Expanded Card - appears to the left of icon */}
            <div
              className={`transition-all duration-300 ease-out overflow-hidden ${
                isExpanded ? "w-72 opacity-100 mr-2" : "w-0 opacity-0 mr-0"
              }`}
            >
              <div
                className={`${item.bgColor} rounded-l-2xl rounded-r-2xl p-4 shadow-2xl h-20 flex flex-col justify-between`}
              >
                {/* Label at top */}
                <p className="text-black text-sm font-bold">{item.label}</p>

                {/* Value and Copy Button at bottom */}
                <div className="flex items-center justify-between gap-3">
                  <p className="text-black text-xs font-semibold flex-1 break-all line-clamp-2">
                    {truncateText(item.displayValue, 35)}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item);
                    }}
                    className={`shrink-0 p-2 bg-white/20 ${item.hoverColor} rounded-lg transition-all duration-200 hover:scale-110 active:scale-95`}
                    aria-label={`Copy ${item.label}`}
                    title="Click to copy"
                  >
                    {isCopied ? (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <Image
                        src="/contact/copy.svg"
                        alt="Copy"
                        width={16}
                        height={16}
                        className="w-4 h-4 brightness-0 invert"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Icon Button - always visible */}
            <button
              className={`${item.bgColor} ${item.hoverColor} p-4 rounded-l-xl shadow-xl transition-all duration-300 ${
                isExpanded ? "scale-110 shadow-2xl" : "scale-100"
              }`}
              aria-label={item.label}
              title={item.label}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
