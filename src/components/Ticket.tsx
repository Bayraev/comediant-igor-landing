
interface TicketProps {
  date: string;
  time: string;
  city: string;
  venue: string;
  type: "ТУР" | "СОЛЬНЫЙ";
}

const Ticket = ({ date, time, city, venue, type }: TicketProps) => {
  return (
    <div className="glass-card p-6 rounded-lg hover-scale group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-400">{type}</p>
          <h3 className="text-xl font-semibold mt-1">{date}</h3>
          <p className="text-gray-400">{time}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-medium">{city}</p>
          <p className="text-gray-400">{venue}</p>
        </div>
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded transition-colors hover:bg-primary/90">
        Купить билет
      </button>
    </div>
  );
};

export default Ticket;
