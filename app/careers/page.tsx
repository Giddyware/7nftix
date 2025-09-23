import CallToActon from "@/components/call-to-action";
import CareersHero from "@/components/careers/hero";
import JobListings from "@/components/careers/job-listings";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersHero />
      <JobListings />
      <CallToActon />
      <Footer />
    </>
  );
}
