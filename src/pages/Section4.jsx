import { motion } from "framer-motion";
import { Bell, Layers, Shield, Users } from "lucide-react";

const rightColumnVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

function Section4() {
  const features = [
    {
      icon: Layers,
      title: "Unified Dashboard",
      description:
        "Manage all your websites from a single, intuitive interface.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Invite team members and assign roles for efficient management.",
    },
    {
      icon: Bell,
      title: "Custom Alerts",
      description: "Set up personalized notifications for critical events.",
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description:
        "Keep track of SSL certificates and security vulnerabilities.",
    },
  ];

  return (
    <section>
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={leftColumnVariants}
              viewport={{ once: false, amount: 0.5 }} // Trigger when 50% is in the viewport
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Centralized Website Monitoring{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Manage all your websites' monitoring effortlessly from our
                intuitive web interface. Stay on top of your entire web
                infrastructure with just a few clicks.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg border text-card-foreground shadow-sm h-full group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 p-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 * index,
                    }}
                    viewport={{ once: false }} // Trigger when 50% is in the viewport
                  >
                    <div className="group flex items-center gap-3 p-2 transition-transform duration-300">
                      <div className="bg-[#D0D0D1] rounded-full p-3 transition-colors">
                        <feature.icon className="h-6 w-6 group-hover:text-black group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="">
                        <h3 className="text-lg font-semibold transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:text-black">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Explore the Dashboard
              </button>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={rightColumnVariants}
              viewport={{ once: false, amount: 0.5 }}
              className="space-y-4"
            >
              <div className="relative">
                <img
                  src="/image.png"
                  alt="Dashboard Interface"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <p className="text-center text-gray-600">
                Our intuitive dashboard provides both overview and detailed
                insights into your website's performance and security.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
