"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

export default function ContactDetails() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-white">Contact Information</h2>
      <div className="space-y-6">
        <ContactInfo
          icon={<Mail className="w-6 h-6 text-gray-600" />}
          title="Email Us"
          value="support@7nftix.com"
        />
        <ContactInfo
          icon={<Phone className="w-6 h-6 text-gray-600" />}
          title="Call Us"
          value="+1 (555) 123-4567"
        />
        <ContactInfo
          icon={<MapPin className="w-6 h-6 text-gray-600" />}
          title="Visit Us"
          value="123 NFT Avenue, Metaverse City, 45678"
        />
      </div>
      <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-primary/20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617330523325!2d-73.98784368459395!3d40.74844097932785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e192a415a5!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633028793622!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
}
