
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ArchiveModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ArchiveModal = ({ open, onOpenChange }: ArchiveModalProps) => {
  const archive = {
    2023: [
      { date: "15/03", city: "Москва", venue: "Театр на Таганке" },
      { date: "20/03", city: "Санкт-Петербург", venue: "ДК Ленсовета" },
    ],
    2022: [
      { date: "10/12", city: "Екатеринбург", venue: "Дом Печати" },
      { date: "15/12", city: "Новосибирск", venue: "Подземка" },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <h2 className="text-2xl font-bold mb-6">АРХИВ ВЫСТУПЛЕНИЙ</h2>
        {Object.entries(archive).map(([year, events]) => (
          <div key={year} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{year}</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-secondary rounded-lg"
                >
                  <div className="text-gray-400">{event.date}</div>
                  <div className="text-right">
                    <div className="font-medium">{event.city}</div>
                    <div className="text-gray-400">{event.venue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ArchiveModal;
