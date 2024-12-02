import { FooterSection as FooterSectionType } from "./types";

interface FooterSectionProps {
  section: FooterSectionType;
}

export const FooterSection = ({ section }: FooterSectionProps) => (
  <div className="w-full">
    <h3 className="text-[#636779] text-sm mb-4 lg:mb-6">{section.title}</h3>
    <ul className="space-y-3 lg:space-y-4">
      {section.links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-white text-sm block"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
