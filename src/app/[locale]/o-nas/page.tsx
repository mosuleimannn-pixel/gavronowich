"use client";

import { motion } from "framer-motion";
import { Target, Shield, Users, Award, ChevronRight, Heart, Zap, Star, Clock } from "lucide-react";
import Link from "next/link";
import { AnimatedTarget, RadarScanner, TacticalHUD, GunSilhouette, RecoilPattern } from "@/components/Visualizations";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";

const timelineYears = ["2015", "2017", "2019", "2022", "2024"] as const;
const valueKeys = ["safety", "quality", "passion", "innovation"] as const;
const valueIcons = { safety: Shield, quality: Award, passion: Heart, innovation: Zap };
const teamKeys = ["michal", "anna", "piotr"] as const;

export default function ONasPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("oNasPage");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4d00]/10 blur-[120px]" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-4 w-32 h-32 border-l-2 border-t-2 border-[#ff4d00]/30" />
        <div className="absolute top-20 right-4 w-32 h-32 border-r-2 border-t-2 border-[#ff4d00]/30" />
        <div className="absolute bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-[#ff4d00]/30" />
        <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-[#ff4d00]/30" />

        {/* Background target */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
          <AnimatedTarget />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff4d00]/20 border border-[#ff4d00]/50 backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
          >
            <Heart className="w-5 h-5 text-[#ff4d00]" />
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
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
        </div>

        {/* HUD elements */}
        <div className="absolute top-24 left-6 text-[10px] text-[#ff4d00]/60 font-mono space-y-1 hidden md:block">
          <div>EST: 2015</div>
          <div>LOC: POLAND</div>
        </div>
        <div className="absolute top-24 right-6 text-[10px] text-[#ff4d00]/60 font-mono text-right space-y-1 hidden md:block">
          <div>TEAM: 3</div>
          <div>EXP: 15+ YRS</div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ff4d00 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
                {t("story.subtitle")}
              </span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mt-4 mb-8 text-white leading-tight">
                {t("story.title1")}{" "}
                <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                  {t("story.title2")}
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {t("story.p1")}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t("story.p2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TacticalHUD label="MISSION CONTROL">
                <div className="aspect-square bg-gradient-to-br from-[#151515] to-[#0a0a0a] flex items-center justify-center p-8">
                  <RadarScanner className="w-full h-full max-w-[300px] max-h-[300px]" />
                </div>
              </TacticalHUD>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-[#0d0d0d] border-y border-[#ff4d00]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("timeline.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mt-4 text-white">
              {t("timeline.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("timeline.title2")}
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00]/50 to-transparent -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {timelineYears.map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#ff4d00] to-[#cc3d00] flex items-center justify-center text-white font-black text-xl relative z-10 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                  >
                    {year}
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-2 uppercase tracking-wider group-hover:text-[#ff4d00] transition-colors">
                    {t(`timeline.items.${year}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`timeline.items.${year}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ff4d00 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("values.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mt-4 text-white">
              {t("values.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("values.title2")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key, index) => {
              const Icon = valueIcons[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative p-8 bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#222222] hover:border-[#ff4d00] transition-all duration-500 group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff4d00]/0 to-[#ff4d00]/0 group-hover:from-[#ff4d00]/10 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center group-hover:bg-[#ff4d00]/20 transition-colors">
                      <Icon className="w-10 h-10 text-[#ff4d00]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-[#ff4d00] transition-colors">
                      {t(`values.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t(`values.items.${key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-[#0d0d0d] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("team.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight mt-4 text-white">
              {t("team.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("team.title2")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#222222] overflow-hidden group hover:border-[#ff4d00] transition-all duration-500"
              >
                {/* Photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-[#111111] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
                  <GunSilhouette className="w-40 h-24 opacity-20 group-hover:opacity-30 transition-opacity" />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#ff4d00]/0 group-hover:bg-[#ff4d00]/10 transition-colors" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#ff4d00] transition-colors">
                    {t(`team.members.${key}.name`)}
                  </h3>
                  <p className="text-[#ff4d00] text-sm font-bold uppercase tracking-wider mb-6">
                    {t(`team.members.${key}.role`)}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Clock className="w-4 h-4 text-[#ff4d00]" />
                      <span>{t(`team.members.${key}.exp`)} {t("team.experience")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Target className="w-4 h-4 text-[#ff4d00]" />
                      <span>{t("team.specialty")}: {t(`team.members.${key}.spec`)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
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
            </h2>
            <p className="text-gray-300 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/${locale}/rezerwacja`}
                className="inline-flex items-center gap-4 px-14 py-7 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_60px_rgba(255,77,0,0.4)] hover:shadow-[0_0_80px_rgba(255,77,0,0.6)]"
              >
                {t("cta.button")}
                <ChevronRight className="w-7 h-7" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
