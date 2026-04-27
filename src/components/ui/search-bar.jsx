import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative w-fill">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-700" />

      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-fit pl-10 pr-3 md:pr-30 py-2 border-black border-1 rounded-2xl"
      />
    </div>
  );
}

export default SearchBar;