import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToursSection from '@/components/ToursSection';
import AboutSection from '@/components/AboutSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import { Tour } from '@/lib/tourData';

const Index = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | undefined>();

  const handleBooking = (tour: Tour) => {
    setSelectedTour(tour);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ToursSection onBooking={handleBooking} />
        <AboutSection />
        <BookingSection selectedTour={selectedTour} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
