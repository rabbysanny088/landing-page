import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          ease: "easeOut",
        }}
        className="max-w-7xl  relative  py-20 rounded-2xl border bg-[#F9F4FE] mx-auto"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Is Your Website{" "}
            <span className="text-primary">Secure and Performant?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Check your website's status and SSL certificate in seconds.
          </p>
        </div>
        <div
          className="rounded-lg  transition-colors duration-300 shadow-lg mx-auto w-[70%]     bg-[#FDFBFF]
hover:border-muted-foreground border"
        >
          <form className="p-6 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="https://example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-grow"
            />

            <button className="inline-flex bg-black text-white items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
              Check Now
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Section6;
