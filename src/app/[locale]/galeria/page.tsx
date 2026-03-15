"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Play, Image as ImageIcon, Camera, Film, Grid, Crosshair, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedTarget, TacticalHUD, GunSilhouette } from "@/components/Visualizations";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";
import Link from "next/link";

const galleryItems = [
  { id: 1, type: "image", itemKey: "range1", category: "range" },
  { id: 2, type: "video", itemKey: "training1", category: "training" },
  { id: 3, type: "image", itemKey: "event1", category: "events" },
  { id: 4, type: "image", itemKey: "weapons1", category: "weapons" },
  { id: 5, type: "video", itemKey: "bachelor", category: "events" },
  { id: 6, type: "image", itemKey: "precision", category: "training" },
  { id: 7, type: "image", itemKey: "equipment", category: "weapons" },
  { id: 8, type: "image", itemKey: "competition", category: "events" },
  { id: 9, type: "video", itemKey: "advanced", category: "training" },
  { id: 10, type: "image", itemKey: "pistols", category: "weapons" },
  { id: 11, type: "image", itemKey: "indoor", category: "range" },
  { id: 12, type: "video", itemKey: "teambuilding", category: "events" },
];

const categoryIcons = {
  all: Grid,
  range: Crosshair,
  training: Camera,
  events: Film,
  weapons: ImageIcon,
};

