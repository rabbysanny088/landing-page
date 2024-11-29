import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    quote:
      "CertPing's proactive monitoring has helped us maintain 99.9% uptime. It's an essential tool for any serious web-based business.",
    author: {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "TechStartup",
      image: "https://i.pravatar.cc/150?u=emily",
    },
  },
  {
    quote:
      "CertPing has been a game-changer for our team. The real-time alerts and comprehensive monitoring have saved us countless hours and potential downtime.",
    author: {
      name: "Alex Johnson",
      role: "CTO",
      company: "TechCorp",
      initials: "AJ",
    },
  },
  {
    quote:
      "I can't imagine managing our websites without CertPing. The intuitive dashboard and detailed reports make my job so much easier.",
    author: {
      name: "Sarah Lee",
      role: "DevOps Lead",
      company: "StartupX",
      initials: "SL",
    },
  },
  {
    quote:
      "The peace of mind that comes with using CertPing is invaluable. Their support team is also top-notch, always ready to help when we need it.",
    author: {
      name: "Michael Chen",
      role: "IT Manager",
      company: "Global Retail",
      image: "https://i.pravatar.cc/150?u=michael",
    },
  },
];

const TestimonialCard = ({ testimonial }) => (
  <section>
    <div className="max-w-full relative p-1">
      <div className="bg-white p-6 rounded-lg text-card-foreground shadow-sm w-[400px] bg-card/50 backdrop-blur-sm border border-gray-200 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group overflow-hidden">
        <div className="absolute right-[40px] -top-[3rem] w-24 h-24 rounded-full bg-purple-100/50 group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
        <div className="absolute left-[40px] -bottom-[3rem] w-24 h-24 rounded-full bg-green-100/50 group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
        <div className="relative z-10 w-full overflow-hidden">
          {" "}
          {/* Higher z-index for the card content */}
          <div className="mb-4">
            <blockquote className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              "{testimonial.quote}"
            </blockquote>
          </div>
          <div className="flex items-center gap-3">
            {testimonial.author?.image ? (
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                {testimonial.author?.initials || testimonial.author?.name[0]}
              </div>
            )}

            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.author.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.author.role}, {testimonial.author.company}
                </p>
              </div>
              <Quote className="h-10 w-10 text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function Section8({ speed, headerText, paddTop }) {
  const baseX = useMotionValue(0);
  const baseVelocity = speed;
  const smoothVelocity = useSpring(baseVelocity, {
    damping: 40,
    stiffness: 600,
  });
  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((time, delta) => {
    let moveBy = smoothVelocity.get() * (delta / 1000);
    baseX.set(baseX.get() + moveBy);

    if (baseX.get() <= -100) {
      baseX.set(0);
    }
  });

  const handleHoverStart = () => smoothVelocity.set(0); // Pause scrolling on hover
  const handleHoverEnd = () => smoothVelocity.set(baseVelocity); // Resume scrolling

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4"
      style={{ paddingTop: paddTop }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">{headerText}</h2>
      <div className="relative w-full overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white to-transparent z-10" />

        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white to-transparent z-10" />

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-16 md:gap-4"
            style={{ x }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={index} // Use index to avoid key collision
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
