import Head from "next/head";
import Header from "../components/Header";

export default function PrivacyPage() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Privacy Policy</title>
        </Head>

        <div className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit our website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us when you
              use our website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide and maintain our
              website, to improve and personalize your experience, to analyze
              and monitor usage, and for other purposes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your information with third parties for various
              purposes, including analytics and advertising.
            </p>

            {/* Add more sections and content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
