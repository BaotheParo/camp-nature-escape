import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Sparkles, Target, Users, TrendingUp } from 'lucide-react';
import campingNight from '@/assets/camping-night.jpg';
import hikingForest from '@/assets/hiking-forest.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Gắn kết với thiên nhiên',
      description: 'Tôn trọng và bảo vệ môi trường trong mọi hoạt động',
    },
    {
      icon: Heart,
      title: 'Trải nghiệm chân thật',
      description: 'Mang đến những khoảnh khắc đích thực giữa thiên nhiên',
    },
    {
      icon: Users,
      title: 'Gắn kết con người',
      description: 'Xây dựng cộng đồng yêu thiên nhiên và sống chậm',
    },
    {
      icon: Sparkles,
      title: 'Sáng tạo và cảm hứng',
      description: 'Khơi dậy niềm đam mê khám phá và trải nghiệm mới',
    },
    {
      icon: TrendingUp,
      title: 'Phát triển bền vững',
      description: 'Cam kết với du lịch có trách nhiệm và bền vững',
    },
    {
      icon: Target,
      title: 'Khách hàng trung tâm',
      description: 'An toàn, tận tâm trong từng dịch vụ',
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Vision & Mission */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Về <span className="gradient-nature bg-clip-text text-transparent">CAMP</span>
            </h2>
            <p className="text-lg text-muted-foreground italic">A gentle stamp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src={campingNight}
                alt="Camping at night"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-primary">Tầm nhìn của chúng tôi</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Kết nối con người với thiên nhiên, mang đến trải nghiệm thư giãn và gắn kết</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Lấy khách hàng làm trung tâm với dịch vụ an toàn, tận tâm</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Hướng đến phát triển bền vững, tôn trọng môi trường</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-primary">Sứ mệnh</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Thương hiệu tour camping trải nghiệm hàng đầu Việt Nam</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Kết hợp nghỉ dưỡng và khám phá thiên nhiên</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Hành trình 2N1Đ: du lịch + chữa lành + lưu giữ kỷ niệm</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Xây dựng cộng đồng yêu thiên nhiên, sống chậm, gắn kết</span>
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src={hikingForest}
                alt="Hiking in forest"
                className="rounded-2xl shadow-card w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Giá trị cốt lõi</h3>
            <p className="text-muted-foreground">
              Những giá trị định hình văn hóa và dịch vụ của CAMP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-hover transition-smooth border-border/50 bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 gradient-nature rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <value.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
