
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";
import ArchiveModal from "./ArchiveModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { 
      label: "Билеты", 
      href: "#tickets",
      isAnchor: true 
    },
    { 
      label: "Видео", 
      href: "#videos",
      isAnchor: true 
    },
    {
      label: "Архив",
      onClick: () => setShowArchiveModal(true),
    },
    {
      label: "Контакты",
      onClick: () => setShowContactModal(true),
    },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="glass-card">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-semibold text-primary">
                Игорь Фамильев
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                {menuItems.map((item) => (
                  item.isAnchor ? (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="smooth-scroll-link"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      onClick={item.onClick}
                      className="smooth-scroll-link"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-64" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="px-4 py-2">
              {menuItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block py-2 smooth-scroll-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left py-2 smooth-scroll-link"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      <ContactModal
        open={showContactModal}
        onOpenChange={setShowContactModal}
      />
      <ArchiveModal
        open={showArchiveModal}
        onOpenChange={setShowArchiveModal}
      />
    </>
  );
};

export default Navbar;
