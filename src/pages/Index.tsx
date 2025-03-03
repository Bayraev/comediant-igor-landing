
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticket from "@/components/Ticket";
import VideoSection from "@/components/VideoSection";
import SubscriptionForm from "@/components/SubscriptionForm";
import Footer from "@/components/Footer";

const Index = () => {
  const tickets = {
    2024: [
      {
        date: "15 Мая",
        time: "19:00",
        city: "Москва",
        venue: "Театр на Таганке",
        type: "СОЛЬНЫЙ" as const,
      },
      {
        date: "20 Мая",
        time: "20:00",
        city: "Санкт-Петербург",
        venue: "ДК Ленсовета",
        type: "ТУР" as const,
      },
    ],
    2025: [
      {
        date: "10 Января",
        time: "20:00",
        city: "Екатеринбург",
        venue: "Дом Печати",
        type: "ТУР" as const,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section id="tickets" className="py-16 px-4">
        <div className="container mx-auto">
          {Object.entries(tickets).map(([year, yearTickets]) => (
            <div key={year} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {yearTickets.map((ticket, index) => (
                  <Ticket key={index} {...ticket} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <VideoSection />
      <SubscriptionForm />
      <Footer />
    </div>
  );
};

export default Index;
