import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Send } from 'lucide-react';
import { Tour } from '@/lib/tourData';

interface BookingSectionProps {
  selectedTour?: Tour;
}

const BookingSection = ({ selectedTour }: BookingSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: selectedTour?.title || '',
    guests: '1',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this to a backend
    toast({
      title: 'Đặt tour thành công!',
      description: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      tour: '',
      guests: '1',
      date: '',
      message: '',
    });
  };

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Đặt <span className="text-primary">Tour</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Điền thông tin để chúng tôi tư vấn và hỗ trợ bạn tốt nhất
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Thông tin đặt tour</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0912345678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tour">Tour quan tâm *</Label>
                    <Input
                      id="tour"
                      required
                      value={formData.tour}
                      onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
                      placeholder="Tên tour hoặc địa điểm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Số người</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => setFormData({ ...formData, guests: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} người
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Thời gian dự kiến</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Ghi chú</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Thông tin bổ sung, yêu cầu đặc biệt..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-nature hover:opacity-90 transition-smooth text-lg py-6"
                >
                  Gửi yêu cầu đặt tour
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
