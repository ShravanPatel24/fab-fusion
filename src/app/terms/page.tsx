import Head from "next/head";
import Header from "../components/Header";

export default function TermsPage() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Terms and Conditions</title>
        </Head>

        <div className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 mb-4">
              Please read these Terms and Conditions carefully before using our
              website.
            </p>
            <p className="text-gray-600 mb-4">
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms.
            </p>
            <p className="text-gray-600 mb-4">
              These Terms apply to all visitors, users, and others who access or
              use the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. Use of the Service
            </h2>
            <p className="text-gray-600 mb-4">
              You must not use the Service in any way that causes, or may cause,
              damage to the Service or impairment of the availability or
              accessibility of the Service; or in any way which is unlawful,
              illegal, fraudulent, or harmful, or in connection with any
              unlawful, illegal, fraudulent, or harmful purpose or activity.
            </p>

            {/* Add more sections and content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
