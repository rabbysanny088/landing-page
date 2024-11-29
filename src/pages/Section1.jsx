import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

function Section1() {
  return (
    <section className="mt-10">
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 ">
        {/* Navigation */}

        <Navbar />
        {/* Hero Section */}
        <main className="px-6 py-16  text-center bg-[#F8F1FE]">
          <div className=" max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-primary">
                {" "}
                Elevate Your Online Presence
              </span>
              <span className="block">with</span>
              <span className="block bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                Comprehensive Monitoring
              </span>
            </h1>

            <p className="text-[#4c4f7c] max-w-3xl mx-auto mb-10 text-lg">
              We offer complete SSL/TLS and website monitoring services to
              ensure your website is always secure, reliable, and performing at
              its best and stay ahead by keeping your website safe and running
              smoothly, giving you peace of mind.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-[#2E2E31] text-primary-foreground hover:bg-primary/90 pt-[10px] pb-[10px] rounded-full px-6 hover:bg-[#161619] w-full md:w-[15%]">
                Start for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <motion.button
                className="bg-white px-4 pt-[10px] pb-[10px] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-[#f4f4f5] rounded-full w-full md:w-[15%]"
                whileHover="hover"
              >
                Book a Demo
                <motion.span
                  className="ml-2"
                  variants={{
                    hover: { x: 5 },
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.button>
            </div>
            <div className="relative mt-10 bg-white/40 backdrop-blur-sm border-[10px] border-[#16161a/40] rounded-2xl overflow-hidden shadow-2xl shadow-shadow">
              <img
                className="w-full h-auto"
                loading="lazy"
                src="/image.png"
                alt="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30  via-transparent to-transparent"></div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Section1;
