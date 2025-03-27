import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="w-[100v] h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">
        Oh no, you're lost. This site doesn't exist!
      </h1>
      <Link to="/" className="mt-4 text-lg  underline">
        You can go back to home page by clicking here!
      </Link>
    </div>
  );
}

export default ErrorPage;
