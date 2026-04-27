import React from "react";
import { Card, CardContent } from "../ui/card";
import { About_Values } from "@/constants/data";

export default function Values() {
  return (
    <section className="bg-muted/30">

      <main className="max-w-6xl mx-auto py-10 px-4 md:px-10 space-y-12">

       
        <div className="space-y-4 text-center">
          <h2 className="font-bold text-3xl md:text-5xl">
            Our Values & Team
          </h2>
          <p className="text-gray-600">
            Discover what drives us and meet the people behind our platform's success.
          </p>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {About_Values.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card key={index} className="h-full">
                <CardContent className="flex flex-col items-center text-center space-y-4 p-6">

                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h6 className="font-bold text-lg">{item.title}</h6>

                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">

          {[
            {
              title: "Innovation",
              desc: "Continuously improving and exploring new ways to make job hunting simpler and smarter."
            },
            {
              title: "Integrity",
              desc: "We build trust through transparency, honesty, and fairness."
            },
            {
              title: "Collaboration",
              desc: "Connecting job seekers and employers to achieve shared goals."
            },
            {
              title: "Excellence",
              desc: "Delivering outstanding quality in every interaction on JobHunt."
            },
          ].map((val, i) => (
            <div key={i} className="space-y-2">
              <h2 className="font-semibold text-xl">{val.title}</h2>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}

        </div>

      </main>
    </section>
  );
}