import { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={`px-8 py-2 rounded-2xl hover:opacity-90 transition-opacity text-white relative ${
        className ?? ""
      }`}
      style={{
        background:
          "linear-gradient(93.36deg, #002034 -24.85%, #00041C 78.18%)",
        boxShadow: "1px 1px 8px 0px #00158C, -1px -1px 8px 0px #0087DD",
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(93.36deg, #0087DD -24.85%, #0426E5 78.18%)",
          padding: "1px",
          content: "''",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          pointerEvents: "none",
        }}
      />
    </button>
  );
}
