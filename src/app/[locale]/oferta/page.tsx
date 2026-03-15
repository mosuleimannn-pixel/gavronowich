"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Target, Users, Trophy, Clock, ChevronRight, Check, Crosshair, Shield, Zap, Star, Award } from "lucide-react";
import { AnimatedTarget, RadarScanner, GunSilhouette, TacticalHUD, RecoilPattern, ShootingLanes } from "@/components/Visualizations";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";

const serviceKeys = ["basic", "advanced", "corporate", "bachelor"] as const;
const serviceIcons = {
  basic: Target,
  advanced: Trophy,
  corporate: Users,
  bachelor: Zap,
};
const serviceVisuals = {
  basic: <AnimatedTarget className="w-24 h-24" />,
  advanced: <RecoilPattern className="w-20 h-24" />,
  corporate: <RadarScanner className="w-24 h-24" />,
  bachelor: <GunSilhouette className="w-28 h-16" />,
};

const weapons = [
  { name: "Glock 17", typeKey: "pistol", caliber: "9x19mm" },
  { name: "Glock 19", typeKey: "compactPistol", caliber: "9x19mm" },
  { name: "CZ 75 B", typeKey: "pistol", caliber: "9x19mm" },
  { name: "Beretta 92", typeKey: "pistol", caliber: "9x19mm" },
  { name: "SIG P226", typeKey: "pistol", caliber: "9x19mm" },
  { name: "AR-15", typeKey: "rifle", caliber: ".223 Rem" },
  { name: "AK-47", typeKey: "rifle", caliber: "7.62x39mm" },
  { name: "Remington 870", typeKey: "shotgun", caliber: "12 Gauge" },
];

