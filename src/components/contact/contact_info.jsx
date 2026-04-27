import { Contact_Card } from "@/constants/data";
import { Card, CardContent } from "../ui/card";

export default function Contact_Info() {
  return (
    <section className="bg-muted/30">

      <main className="max-w-5xl mx-auto px-4 md:px-10 lg:px-20 py-12 space-y-10">

        
        <div className="max-w-3xl mx-auto text-center px-6 py-8 bg-amber-100 border rounded-2xl space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in Touch
          </h1>
          <p className="text-gray-500">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

      
        <form className="space-y-6">

          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              rows="5"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-100 text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>

        </form>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">

          {Contact_Card.map((mail, index) => {
            const Icon = mail.icon;

            return (
              <Card key={index} className="w-full">
                <CardContent className="p-6 flex flex-col items-center space-y-3">

                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h6 className="font-bold">{mail.title}</h6>

                  <p className="text-gray-600 text-sm">
                    {mail.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </main>
    </section>
  );
}