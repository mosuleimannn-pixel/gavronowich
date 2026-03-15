"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronRight, Play, Crosshair, Shield, Target, Award, Users, Zap } from "lucide-react";
import { AnimatedTarget, BulletTrajectory, RadarScanner, ShootingLanes, RecoilPattern, TacticalHUD, GunSilhouette } from "@/components/Visualizations";
import dynamic from "next/dynamic";
import { useTranslations, useLocale } from "next-intl";
import { type Locale } from "@/i18n/config";

// Dynamic import for 3D viewer to avoid SSR issues
const WeaponViewer3D = dynamic(() => import("@/components/WeaponViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#ff4d00] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Home() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      {/* Hero Section - Full Impact */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Layered Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0505] to-black" />
          
          {/* Animated radial pulse */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-[#ff4d00]/30 via-[#ff4d00]/5 to-transparent"
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,77,0,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,77,0,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          
          {/* Diagonal lines */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 100px,
                rgba(255,77,0,0.1) 100px,
                rgba(255,77,0,0.1) 101px
              )`
            }}
          />
        </div>

        {/* Large Animated Target - Background */}
        <motion.div 
          style={{ scale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
        >
          <AnimatedTarget className="w-full h-full opacity-40" />
        </motion.div>

        {/* Floating particles - static positions to avoid hydration mismatch */}
        {[
          { left: 10, top: 20, dur: 3.2, del: 0.1 }, { left: 25, top: 45, dur: 4.1, del: 0.8 },
          { left: 35, top: 15, dur: 3.5, del: 1.2 }, { left: 50, top: 70, dur: 4.5, del: 0.3 },
          { left: 65, top: 30, dur: 3.8, del: 1.5 }, { left: 80, top: 55, dur: 4.2, del: 0.6 },
          { left: 15, top: 80, dur: 3.3, del: 1.8 }, { left: 45, top: 90, dur: 4.0, del: 0.2 },
          { left: 70, top: 10, dur: 3.7, del: 1.0 }, { left: 90, top: 40, dur: 4.3, del: 0.9 },
          { left: 5, top: 60, dur: 3.4, del: 1.4 }, { left: 55, top: 25, dur: 4.4, del: 0.5 },
          { left: 75, top: 75, dur: 3.6, del: 1.7 }, { left: 20, top: 35, dur: 4.1, del: 0.4 },
          { left: 40, top: 85, dur: 3.9, del: 1.1 }, { left: 85, top: 20, dur: 4.2, del: 0.7 },
          { left: 30, top: 50, dur: 3.5, del: 1.6 }, { left: 60, top: 65, dur: 4.0, del: 0.2 },
          { left: 95, top: 80, dur: 3.8, del: 1.3 }, { left: 12, top: 95, dur: 4.5, del: 0.1 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff4d00] rounded-full"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.del }}
          />
        ))}

        {/* Content */}
        <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            {/* Badge with glow */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff4d00]/20 border border-[#ff4d00]/50 backdrop-blur-sm mb-10 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Crosshair className="w-5 h-5 text-[#ff4d00]" />
              </motion.div>
              <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Main Heading with stagger */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.85]"
              >
                <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  {t("hero.title1")}
                </span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.85]"
              >
                <span className="block bg-gradient-to-r from-[#ff4d00] via-[#ff6b2c] to-[#ff4d00] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(255,77,0,0.5)]">
                  {t("hero.title2")}
                </span>
              </motion.h1>
            </div>

            {/* Bullet trajectory */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-xl mx-auto h-20 mb-10"
            >
              <BulletTrajectory />
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href={`/${locale}/rezerwacja`}
                className="group relative px-12 py-6 bg-[#ff4d00] text-white font-bold text-lg uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(255,77,0,0.5)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t("hero.cta1")}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff6b2c] via-[#ff4d00] to-[#ff6b2c]"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: 0.5 }}
                />
              </Link>
              <Link
                href={`/${locale}/galeria`}
                className="group px-12 py-6 border-2 border-white/30 hover:border-[#ff4d00] text-white font-bold text-lg uppercase tracking-wider transition-all backdrop-blur-sm flex items-center justify-center gap-3 hover:bg-[#ff4d00]/10"
              >
                <Play className="w-6 h-6 text-[#ff4d00]" />
                {t("hero.cta2")}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Corner HUD elements */}
        <div className="absolute top-24 left-6 text-[10px] text-[#ff4d00]/60 font-mono space-y-1">
          <div>SYS: ONLINE</div>
          <div>LOC: POLSKA</div>
        </div>
        <div className="absolute top-24 right-6 text-[10px] text-[#ff4d00]/60 font-mono text-right space-y-1">
          <div>STATUS: READY</div>
          <div>MODE: TACTICAL</div>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-20 left-4 w-24 h-24 border-l-2 border-t-2 border-[#ff4d00]/40" />
        <div className="absolute top-20 right-4 w-24 h-24 border-r-2 border-t-2 border-[#ff4d00]/40" />
        <div className="absolute bottom-4 left-4 w-24 h-24 border-l-2 border-b-2 border-[#ff4d00]/40" />
        <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#ff4d00]/40" />
      </section>

      {/* Weapons Showcase - 3D Models */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#ff4d00]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("arsenal.subtitle")}
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-4 text-white">
              {t("arsenal.title")}
            </h2>
            <p className="text-gray-400 mt-4 text-sm uppercase tracking-wider">
              {t("arsenal.description")}
            </p>
          </motion.div>
          
          {/* Weapon cards with 3D models */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Glock 17", typeKey: "pistolet" as const, model: "/models/glock_17_stock_model.glb", scale: 6, rotation: [0, 0, 0] as [number, number, number], position: [0, 0, 0] as [number, number, number] },
              { name: "AR-15", typeKey: "karabin" as const, model: "/models/ar-15_slr.glb", scale: 0.5, rotation: [0, 0, 0] as [number, number, number], position: [0, 0, 0] as [number, number, number] },
              { name: "Remington 870", typeKey: "strzelba" as const, model: "/models/remington_870_shotgun.glb", scale: 3.5, rotation: [0, 0, 0] as [number, number, number], position: [0, 0, 0] as [number, number, number] },
              { name: "AK-47", typeKey: "karabin" as const, model: "/models/ak-47.glb", scale: 0.025, rotation: [0, 0, 0] as [number, number, number], position: [0, 0, 0] as [number, number, number] },
            ].map((weapon, index) => (
              <motion.div
                key={weapon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#222222] hover:border-[#ff4d00] transition-all overflow-hidden"
              >
                {/* 3D Model Viewer */}
                <div className="aspect-[4/3] relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
                  <WeaponViewer3D
                    modelPath={weapon.model}
                    scale={weapon.scale}
                    rotation={weapon.rotation}
                    position={weapon.position}
                    autoRotate={false}
                    showControls={true}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#ff4d00]/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#ff4d00]/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#ff4d00]/50 z-10" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#ff4d00]/50 z-10" />
                </div>
                
                <div className="p-4">
                  <div className="text-[#ff4d00] text-xs font-bold uppercase tracking-wider mb-1">
                    {t(`arsenal.types.${weapon.typeKey}`)}
                  </div>
                  <div className="text-white font-bold text-lg">
                    {weapon.name}
                  </div>
                </div>
                
                {/* Hover accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff4d00] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href={`/${locale}/oferta`}
              className="inline-flex items-center gap-2 text-[#ff4d00] font-semibold uppercase tracking-wider group"
            >
              {t("arsenal.seeAll")}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Card grid with hover effects */}
      <section className="py-32 bg-[#0a0a0a] relative">
        {/* Subtle background pattern */}
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
            <motion.span 
              className="inline-block text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("why.subtitle")}
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white">
              {t("why.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("why.title2")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                key: "precision",
                visual: <AnimatedTarget className="w-28 h-28" />,
              },
              {
                key: "safety",
                visual: <RadarScanner className="w-28 h-28" />,
              },
              {
                key: "equipment",
                visual: <GunSilhouette className="w-32 h-20" />,
              },
              {
                key: "technique",
                visual: <RecoilPattern className="w-24 h-28" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#222222] hover:border-[#ff4d00] transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff4d00]/0 to-[#ff4d00]/0 group-hover:from-[#ff4d00]/10 group-hover:to-transparent transition-all duration-500" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Visual */}
                  <div className="mb-8 flex justify-center h-28 items-center">
                    {feature.visual}
                  </div>
                  
                  <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 text-center text-white group-hover:text-[#ff4d00] transition-colors">
                    {t(`why.features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {t(`why.features.${feature.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Split layout */}
      <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff4d00]/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em] mb-4">
                {t("services.subtitle")}
              </span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-8 text-white leading-tight">
                {t("services.title1")}{" "}
                <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                  &
                </span>{" "}
                {t("services.title2")}
              </h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                {t("services.description")}
              </p>

              <ul className="space-y-5 mb-12">
                {[0, 1, 2, 3].map((index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-4 h-4 bg-[#ff4d00] rotate-45 group-hover:rotate-[225deg] transition-transform duration-300" />
                    <span className="text-gray-200 text-lg group-hover:text-white transition-colors">{t(`services.list.${index}`)}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href={`/${locale}/oferta`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#ff4d00] text-[#ff4d00] font-bold uppercase tracking-wider group hover:bg-[#ff4d00] hover:text-white transition-all"
              >
                {t("services.cta")}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TacticalHUD label="Target Zone">
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-[#222222]">
                  {/* Target visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatedTarget className="w-64 h-64" />
                  </div>
                  
                  {/* Scan lines */}
                  <motion.div
                    animate={{ y: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent"
                  />
                  <motion.div
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#ff4d00] to-transparent"
                  />
                  
                  {/* HUD overlays */}
                  <div className="absolute top-4 left-4 text-xs text-[#ff4d00] font-mono space-y-1.5">
                    <div className="bg-black/70 px-3 py-1.5 border-l-2 border-[#ff4d00]">RANGE: 25M</div>
                    <div className="bg-black/70 px-3 py-1.5 border-l-2 border-[#ff4d00]">WIND: 0 KM/H</div>
                    <div className="bg-black/70 px-3 py-1.5 border-l-2 border-[#ff4d00]">TEMP: 21°C</div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-[#ff4d00] font-mono text-right space-y-1.5">
                    <div className="bg-black/70 px-3 py-1.5 border-r-2 border-[#ff4d00]">STATUS: READY</div>
                    <div className="bg-black/70 px-3 py-1.5 border-r-2 border-[#ff4d00]">TARGETS: 5</div>
                    <div className="bg-black/70 px-3 py-1.5 border-r-2 border-[#ff4d00]">AMMO: ∞</div>
                  </div>
                </div>
              </TacticalHUD>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shooting Lanes Section */}
      <section className="py-28 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em] mb-4">
              {t("infrastructure.subtitle")}
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
              {t("infrastructure.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("infrastructure.title2")}
              </span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              {t("infrastructure.description")}
            </p>
          </motion.div>
          
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

      {/* CTA Section - Maximum impact */}
      <section className="py-32 bg-gradient-to-b from-[#0d0d0d] to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4d00]/20 blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-28 h-28 mx-auto mb-10">
              <AnimatedTarget />
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-white">
              {t("cta.title1")}{" "}
              <span className="bg-gradient-to-r from-[#ff4d00] to-[#ff8533] bg-clip-text text-transparent">
                {t("cta.title2")}
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={`/${locale}/rezerwacja`}
                className="inline-flex items-center gap-4 px-16 py-7 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_60px_rgba(255,77,0,0.4)] hover:shadow-[0_0_80px_rgba(255,77,0,0.6)]"
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