export default function GaleriaPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("galeriaPage");
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [mediaType, setMediaType] = useState<"all" | "image" | "video">("all");

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = filter === "all" || item.category === filter;
    const typeMatch = mediaType === "all" || item.type === mediaType;
    return categoryMatch && typeMatch;
  });

  const selectedIndex = selectedItem ? filteredItems.findIndex(i => i.id === selectedItem) : -1;
  const canGoPrev = selectedIndex > 0;
  const canGoNext = selectedIndex < filteredItems.length - 1;

  const goToPrev = () => { if (canGoPrev) setSelectedItem(filteredItems[selectedIndex - 1].id); };
  const goToNext = () => { if (canGoNext) setSelectedItem(filteredItems[selectedIndex + 1].id); };

  const categories = ["all", "range", "training", "events", "weapons"] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] via-[#0d0d0d] to-[#0a0a0a]" />
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `linear-gradient(rgba(255,77,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10">
          <AnimatedTarget />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#ff4d00]/20 border border-[#ff4d00]/50 backdrop-blur-sm mb-8 shadow-[0_0_30px_rgba(255,77,0,0.3)]"
          >
            <Camera className="w-5 h-5 text-[#ff4d00]" />
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            >
              <span className="text-white">{t("hero.title1")}</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
            >
              <span className="bg-gradient-to-r from-[#ff4d00] via-[#ff6b2c] to-[#ff4d00] bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            {t("hero.description")}
          </motion.p>
        </div>

        {/* HUD elements */}
        <div className="absolute top-24 left-6 text-[10px] text-[#ff4d00]/60 font-mono space-y-1 hidden md:block">
          <div>MODE: GALLERY</div>
          <div>ITEMS: {galleryItems.length}</div>
        </div>
        <div className="absolute top-24 right-6 text-[10px] text-[#ff4d00]/60 font-mono text-right space-y-1 hidden md:block">
          <div>VIEW: GRID</div>
          <div>FILTER: {filter.toUpperCase()}</div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[#0a0a0a] border-b border-[#222222] sticky top-16 z-40 backdrop-blur-sm bg-[#0a0a0a]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(cat)}
                    className={`flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                      filter === cat
                        ? "bg-[#ff4d00] text-white shadow-[0_0_20px_rgba(255,77,0,0.4)]"
                        : "bg-[#151515] text-gray-400 hover:text-white border border-[#222222] hover:border-[#ff4d00]/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {t(`filters.${cat}`)}
                  </motion.button>
                );
              })}
            </div>

            {/* Media Type Toggle */}
            <div className="flex gap-2">
              {(["all", "photos", "videos"] as const).map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMediaType(type === "photos" ? "image" : type === "videos" ? "video" : "all")}
                  className={`px-5 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                    (type === "all" && mediaType === "all") ||
                    (type === "photos" && mediaType === "image") ||
                    (type === "videos" && mediaType === "video")
                      ? "bg-[#ff4d00] text-white"
                      : "bg-[#151515] text-gray-400 hover:text-white border border-[#222222]"
                  }`}
                >
                  {t(`mediaType.${type}`)}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedItem(item.id)}
                  className="group relative aspect-video bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-[#222222] hover:border-[#ff4d00] transition-all cursor-pointer overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-[#ff4d00]/0 group-hover:bg-[#ff4d00]/5 transition-colors" />
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff4d00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GunSilhouette className="w-40 h-24 opacity-20 group-hover:opacity-30 transition-opacity" />
                  </div>

                  {/* Type indicator */}
                  {item.type === "video" && (
                    <motion.div 
                      className="absolute top-4 right-4 w-12 h-12 bg-[#ff4d00] flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-6 h-6 text-white" />
                    </motion.div>
                  )}

                  {/* Info overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-[#ff4d00] text-xs font-bold uppercase tracking-wider mb-2">
                        {t(`filters.${item.category}`)}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-1">
                        {t(`items.${item.itemKey}.title`)}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {t(`items.${item.itemKey}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#ff4d00]/0 group-hover:border-[#ff4d00] transition-colors" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#ff4d00]/0 group-hover:border-[#ff4d00] transition-colors" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 opacity-30">
                <AnimatedTarget />
              </div>
              <p className="text-gray-500 text-lg">Brak wyników dla wybranych filtrów</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 w-14 h-14 bg-[#ff4d00] flex items-center justify-center hover:bg-[#ff6b2c] transition-colors z-10"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Navigation */}
            {canGoPrev && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#151515] border border-[#ff4d00] flex items-center justify-center hover:bg-[#ff4d00] transition-colors"
              >
                <ChevronLeft className="w-7 h-7 text-white" />
              </motion.button>
            )}

            {canGoNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#151515] border border-[#ff4d00] flex items-center justify-center hover:bg-[#ff4d00] transition-colors"
              >
                <ChevronRight className="w-7 h-7 text-white" />
              </motion.button>
            )}

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-[#0a0a0a] border border-[#ff4d00]"
            >
              <TacticalHUD label="MEDIA VIEWER">
                <div className="aspect-video bg-[#151515] flex items-center justify-center">
                  <AnimatedTarget className="w-48 h-48 opacity-30" />
                </div>
              </TacticalHUD>
              <div className="p-8">
                {(() => {
                  const item = galleryItems.find(i => i.id === selectedItem);
                  if (!item) return null;
                  return (
                    <>
                      <div className="text-[#ff4d00] text-xs font-bold uppercase tracking-wider mb-2">
                        {t(`filters.${item.category}`)}
                      </div>
                      <h3 className="text-3xl font-black text-white mb-3">
                        {t(`items.${item.itemKey}.title`)}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {t(`items.${item.itemKey}.desc`)}
                      </p>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.a
            href="https://instagram.com/gavronowich"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="block p-10 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] group"
          >
            <Instagram className="w-16 h-16 text-white mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
              {t("instagram")}
            </h3>
            <p className="text-white/80 text-xl">@gavronowich</p>
          </motion.a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#0d0d0d] to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff4d00]/20 blur-[100px]"
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
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
              {t("cta.title")}
            </h2>
            <p className="text-gray-400 text-xl mb-12">
              {t("cta.description")}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/${locale}/rezerwacja`}
                className="inline-flex items-center gap-4 px-14 py-6 bg-[#ff4d00] hover:bg-[#ff6b2c] text-white text-xl font-black uppercase tracking-wider transition-all shadow-[0_0_60px_rgba(255,77,0,0.4)]"
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
