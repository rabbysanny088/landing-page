import { motion } from "framer-motion";
import { BarChart3, Bell, Code, Shield, Users, Zap } from "lucide-react";

function Section2() {
  const features = [
    {
      icon: Bell,
      title: "Instant Notifications",
      description:
        "Get alerted immediately when your SSL certificate becomes invalid or website issues are detected.",
    },
    {
      icon: Code,
      title: "Full Featured API",
      description:
        "Add websites, get statistics, and receive webhooks for seamless integration.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Checks",
      description:
        "Rapid SSL and website health checks every 10 seconds for unparalleled reliability.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Collaborate with your team to manage SSL certificates and website monitoring efficiently.",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Protect your websites with our cutting-edge security features and constant vigilance.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics and reporting tools.",
    },
  ];

  return (
    <section>
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate Your Web Presence with CertPing
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our powerful features ensure your websites stay secure,
            reliable, and high-performing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border transition-colors duration-300 hover:bg-accent-color will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { delay: index * 0.3, duration: 0.6 },
                y: { delay: index * 0.3, duration: 0.6 },
                ease: "easeOut",
              }}
            >
              <div className="bg-icon-color w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section2;
