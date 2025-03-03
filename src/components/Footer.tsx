
import { Youtube, Instagram, MessageCircle, Youtube as VK } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: VK, href: "#", label: "VK" },
  ];

  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon size={24} />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
        <p className="text-gray-500">© 2024 igor-base.ru</p>
      </div>
    </footer>
  );
};

export default Footer;
