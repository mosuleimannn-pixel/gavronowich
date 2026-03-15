"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Clock, Send, Check, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";
import { AnimatedTarget, TacticalHUD, RadarScanner } from "@/components/Visualizations";

export default function KontaktPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("kontaktPage");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const subjectKeys = ["reservation", "training", "event", "other"] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] via-[#0d0d0d] to-[#0a0a0a]" />
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `linear-gradient(rgba(255,77,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff4d00]/10 blur-[100px]" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-4 w-24 h-24 border-l-2 border-t-2 border-[#ff4d00]/40" />
        <div className="absolute top-20 right-4 w-24 h-24 border-r-2 border-t-2 border-[#ff4d00]/40" />
        <div className="absolute bottom-4 left-4 w-24 h-24 border-l-2 border-b-2 border-[#ff4d00]/40" />
        <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#ff4d00]/40" />

        {/* Background visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-10">
          <AnimatedTarget />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff4d00]/20 border border-[#ff4d00]/50 backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
          >
            <MessageSquare className="w-5 h-5 text-[#ff4d00]" />
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            >
              <span className="bg-gradient-to-r from-[#ff4d00] via-[#ff6b2c] to-[#ff4d00] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,77,0,0.5)]">
                {t("hero.title")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            {t("hero.description")}
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ff4d00 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12">
                {t("info.title1")} <span className="text-[#ff4d00]">{t("info.title2")}</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: t("info.phone"), value: "+48 123 456 789" },
                  { icon: Mail, label: t("info.email"), value: "kontakt@gavronowich.pl" },
                  { icon: MapPin, label: t("info.address"), value: t("info.addressValue") },
                  { icon: Clock, label: t("info.hours"), value: t("info.hoursValue"), multiline: true },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-5 p-6 bg-gradient-to-r from-[#151515] to-[#0a0a0a] border border-[#222222] hover:border-[#ff4d00]/50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff4d00]/20 transition-colors">
                      <item.icon className="w-7 h-7 text-[#ff4d00]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{item.label}</h3>
                      <p className={`text-gray-400 ${item.multiline ? 'whitespace-pre-line' : ''}`}>{item.value}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/gavronowich"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-5 p-6 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] group"
                >
                  <div className="w-14 h-14 bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{t("info.instagram")}</h3>
                    <p className="text-white/80">@gavronowich</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12">
                {t("form.title1")} <span className="text-[#ff4d00]">{t("form.title2")}</span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-16 bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#ff4d00] text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-8 bg-[#ff4d00] flex items-center justify-center">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                    {t("form.success")}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {t("form.successDesc")}
                  </p>
                </motion.div>
              ) : (
                <TacticalHUD label="MESSAGE FORM">
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                        {t("form.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors placeholder-gray-600"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                          {t("form.email")} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                          {t("form.phone")}
                        </label>
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors placeholder-gray-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                        {t("form.subject")} *
                      </label>
                      <select
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors"
                      >
                        <option value="">--</option>
                        {subjectKeys.map((key) => (
                          <option key={key} value={key}>
                            {t(`form.subjects.${key}`)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                        {t("form.message")} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors resize-none placeholder-gray-600"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 bg-[#ff4d00] hover:bg-[#ff6b2c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                    >
                      {isSubmitting ? t("form.sending") : t("form.send")}
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                </TacticalHUD>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-[#0d0d0d] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              {t("map.title1")} <span className="text-[#ff4d00]">{t("map.title2")}</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              {t("map.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <TacticalHUD label="LOCATION">
              <div className="aspect-video bg-gradient-to-b from-[#151515] to-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6">
                    <RadarScanner className="w-full h-full" />
                  </div>
                  <MapPin className="w-16 h-16 text-[#ff4d00] mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">{t("info.addressValue")}</p>
                </div>
              </div>
            </TacticalHUD>
          </motion.div>
        </div>
      </section>
    </>
  );
}
