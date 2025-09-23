import CallToActon from "@/components/call-to-action";
import ContactDetails from "@/components/contact/details";
import ContactForm from "@/components/contact/form";
import ContactHero from "@/components/contact/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-black/20 p-8 sm:p-12 rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </div>
      <CallToActon />
      <Footer />
    </>
  );
}
