import { motion } from "framer-motion";
import { useState } from "react";

const Section = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <section
            className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-6xl mx-auto relative ${className}`}
        >
            {children}
        </section>
    );
};

// Enhanced animated image component with better transitions
const FadeInImage = ({
    src,
    alt,
    className = "",
    direction = "left",
}: {
    src: string;
    alt: string;
    className?: string;
    direction?: "left" | "right";
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: direction === "left" ? -100 : 100,
                scale: 0.9
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                scale: 1
            }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={`overflow-hidden rounded-2xl shadow-2xl shadow-chai-gold/30 ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chai-bg/60 via-transparent to-transparent" />
        </motion.div>
    );
};

export function Overlay() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            console.log("Email submitted:", email);
        }
    };

    return (
        <div className="w-full text-chai-warm">
            {/* Background texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "url('/royal_texture.png')",
                    backgroundSize: "300px",
                    backgroundRepeat: "repeat",
                }}
            />

            {/* 1. Opening Scene */}
            <Section className="items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.7 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-chai-gold text-xs md:text-sm tracking-[0.5em] font-sans uppercase mb-8 block"
                    >
                        Est. 2026
                    </motion.span>

                    <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-serif text-chai-warm leading-[0.8] tracking-tight mb-10">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="block"
                        >
                            Chai
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="block text-chai-gold"
                        >
                            Culture
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-chai-gold text-xl md:text-2xl font-serif mb-12 tracking-wide"
                    >
                        Brew the Royal Tradition
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-chai-accent font-serif italic text-xl"
                    >
                        ↓ Scroll to discover the ritual
                    </motion.p>
                </motion.div>
            </Section>

            {/* 2. Story - The Pause */}
            <Section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text - slides in from LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="order-2 md:order-1"
                    >
                        <div className="h-1 w-20 bg-chai-gold mb-8" />
                        <h2 className="text-4xl md:text-6xl font-serif text-chai-gold mb-6 leading-tight">
                            The Pause.
                            <br />
                            <span className="text-chai-warm">Not The Rush.</span>
                        </h2>
                        <p className="text-lg md:text-2xl leading-relaxed text-chai-warm/70 font-light">
                            In the royal courtyards of Jaipur, chai was never "grabbed". It
                            was crafted with intention. Slow-brewed spices, heavy brass
                            vessels, and conversations that lasted hours.
                        </p>
                    </motion.div>

                    {/* Image - slides in from RIGHT */}
                    <FadeInImage
                        src="/chai_steam.png"
                        alt="Steaming chai in royal setting"
                        className="order-1 md:order-2 h-[400px] md:h-[550px] lg:h-[600px] relative"
                        direction="right"
                    />
                </div>
            </Section>

            {/* 3. Story - Heritage */}
            <Section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image - slides in from LEFT */}
                    <FadeInImage
                        src="/royal_spices.png"
                        alt="Royal spices on brass plate"
                        className="h-[400px] md:h-[550px] lg:h-[600px] relative"
                        direction="left"
                    />

                    {/* Text - slides in from RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="h-1 w-20 bg-chai-gold mb-8 ml-auto md:ml-0" />
                        <h2 className="text-4xl md:text-6xl font-serif text-chai-gold mb-6 leading-tight text-right md:text-left">
                            Heritage in
                            <br />
                            <span className="text-chai-warm">Every Sip.</span>
                        </h2>
                        <p className="text-lg md:text-2xl leading-relaxed text-chai-warm/70 font-light text-right md:text-left">
                            We are bringing back the dignity of the ritual. Real ginger,
                            crushed cardamom, and saffron threads you can see. Nothing hidden.
                            Nothing rushed.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* 4. The Invitation */}
            <Section className="items-center text-center py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg relative z-10"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                        className="w-20 h-px bg-chai-gold mx-auto mb-12"
                    />

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-chai-warm mb-6 leading-tight">
                        We'll pour the first cup
                        <br />
                        <span className="text-chai-gold">for a few.</span>
                    </h2>

                    <p className="text-chai-warm/50 text-lg mb-12">
                        Join the inner circle. Be the first to experience the revival.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                required
                                className="w-full bg-chai-dark/60 border-2 border-chai-gold/40 text-chai-warm text-lg px-6 py-5 focus:outline-none focus:border-chai-gold transition-all duration-300 placeholder:text-chai-warm/30 font-serif text-center rounded-lg"
                            />

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full text-chai-bg bg-chai-gold hover:bg-chai-gold-light px-12 py-5 font-sans uppercase tracking-[0.2em] text-sm font-bold rounded-lg transition-all duration-300"
                            >
                                Reserve Access
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-10 border-2 border-chai-gold/50 rounded-xl bg-chai-dark/50"
                        >
                            <p className="text-chai-gold text-2xl font-serif mb-2">✓</p>
                            <p className="text-chai-gold text-xl font-serif">
                                You're on the list.
                            </p>
                            <p className="text-chai-warm/50 text-sm mt-3">
                                We'll be in touch when the first brew is ready.
                            </p>
                        </motion.div>
                    )}

                    <p className="mt-14 text-chai-accent/50 text-sm tracking-[0.3em] uppercase">
                        Not launched. Being brewed.
                    </p>

                    <div className="mt-20 pt-8 border-t border-chai-warm/10">
                        <div className="flex justify-center gap-3 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-chai-gold/60" />
                            <span className="w-1.5 h-1.5 rounded-full bg-chai-gold/60" />
                            <span className="w-1.5 h-1.5 rounded-full bg-chai-gold/60" />
                        </div>
                        <p className="text-xs tracking-[0.3em] opacity-30 uppercase">
                            Chai Culture © 2026
                        </p>
                    </div>
                </motion.div>
            </Section>
        </div>
    );
}
