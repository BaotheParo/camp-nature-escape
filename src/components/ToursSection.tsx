import { useState, useEffect } from 'react';
import TourCard from './TourCard';
import { getTours, Tour } from '@/lib/tourData';
import { Compass } from 'lucide-react';

interface ToursSectionProps {
  onBooking: (tour: Tour) => void;
}

const ToursSection = ({ onBooking }: ToursSectionProps) => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    setTours(getTours());
  }, []);

  return (
    <section id="tours" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Compass className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tour <span className="gradient-nature bg-clip-text text-transparent">Camping</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá những địa điểm camping tuyệt đẹp trên khắp Việt Nam với 
            dịch vụ chuyên nghiệp và trải nghiệm khó quên
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onBooking={onBooking} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
