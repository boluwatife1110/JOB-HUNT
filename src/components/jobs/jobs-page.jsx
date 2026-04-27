"use client";

import { useState } from "react";
import { jobs } from "@/constants/data";
import { MapPin, Clock, Search } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JobsCard({ initialSearch = "" }) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [category, setCategory] = useState("all");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      category === "all" || job.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* HEADER */}
      <div className="bg-amber-100 py-2 border px-4 md:px-20">
        <div className="flex py-2 items-center gap-4">

          {/* CATEGORY */}
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="product">Product</SelectItem>
            </SelectContent>
          </Select>

          {/* SEARCH */}
          <div className="relative rounded-md border border-input">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 w-full bg-amber-50 rounded-md py-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-4 md:mx-20 pt-4">
        <h2 className="text-2xl font-semibold">Available Positions</h2>
        <p className="text-gray-500">Showing {filteredJobs.length} jobs</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="w-full px-6">

              <div>
                <h2 className="font-bold text-lg">{job.title}</h2>
                <p className="text-sm text-amber-700">{job.company}</p>
              </div>

              <p className="text-sm text-gray-500">{job.description}</p>

              <div className="flex gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <p>{job.location}</p>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <p>{job.duration}</p>
                </div>
              </div>

              <Link
                href={`/jobs/${job.id}`}
                className="block w-full text-center bg-black py-2 text-white rounded-lg font-semibold hover:opacity-90 mt-3"
              >
                View Details
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}