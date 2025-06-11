import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aevino | Privacy Policy",
  description: "Privacy Policy for Aevino Solutions",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="privacy-policy prose max-w-none">
              <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                AEVINO SOLUTIONS PRIVACY POLICY
              </h1>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    1. INTRODUCTION
                  </h2>
                  <p className="text-body-color text-base leading-relaxed">
                    Aevino Solutions Pvt Ltd ("we," "our," or "us") respects
                    your privacy and is committed to protecting your personal
                    information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit
                    our website (aevino.com) or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    2. INFORMATION WE COLLECT
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        Personal Information
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Name, email address, phone number</li>
                        <li>Company name and job title</li>
                        <li>Billing and contact information</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        Technical Information
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>IP address, browser type, device information</li>
                        <li>Website usage data and analytics</li>
                        <li>Cookies and similar tracking technologies</li>
                        <li>Log files and server data</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-black dark:text-white">
                        Project Information
                      </h3>
                      <ul className="text-body-color list-disc space-y-1 pl-6">
                        <li>Requirements and specifications</li>
                        <li>Business needs and objectives</li>
                        <li>Technical documentation</li>
                        <li>Communication records</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    3. HOW WE USE YOUR INFORMATION
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    We use your information to:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Provide and improve our services</li>
                    <li>Communicate about projects and updates</li>
                    <li>Process payments and billing</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Send marketing communications (with consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and security threats</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    4. INFORMATION SHARING
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    We do not sell your personal information. We may share
                    information with:
                  </p>
                  <ul className="text-body-color list-disc space-y-2 pl-6">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors
                      who assist our operations
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or legal process
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In case of merger,
                      acquisition, or sale
                    </li>
                    <li>
                      <strong>Consent:</strong> When you explicitly authorize
                      sharing
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    5. DATA SECURITY
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    We implement appropriate security measures including:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Encryption of sensitive data</li>
                    <li>Secure server infrastructure</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    6. YOUR RIGHTS
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent</li>
                    <li>File complaints with supervisory authorities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    7. COOKIES AND TRACKING
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    We use cookies to:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Improve website functionality</li>
                    <li>Analyze website performance</li>
                    <li>Personalize your experience</li>
                    <li>Remember your preferences</li>
                  </ul>
                  <p className="text-body-color mt-3 text-base leading-relaxed">
                    You can control cookies through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    8. DATA RETENTION
                  </h2>
                  <p className="text-body-color mb-3 text-base leading-relaxed">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="text-body-color list-disc space-y-1 pl-6">
                    <li>Provide our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    9. INTERNATIONAL TRANSFERS
                  </h2>
                  <p className="text-body-color text-base leading-relaxed">
                    If we transfer your data internationally, we ensure
                    appropriate safeguards are in place to protect your
                    information.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    10. CHILDREN'S PRIVACY
                  </h2>
                  <p className="text-body-color text-base leading-relaxed">
                    Our services are not intended for individuals under 18. We
                    do not knowingly collect personal information from children.
                  </p>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
                    11. CHANGES TO THIS POLICY
                  </h2>
                  <p className="text-body-color text-base leading-relaxed">
                    We may update this Privacy Policy periodically. We will
                    notify you of significant changes through our website or
                    email.
                  </p>
                </section>

                <section className="mt-12 border-t pt-8">
                  <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      Contact Us
                    </h3>
                    <p className="text-body-color text-base">
                      If you have any questions about this Privacy Policy,
                      please contact us at{" "}
                      <a
                        href="mailto:privacy@aevino.com"
                        className="text-primary hover:underline"
                      >
                        privacy@aevino.com
                      </a>
                    </p>
                    <p className="text-body-color mt-2 text-sm">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
