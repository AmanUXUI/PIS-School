import { motion } from 'motion/react';

export default function FooterBanner() {
  return (
    <section className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <picture>
          {/* Mobile version */}
          <source 
            media="(max-width: 768px)" 
            srcSet="https://i.postimg.cc/pTLJs8GT/Banner-Mobile.jpg" 
          />
          {/* Desktop version */}
          <img 
            src="https://i.postimg.cc/xddGZm3h/Banner-Desktop.webp" 
            alt="Pavna School Banner" 
            className="w-full h-auto block"
          />
        </picture>
      </motion.div>
    </section>
  );
}
