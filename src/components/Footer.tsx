"use client";

import Link from "next/link";
import { Crosshair, Instagram, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;

  return (
    <footer className="bg-[#050505] border-t border-[#1f1f1f]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6">
              <Crosshair className="w-8 h-8 text-[#ff4d00]" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider uppercase leading-none">
                  Gavronowich
                </span>
                <span className="text-[10px] text-[#ff4d00] uppercase tracking-[0.3em]">
                  Shooting Range
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {t("description")}
            </p>
            <a
              href="https://instagram.com/gavronowich"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#ff4d00] transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @gavronowich
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4d00] mb-6">
              {t("navigation")}
            </h3>
            <ul className="space-y-4">
              {[
                { href: `/${locale}/oferta`, label: tNav("oferta") },
                { href: `/${locale}/galeria`, label: tNav("galeria") },
                { href: `/${locale}/o-nas`, label: tNav("oNas") },
                { href: `/${locale}/kontakt`, label: tNav("kontakt") },
                { href: `/${locale}/rezerwacja`, label: tNav("rezerwacja") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-[#ff4d00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4d00] mb-6">
              {t("services")}
            </h3>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>{t("training")}</li>
              <li>{t("events")}</li>
              <li>{t("bachelor")}</li>
              <li>{t("tactical")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4d00] mb-6">
              {t("contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin className="w-4 h-4 text-[#ff4d00] mt-0.5 flex-shrink-0" />
                <span>Polska</span>
              </li>
              <li>
                <a
                  href="tel:+48000000000"
                  className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#ff4d00] mt-0.5 flex-shrink-0" />
                  <span>+48 000 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@gavronowich.pl"
                  className="flex items-start gap-3 text-gray-500 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#ff4d00] mt-0.5 flex-shrink-0" />
                  <span>kontakt@gavronowich.pl</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Gavronowich. {t("rights")}
            </p>
            <p className="text-gray-700 text-xs">
              Realizacja:{" "}
              <a
                href="https://agentflowm.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4d00] hover:text-[#ff6b2c] transition-colors"
              >
                AgentFlowMarketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
