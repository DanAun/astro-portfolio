import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const status = {
    available: true,
    message: "Currently open to new opportunities in cybersecurity and network security roles.",
    location: "Oslo, Norway",
    type: "Full-time"
  };

  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Status"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-700"
      >
        <FaBell className="text-2xl text-white cursor-pointer" />
        {status.available && (
          <span className="absolute top-0 right-0 inline-flex h-3 w-3 rounded-full bg-green-500 border-2 border-gray-900"></span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 rounded-lg border-none bg-gray-900 shadow-lg drop-shadow-[4px_4px_0_#7836cf]">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              <h4 className="text-sm font-bold text-gray-200 drop-shadow-[1px_1px_0_#7836cf]">
                Available for Work
              </h4>
            </div>
            <p className="text-sm text-gray-300 mb-3">{status.message}</p>
            <div className="text-xs text-gray-400 space-y-1">
              <p>📍 {status.location}</p>
              <p>💼 {status.type}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}