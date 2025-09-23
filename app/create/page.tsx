import CallToActon from "@/components/call-to-action";
import CreateForm from "@/components/create/form";
import CreateHero from "@/components/create/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function CreatePage() {
  return (
    <>
      <Header />
      <CreateHero />
      <CreateForm />
      <CallToActon />
      <Footer />
    </>
  );
}
