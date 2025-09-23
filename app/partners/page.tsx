import CallToActon from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PartnersHero from "@/components/partners/hero";
import PartnersList from "@/components/partners/list";

export default function PartnersPage() {
  return (
    <>
      <Header />
      <PartnersHero />
      <PartnersList />
      <CallToActon />
      <Footer />
    </>
  );
}
