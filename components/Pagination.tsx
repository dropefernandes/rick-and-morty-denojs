import { useState } from "preact/hooks";
import ChevronLeftIcon from "./ChevronLeftIcon.tsx";
import ChevronRightIcon from "./ChevronRightIcon.tsx";

type Props = {
  totalPages: number;
  count: number;
};

export default function Pagination({
  totalPages,
  count,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const previous = () => {};

  const next = () => {};

  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{currentPage}</span> to{" "}
          <span className="font-medium">{totalPages}</span> of{" "}
          <span className="font-medium">{count}</span> results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={() => previous}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon width="5" height="5" />
          </button>
          <button
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            onClick={() => next}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon width="5" height="5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
