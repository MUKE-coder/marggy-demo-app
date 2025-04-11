import { Loader } from "lucide-react";

export default function LoadingProducts() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        disabled
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <Loader className="animate-spin w-4 h-4 mr-2" />
        Loading...
      </button>
    </div>
  );
}
