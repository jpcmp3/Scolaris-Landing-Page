import { useState } from "react";
import { ChevronDown } from "lucide-react";
const languages = [
  { code: "en", label: "English" },
  { code: "bg", label: "Български" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "es", label: "Español" },
];

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const currentLang = "en";

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          rounded-full border 
          px-4 py-2 text-sm 
          transition hover:bg-white/50
        "
      >
        EN
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 z-50 mt-2 w-40
            overflow-hidden rounded-xl
             
            bg-gray-100 backdrop-blur
            shadow-lg
          "
        >
          {languages.map(({ code, label }) => {
            const isActive = currentLang === code;

            return (
              <button
                key={code}
                onClick={() => {
                  setOpen(false);
                }}
                className={`
                  w-full px-4 py-2 text-left text-sm transition
                  ${
                    isActive
                      ? "bg-black font-medium text-white"
                      : "text-[#1F2937] hover:bg-black/10"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
