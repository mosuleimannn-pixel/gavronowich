"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crosshair, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { locales, localeFlags, localeNames, type Locale } from "@/i18n/config";

export function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: t("start") },
    { href: `/${locale}/oferta`, label: t("oferta") },
    { href: `/${locale}/galeria`, label: t("galeria") },
    { href: `/${locale}/o-nas`, label: t("oNas") },
    { href: `/${locale}/kontakt`, label: t("kontakt") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Crosshair className="w-8 h-8 text-[#ff4d00]" />
              <div className="absolute inset-0 bg-[#ff4d00]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider uppercase leading-none">
                Gavronowich
              </span>
              <span className="text-[10px] text-[#ff4d00] uppercase tracking-[0.3em]">
                Shooting Range
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#ff4d00] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{localeFlags[locale]}</span>
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg overflow-hidden min-w-[140px]"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-3 hover:bg-[#1f1f1f] transition-colors ${
                          locale === loc ? "text-[#ff4d00]" : "text-gray-300"
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        <span>{localeNames[loc]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              href={`/${locale}/rezerwacja`}
              className="ml-4 px-6 py-2.5 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white text-sm font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(255,77,0,0.3)]"
            >
              {t("rezerwacja")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505] border-b border-[#1f1f1f] overflow-hidden"
          >
            <div className="px-4 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg text-gray-300 hover:text-[#ff4d00] transition-colors border-b border-[#1f1f1f]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="py-3 border-b border-[#1f1f1f]"
              >
                <div className="flex gap-4">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => {
                        switchLocale(loc);
                        setIsOpen(false);
                      }}
                      className={`text-2xl ${locale === loc ? "opacity-100" : "opacity-50"}`}
                    >
                      {localeFlags[loc]}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href={`/${locale}/rezerwacja`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-4 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white font-bold uppercase tracking-wider transition-colors"
                >
                  {t("rezerwacja")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
