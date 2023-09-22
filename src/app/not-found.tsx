import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto text-center mt-48 mb-64">
      <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="inline-flex text-white p-4 mt-12 justify-center items-center space-x-4 rounded-4 bg-[#DB4444] ">
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
