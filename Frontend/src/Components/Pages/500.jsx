import { Link } from "react-router-dom";

export default function ServerError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Server Error
      </h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Pls Try again ,<hr/> if the Error persisits , please mail me at hsamiuddin405@gmail.com 
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
