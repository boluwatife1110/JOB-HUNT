"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/jobs?search=${searchQuery}`);
  };

  return (
    <section className="bg-amber-100 text-center ">
      <main className="flex flex-col items-center py-8 md:py-20 text-black">
 
       <div className="flex flex-col items-center ">
<div>

        <h1 className="font-bold text-4xl  md:text-5xl lg:text-7xl ">
          Find Your Next Job Easily
        </h1>
</div>

       <div>

        <p className="text-gray-800 opacity-80 text-center md:text-xl lg:text-2xl max-w-2xl mt-4">
          Discover thousands of job opportunities from top companies. Your dream career is just a search away.
        </p>
       </div>
       </div>

      
       <div className="flex flex-row items-center gap-3 mt-8 px-12 sm:px-0 w-full max-w-xl">
  
  <div className="relative flex-1">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />

    <input
      type="text"
      placeholder="Search jobs..."
      className="pl-10 w-full bg-amber-50 rounded-md font-semibold py-3 border border-gray-200 focus:outline-none"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch();
      }}
    />
  </div>

  <button
    onClick={handleSearch}
    className="border text-sm sm:text-lg font-semibold py-3 px-4 sm:px-6 rounded-2xl cursor-pointer bg-black text-white whitespace-nowrap"
  >
    Browse Jobs
  </button>

</div>

      </main>
    </section>
  );
}