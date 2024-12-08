import { motion } from "framer-motion";

export default function Section9() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 0.5 },
            ease: "easeOut",
          }}
          className="mx-auto max-w-7xl px-4 py-24"
        >
          <div className="rounded-xl bg-gray-800/50 p-12 text-center border border-gray-600 hover:border-muted-foreground transition duration-300">
            <h1 className="mb-6 font-bold leading-tight tracking-tight md:text-6x text-2xl  sm:text-4xl md:text-5xl ">
              Ready to Elevate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Website Reliability?
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm md:text-lg text-gray-300">
              Join thousands of websites that trust CertPing for comprehensive
              SSL and website monitoring. Start your journey to unparalleled
              uptime today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100">
                Start Your Free Trial
              </button>
              <button className="rounded-full  px-8 py-3 font-semibold text-black  transition bg-white duration-300 border border-transparent hover:border-white hover:bg-white/10 hover:text-white">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-gray-900 mt-10">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" className="h-8 w-8 " alt="image" />
                  <span className="text-xl font-bold">CertPing</span>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Certping ensures unparalleled uptime and security with
                  comprehensive SSL and website monitoring. Trust us to keep
                  your online presence reliable, secure, and always available.
                </p>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <div className="grid grid-cols-1 gap-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Check your Website
                  </a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                <div className="grid grid-cols-1 gap-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 CertPing. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
