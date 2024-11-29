import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import CountUp from "react-countup";

function Section5() {
  return (
    <section>
      <div className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              Sites Scanned
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-accent-color transition-colors duration-330 border">
              <p className="tracking-tight text-sm font-medium text-[#949494] mb-1">
                Sites Scanned
              </p>
              <div className="text-2xl font-bold text-primary flex justify-start items-center gap-2">
                <CountUp end={10} duration={3} suffix="K" />
                <span className="lucide lucide-arrow-up text-green-500">
                  <ArrowUp />
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-accent-color transition-colors duration-330 border">
              <p className="tracking-tight text-sm font-medium text-[#949494] mb-1">
                Unsecure Websites
              </p>
              <div className="text-2xl font-bold text-primary flex justify-start items-center gap-2">
                <CountUp end={2.5} duration={3} suffix="K" decimals={1} />
                <span className="lucide lucide-arrow-up text-green-500">
                  <ArrowUp />
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-accent-color transition-colors duration-330 border">
              <p className="tracking-tight text-sm font-medium text-[#949494] mb-1">
                Total Checks Performed
              </p>
              <div className="text-2xl font-bold text-primary flex justify-start items-center gap-2">
                <CountUp end={50} duration={3} suffix="K" />
                <span className="lucide lucide-arrow-up text-green-500">
                  <ArrowUp />
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:bg-accent-color transition-colors duration-330 border">
              <p className="tracking-tight text-sm font-medium text-[#949494] mb-1">
                Incidents
              </p>
              <div className="text-2xl font-bold text-primary flex justify-start items-center gap-2">
                <CountUp end={100} duration={3} suffix="K" />
                <span className="lucide lucide-arrow-up text-green-500">
                  <ArrowUp />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
