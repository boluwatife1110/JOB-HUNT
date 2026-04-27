"use client";

import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { jobs } from "@/constants/data";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Building2,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobDetails({ id }) {
  const router = useRouter();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p className="p-4">Job not found</p>;

  return (
    <main className="bg-muted/30 px-4  md:px-20 py-8">

      <div className=" space-y-8">

      
        <button
          onClick={() => router.push("/jobs")}
          className="flex items-center gap-2 rounded-md hover:bg-gray-200 transition px-4 py-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </button>

  
        <Card className="p-4  space-y-2">

          <h2 className="font-bold text-lg md:text-3xl">{job.title}</h2>

          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="h-5 w-5" />
            <p className="font-semibold">{job.company}</p>
          </div>

          <hr />

          <div className="flex gap-8 flex-wrap text-gray-600">

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <p>{job.location}</p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <p>{job.duration}</p>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <p>{job.salary}</p>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <p>{job.postedDate}</p>
            </div>

          </div>

        </Card>

       
        <Card className="p-6">
          <h2 className="font-bold text-lg mb-2">About the Role</h2>
          <p className="text-gray-600 leading-relaxed">
            {job.description}
          </p>
        </Card>

        
        {[
          { title: "Responsibilities", data: job.responsibilities },
          { title: "Requirements", data: job.requirements },
          { title: "Benefits", data: job.benefits },
        ].map((section, i) => (
          <Card key={i} className="p-6">
            <h2 className="font-bold text-lg mb-3">{section.title}</h2>

            <ul className="space-y-3">
              {section.data.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-black mt-1">•</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}

        
        <div className="sticky bottom-4 bg-white/95 backdrop-blur border rounded-lg p-4 shadow-lg">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>

            <Button type="submit" className="px-6 sm:px-8 w-full sm:w-auto">
              Apply Now
            </Button>

          </div>

        </div>

      </div>
    </main>
  );
}