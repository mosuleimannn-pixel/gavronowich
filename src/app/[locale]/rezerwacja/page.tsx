"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Clock, Target, ChevronRight, Check, ChevronLeft, Crosshair } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";
import { AnimatedTarget, TacticalHUD, GunSilhouette } from "@/components/Visualizations";

const serviceKeys = ["basic", "advanced", "corporate", "bachelor"] as const;
const serviceIcons = { basic: Target, advanced: Target, corporate: Users, bachelor: Users };
const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export default function RezerwacjaPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations("rezerwacjaPage");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    participants: "1",
    name: "",
    email: "",
    phone: "",
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
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff4d00]/10 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-24 h-24 mx-auto mb-8 bg-[#ff4d00] flex items-center justify-center"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            {t("success.title")}
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            {t("success.description")}
          </p>
          
          <TacticalHUD label="RESERVATION DETAILS">
            <div className="p-8 space-y-4 text-left">
              <div className="flex justify-between items-center py-3 border-b border-[#ff4d00]/20">
                <span className="text-gray-400 uppercase tracking-wider text-sm">{t("success.service")}</span>
                <span className="font-bold text-white text-lg">
                  {formData.service && t(`services.${formData.service}.name`)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#ff4d00]/20">
                <span className="text-gray-400 uppercase tracking-wider text-sm">{t("success.date")}</span>
                <span className="font-bold text-white text-lg">{formData.date}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#ff4d00]/20">
                <span className="text-gray-400 uppercase tracking-wider text-sm">{t("success.time")}</span>
                <span className="font-bold text-white text-lg">{formData.time}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400 uppercase tracking-wider text-sm">{t("success.participants")}</span>
                <span className="font-bold text-white text-lg">{formData.participants}</span>
              </div>
            </div>
          </TacticalHUD>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black pt-20">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff4d00]/10 blur-[100px]" />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-20 left-4 w-24 h-24 border-l-2 border-t-2 border-[#ff4d00]/40" />
        <div className="absolute top-20 right-4 w-24 h-24 border-r-2 border-t-2 border-[#ff4d00]/40" />

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
            <Crosshair className="w-5 h-5 text-[#ff4d00]" />
            <span className="text-[#ff4d00] text-sm font-bold uppercase tracking-[0.3em]">
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
            >
              <span className="text-white">{t("hero.title1")}</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
            >
              <span className="bg-gradient-to-r from-[#ff4d00] via-[#ff6b2c] to-[#ff4d00] bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
          >
            {t("hero.description")}
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-[#0a0a0a] border-b border-[#222222]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <motion.div
                  animate={{ scale: step === s ? 1.1 : 1 }}
                  className={`w-14 h-14 flex items-center justify-center font-black text-lg transition-all ${
                    step >= s
                      ? "bg-[#ff4d00] text-white shadow-[0_0_20px_rgba(255,77,0,0.4)]"
                      : "bg-[#1a1a1a] text-gray-500 border border-[#262626]"
                  }`}
                >
                  {step > s ? <Check className="w-6 h-6" /> : s}
                </motion.div>
                <span className={`ml-4 hidden sm:block font-bold uppercase tracking-wider ${step >= s ? "text-white" : "text-gray-500"}`}>
                  {s === 1 && t("steps.service")}
                  {s === 2 && t("steps.datetime")}
                  {s === 3 && t("steps.details")}
                </span>
                {s < 3 && (
                  <div className={`w-20 h-1 mx-6 transition-colors ${step > s ? "bg-[#ff4d00]" : "bg-[#262626]"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-center">
                  {t("form.selectService")}
                </h2>
                <div className="space-y-4">
                  {serviceKeys.map((key, index) => {
                    const Icon = serviceIcons[key];
                    return (
                      <motion.button
                        key={key}
                        type="button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        onClick={() => {
                          setFormData({ ...formData, service: key });
                          nextStep();
                        }}
                        className={`w-full p-6 text-left border transition-all flex items-center justify-between group ${
                          formData.service === key
                            ? "bg-[#ff4d00]/10 border-[#ff4d00]"
                            : "bg-gradient-to-r from-[#151515] to-[#0a0a0a] border-[#262626] hover:border-[#ff4d00]/50"
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 bg-[#ff4d00]/10 border border-[#ff4d00]/30 flex items-center justify-center group-hover:bg-[#ff4d00]/20 transition-colors">
                            <Icon className="w-8 h-8 text-[#ff4d00]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-xl mb-1">{t(`services.${key}.name`)}</h3>
                            <p className="text-[#ff4d00] font-semibold">{t(`services.${key}.price`)}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-[#ff4d00] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <TacticalHUD label="SELECT DATE & TIME">
                  <div className="p-8 space-y-8">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-4">
                        {t("form.date")} *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-4">
                        {t("form.time")} *
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {times.map((time) => (
                          <motion.button
                            key={time}
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFormData({ ...formData, time })}
                            className={`py-4 text-center font-bold text-lg transition-all ${
                              formData.time === time
                                ? "bg-[#ff4d00] text-white shadow-[0_0_20px_rgba(255,77,0,0.4)]"
                                : "bg-black/50 border border-[#ff4d00]/30 text-gray-400 hover:border-[#ff4d00] hover:text-white"
                            }`}
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-4">
                        {t("form.participants")} *
                      </label>
                      <select
                        value={formData.participants}
                        onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors text-lg"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                        <option value="10+">10+</option>
                      </select>
                    </div>
                  </div>
                </TacticalHUD>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="px-8 py-4 border-2 border-[#ff4d00]/50 text-white font-bold uppercase tracking-wider hover:border-[#ff4d00] transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t("form.back")}
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={nextStep}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 py-4 bg-[#ff4d00] hover:bg-[#ff6b2c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                  >
                    {t("form.next")}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <TacticalHUD label="CONTACT DETAILS">
                  <div className="p-8 space-y-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                        {t("form.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors"
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                          {t("form.phone")} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wider text-[#ff4d00] mb-3">
                        {t("form.message")}
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 bg-black/50 border border-[#ff4d00]/30 text-white focus:border-[#ff4d00] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                </TacticalHUD>

                <div className="flex gap-4 mt-8">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={prevStep}
                    className="px-8 py-4 border-2 border-[#ff4d00]/50 text-white font-bold uppercase tracking-wider hover:border-[#ff4d00] transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    {t("form.back")}
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-[#ff4d00] hover:bg-[#ff6b2c] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
                    <Check className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
