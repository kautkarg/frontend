import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
        <img
          src="/PageNotFound.png"
          alt="Astronaut Floating"
          className="w-64 md:w-80 lg:w-96"
        />
      </div>
      <div className="text-center md:text-left md:max-w-md">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">404-error</h1>
        <p className="text-xl md:text-2xl mt-4">PAGE NOT FOUND</p>
        <p className="text-gray-400 mt-2">
          Your search has ventured beyond the known universe.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 border border-blue-500 text-lg rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
