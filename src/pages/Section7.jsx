"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free Plan",
    subtitle: "Small businesses, developers",
    monthlyPrice: "Free",
    yearlyPrice: "Free",
    interval: "5-minute intervals",
    features: [
      "Monitor up to 3 websites",
      "Email notifications",
      "Basic uptime monitoring",
      "Public and Private Dashboards",
      "SSL expiry alerts",
    ],
    buttonText: "Start for Free",
  },
  {
    name: "Starter Plan",
    subtitle: "Freelancers, small teams",
    monthlyPrice: "120",
    yearlyPrice: "96",
    interval: "1-minute intervals",
    features: [
      "10 monitors",
      "API access for custom automation",
      "Alerts via email & Slack",
      "Multi-user access",
      "Public and Private Dashboards",
      "SSL expiry alerts",
    ],
    buttonText: "Start Monitoring Now",
  },
  {
    name: "Professional Plan",
    subtitle: "SMEs, fast-growing startups",
    monthlyPrice: "240",
    yearlyPrice: "192",
    interval: "1-minute intervals",
    isPopular: true,
    features: [
      "50 monitors",
      "App integrations for alerts",
      "Multi-user access",
      "Public and Private Dashboards",
      "Bulk imports your domain from domain providers",
      "SSL expiry alerts",
    ],
    buttonText: "Start Monitoring Now",
  },
  {
    name: "Advanced Plan",
    subtitle: "Agencies, enterprises with high demands",
    monthlyPrice: "600",
    yearlyPrice: "480",
    interval: "30-second intervals",
    features: [
      "150 monitors",
      "Anomaly detection",
      "Multi-user access",
      "Public and Private Dashboards",
      "SSL expiry alerts",
      "Bulk imports your domain from domain providers",
      "Priority support",
    ],
    buttonText: "Start Monitoring Now",
  },
];

function Section7() {
  const [isAnnual, setIsAnnual] = useState("monthly");

  return (
    <section>
      <div className="py-16 px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">Choose the plan that fits your needs.</p>

          <div className="mt-6 inline-flex items-center rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-4 py-1 transition-colors ${
                isAnnual ? "bg-black text-white" : "hover:bg-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-1 transition-colors ${
                !isAnnual ? "bg-black text-white" : "hover:bg-gray-200"
              }`}
            >
              Yearly
              <span
                className={`ml-2 text-xs ${
                  !isAnnual ? "bg-white text-black font-bold" : ""
                } rounded-full px-2 py-0.5 `}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.3,
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 bg-white border ${
                plan.isPopular ? "border-black" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              {plan.isPopular && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white hover:bg-primary/80 self-start mb-2">
                  Most Popular
                </span>
              )}

              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.monthlyPrice !== "Free" && (
                    <span className="text-2xl font-bold">$</span>
                  )}
                  <span className="text-4xl font-bold ">
                    {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  {plan.monthlyPrice !== "Free" && (
                    <span className="text-gray-600 ml-2 ">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {plan.interval}
                </p>
              </div>

              <ul className="space-y-2 mb-28">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-black mt-0.5" />
                    <span className=" text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-[90%] mx-auto py-3 px-4 rounded-full text-sm font-medium transition-colors  
                absolute left-0 right-0 bottom-12
                ${
                  plan.isPopular
                    ? "bg-black text-white hover:bg-black/90"
                    : "bg-white text-black border border-gray-200 hover:bg-accent-color"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center w-full border px-4 py-20 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We offer tailored plans for large organizations and high-traffic
            websites
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full bg-black text-white px-6">
            Connect Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section7;
