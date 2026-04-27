import React from "react";

export default function About_Section() {
  return (
    <section className="bg-amber-100">
      
      <main className="  flex flex-col md:flex-row items-center gap-10 px-4 md:px-20 py-8">

    
        <div className="flex-1 space-y-4">
          <h2 className="font-bold text-2xl md:text-3xl">About Us</h2>

          <p>
            At JobHunt, we are redefining the way job seekers and employers
            connect in today's fast-paced digital world. Our mission is to
            empower individuals with access to opportunities while helping
            businesses discover the right talent with ease and confidence.
          </p>

          <p>
            Built on the values of innovation, transparency, and impact,
            JobHunt is more than just a job board. It is a bridge between
            ambition and opportunity. We strive to create a platform where
            finding a job is simple, clear, and rewarding, and where
            organizations can attract the talent they need to grow.
          </p>

          <p>
            Through continuous improvement and a commitment to excellence,
            JobHunt is shaping the future of recruitment. We believe in
            technology that does not just solve today’s hiring challenges but
            also anticipates tomorrow’s workforce needs.
          </p>

          <p className="max-w-xl">
            Join us as we build a smarter, more connected job-hunting experience,
            where every search brings you closer to your next big opportunity.
          </p>
        </div>

        
        <div className="flex-1">
          <img
            src="/aboutImage.png"
            alt="about us"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

      </main>
    </section>
  );
}