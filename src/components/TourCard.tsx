import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, TrendingUp } from 'lucide-react';
import { Tour, formatPrice, getDifficultyLabel } from '@/lib/tourData';

interface TourCardProps {
  tour: Tour;
  onBooking: (tour: Tour) => void;
}

const TourCard = ({ tour, onBooking }: TourCardProps) => {
  const difficultyColors = {
    easy: 'bg-primary/10 text-primary border-primary/20',
    moderate: 'bg-accent/10 text-accent border-accent/20',
    challenging: 'bg-destructive/10 text-destructive border-destructive/20',
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-smooth border-border/50 bg-card">
      {/* Image with fallback gradient */}
      <div className="relative h-56 overflow-hidden bg-gradient-nature">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:opacity-0 transition-smooth" />
        <div className="absolute top-4 right-4 z-10">
          <Badge className={difficultyColors[tour.difficulty]}>
            <TrendingUp size={14} className="mr-1" />
            {getDifficultyLabel(tour.difficulty)}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
          {tour.title}
        </h3>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-primary" />
            {tour.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-primary" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-primary" />
            Tối đa {tour.maxGuests} người
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
        
        <div>
          <h4 className="font-semibold text-foreground mb-2">Điểm nổi bật:</h4>
          <ul className="space-y-1">
            {tour.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border pt-6">
        <div>
          <p className="text-sm text-muted-foreground">Giá từ</p>
          <p className="text-2xl font-bold text-primary">{formatPrice(tour.price)}</p>
        </div>
        <Button
          onClick={() => onBooking(tour)}
          className="gradient-nature hover:opacity-90 transition-smooth"
        >
          Đặt tour
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
