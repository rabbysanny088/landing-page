import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rightColumnVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const leftColumnVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const featureVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

function Section3() {
  const features = [
    "Real-time uptime monitoring",
    "SSL certificate expiration alerts",
    "Performance metrics tracking",
    "Custom alert thresholds",
    "Multi-location checking",
  ];

  return (
    <section>
      <div className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              variants={rightColumnVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Powerful Insights{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  at Your
                </span>{" "}
                Fingertips
              </h2>

              <p className="text-gray-600 text-lg">
                Our advanced monitoring system provides real-time insights and
                proactive alerts to keep your websites running smoothly.
                Visualize your website's performance with our intuitive
                dashboard.
              </p>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    variants={featureVariants}
                  >
                    <div className="bg-green-50 rounded-full p-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Explore Dashboard Features
              </button>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.1),0_2px_5px_-3px_rgba(0,0,0,0.06)]"
              initial="hidden"
              whileInView="visible"
              variants={leftColumnVariants} // Apply the same animation for right column
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-semibold">Performance Overview</h3>
                <p className="text-gray-600">
                  Monitor your website's uptime and response time
                </p>
              </div>

              {/* Placeholder for graph */}
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                  <div
                    className="w-full h-[70%] bg-gradient-to-t from-green-100/50 to-blue-100/50 rounded-t-full"
                    style={{
                      clipPath:
                        'path("M0,100 C150,80 350,120 500,90 L500,100 L0,100 Z")',
                    }}
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-sm text-gray-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
