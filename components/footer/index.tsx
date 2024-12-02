import Link from "next/link";
import { Discord } from "../icon/discord";
import { Telegram } from "../icon/telegram";
import { X } from "../icon/x";
import { FOOTER_LEGAL_LINKS, FOOTER_SECTIONS } from "./constants";
import { FooterSection } from "./footer-section";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background1">
      <div className="container mx-auto px-4 lg:px-20 py-8 lg:pt-16 lg:pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Brand Section */}
          <div className="w-full lg:w-1/3">
            <div className="text-white font-extrabold text-2xl font-secondary mb-4 lg:mb-0">
              7NFTix
            </div>
            <p className="text-gray-400 text-sm max-w-[440px]">
              7NFTix is a vibrant community of NFT enthusiasts, offering a
              secure platform to discover, buy, and sell unique digital assets.
            </p>
            <div>
              <Link
                href="#"
                className="text-white hover:text-gray-400 inline-block mt-4"
              >
                <span className="sr-only">Discord</span>
                <Discord />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-400 inline-block mt-4 ml-4"
              >
                <span className="sr-only">Telegram</span>
                <Telegram />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-400 inline-block mt-4 ml-4"
              >
                <span className="sr-only">Twitter</span>
                <X />
              </Link>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4">
            {FOOTER_SECTIONS.map((section) => (
              <FooterSection key={section.title} section={section} />
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900 mt-8 lg:mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} 7NFTix. All rights reserved
            </p>
            <div className="flex space-x-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
