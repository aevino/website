import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevino | Contact Us",
  description: "This is Contact Page for Aevino",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="At Aevino, every great project starts with a conversation. Whether you're a startup with a bold idea or an established business ready to innovate, we're here to listen, understand, and deliver."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
