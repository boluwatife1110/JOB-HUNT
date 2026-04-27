import JobDetails from "@/components/jobs_details/details";

export default function Page({ params }) {
  return <JobDetails id={params.id} />;
}