import React from "react";
import { Card, CardContent } from "../ui/card";
import { FeaturesCard } from "@/constants/data";


export default function Features() {
  return (
    <section>
      <main className="items-center px-4 py-8 space-y-8 md:px-20 md:py-12 bg-muted/30">
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          Why Choose Our Platform
        </h2>

        <div className="flex flex-col gap-8 md:flex-row  text-center ">
          {FeaturesCard.map((WhyUs, index) => {
            const Icon = WhyUs.icon;
            return (
             

           
              <Card className="w-full  " key={index}>
                <CardContent className="  ">
                  <div className="relative  w-full  space-y-4 py-2 ">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 ">
                      <Icon className="h-8 w-8 " />
                    </div>

                    <h6 className="font-bold">{WhyUs.title}</h6>
                    <p className="text-center text-gray-600  ">
                      {WhyUs.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
            );
          })}
        </div>
      </main>
    </section>
  );
}
