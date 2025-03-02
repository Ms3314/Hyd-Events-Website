import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
