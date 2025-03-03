
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Youtube, Instagram, MessageCircle, Youtube as VK } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const socials = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Telegram" },
    { icon: VK, href: "#", label: "VK" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <h2 className="text-2xl font-bold mb-4">ВАЖНО</h2>
        <p className="text-gray-400 mb-6">
          По вопросам организации концертов и сотрудничества
        </p>
        <div className="flex justify-center space-x-6">
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
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