export default function OfertaPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("ofertaPage");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] via-[#0d0d0d] to-[#0a0a0a]" />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #ff4d00 1px, transparent 0)`,
              backgroundSize: '60px 60px',
              y,
            }}
          />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4d00]/10 blur-[120px]" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#ff4d00]/30" />
        <div className="absolute top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#ff4d00]/30" />
        <div className="absolute bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#ff4d00]/30" />
        <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#ff4d00]/30" />

        {/* Background visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
          <AnimatedTarget />
        </div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff4d00]/20 border border-[#ff4d00]/50 backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Crosshair className="w-5 h-5 text-[#ff4d00]" />
            </motion.div>
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            >
              <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">{t("hero.title1")}</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            >
              <span className="bg-gradient-to-r from-[#ff4d00] via-[#ff6b2c] to-[#ff4d00] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,77,0,0.5)]">
                {t("hero.title2")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </motion.div>

        {/* HUD elements */}
        <div className="absolute top-24 left-6 text-[10px] text-[#ff4d00]/60 font-mono space-y-1 hidden md:block">
          <div>SYS: ONLINE</div>
          <div>MODE: SELECT</div>
        </div>
        <div className="absolute top-24 right-6 text-[10px] text-[#ff4d00]/60 font-mono text-right space-y-1 hidden md:block">
          <div>STATUS: READY</div>
          <div>PACKAGES: 4</div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ff4d00 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[key];
              const isPopular = key === "advanced";
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`relative group`}
                >
                  <div className={`p-8 bg-gradient-to-b from-[#151515] to-[#0a0a0a] border ${isPopular ? 'border-[#ff4d00]' : 'border-[#222222]'} hover:border-[#ff4d00] transition-all duration-500`}>
                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff4d00]/0 to-[#ff4d00]/0 group-hover:from-[#ff4d00]/10 group-hover:to-transparent transition-all duration-500" />
                    
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#ff4d00] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {t("popular")}
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-start gap-6">
                          <div className="w-20 h-20 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center group-hover:bg-[#ff4d00]/20 transition-colors">
                            <Icon className="w-10 h-10 text-[#ff4d00]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#ff4d00] transition-colors">
                              {t(`services.${key}.title`)}
                            </h3>
                            <p className="text-gray-400 max-w-sm">
                              {t(`services.${key}.description`)}
                            </p>
                          </div>
                        </div>
                        <div className="hidden lg:block">
                          {serviceVisuals[key]}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Clock className="w-4 h-4 text-[#ff4d00]" />
                        <span>{t(`services.${key}.duration`)}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {[0, 1, 2, 3].map((i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          >
                            <div className="w-2 h-2 bg-[#ff4d00] rotate-45" />
                            {t(`services.${key}.includes.${i}`)}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between pt-6 border-t border-[#222222]">
                        <div>
                          <span className="text-4xl font-black text-white">
                            {t(`services.${key}.price`)}
                          </span>
                          <span className="text-gray-500 ml-2 text-lg">
                            {t(`services.${key}.currency`)}
                          </span>
                        </div>
                        <Link
                          href={`/${locale}/rezerwacja`}
                          className="px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                        >
                          {t("bookNow")}
                          <ChevronRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Arsenal Section with TacticalHUD */}
      <section className="py-32 bg-[#0d0d0d] border-y border-[#ff4d00]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("arsenal.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mt-4 text-white">
              {t("arsenal.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("arsenal.title2")}
              </span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              {t("arsenal.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Arsenal Display */}
            <div className="lg:col-span-2">
              <TacticalHUD label="ARSENAL DATABASE">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
                  {weapons.map((weapon, index) => (
                    <motion.div
                      key={weapon.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-black/50 border border-[#ff4d00]/30 hover:border-[#ff4d00] transition-all group cursor-pointer"
                    >
                      <div className="text-[#ff4d00] text-[10px] font-bold uppercase tracking-wider mb-1">
                        {t(`weapons.${weapon.typeKey}`)}
                      </div>
                      <div className="text-white font-bold text-sm mb-1">{weapon.name}</div>
                      <div className="text-gray-500 text-xs font-mono">{weapon.caliber}</div>
                    </motion.div>
                  ))}
                </div>
              </TacticalHUD>
            </div>

            {/* Stats sidebar */}
            <div className="space-y-4">
              <div className="p-6 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#ff4d00]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">8+</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">{t(`weapons.pistol`)}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#ff4d00]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">4+</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">{t(`weapons.rifle`)}</div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#ff4d00]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">2+</div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider">{t(`weapons.shotgun`)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shooting Lanes Visualization */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("process.subtitle")}
            </span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mt-4 text-white">
              {t("process.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("process.title2")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {(["book", "arrive", "train", "enjoy"] as const).map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-b from-[#ff4d00] to-[#cc3d00] flex items-center justify-center text-4xl font-black text-white shadow-[0_0_30px_rgba(255,77,0,0.4)]">
                  {index + 1}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#ff4d00] to-transparent" />
                )}
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                  {t(`process.steps.${step}.title`)}
                </h3>
                <p className="text-gray-400">
                  {t(`process.steps.${step}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-40 md:h-52 p-8 border border-[#222222] bg-gradient-to-b from-[#111111] to-[#0a0a0a]"
          >
            <ShootingLanes />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#0d0d0d] to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4d00]/20 blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 mx-auto mb-10">
              <AnimatedTarget />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-white">
              {t("cta.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("cta.title2")}
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/${locale}/rezerwacja`}
                  className="inline-flex items-center gap-4 px-14 py-6 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_60px_rgba(255,77,0,0.4)] hover:shadow-[0_0_80px_rgba(255,77,0,0.6)]"
                >
                  {t("bookNow")}
                  <ChevronRight className="w-7 h-7" />
                </Link>
              </motion.div>
              <Link
                href={`/${locale}/kontakt`}
                className="inline-flex items-center gap-3 px-12 py-6 border-2 border-white/30 hover:border-[#ff4d00] text-white font-bold text-lg uppercase tracking-wider transition-all hover:bg-[#ff4d00]/10"
              >
                {t("cta.contactBtn")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
