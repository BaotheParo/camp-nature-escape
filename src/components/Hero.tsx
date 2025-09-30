import { Button } from '@/components/ui/button';
import { ArrowRight, Mountain, Users, TreePine } from 'lucide-react';
import heroImage from '@/assets/hero-camping.jpg';

const Hero = () => {
  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Camping in Vietnamese nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <p className="text-sm font-medium text-primary">Tour Camping Trải Nghiệm Thiên Nhiên</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Kết Nối Với
            <br />
            <span className="gradient-nature bg-clip-text text-transparent">Thiên Nhiên</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trải nghiệm cắm trại 2N1Đ độc đáo, nơi bạn có thể tạm gác lại cuộc sống 
            vội vã để tìm lại sự bình yên giữa thiên nhiên trong lành
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToTours}
              className="gradient-nature hover:opacity-90 transition-smooth text-lg px-8 shadow-card"
            >
              Khám phá tour
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 bg-background/50 backdrop-blur-sm hover:bg-background/80"
            >
              Tìm hiểu thêm
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
              <Mountain className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-sm text-muted-foreground">Địa điểm camping</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-primary mb-2">2000+</h3>
              <p className="text-sm text-muted-foreground">Khách hàng hài lòng</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
              <TreePine className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
              <p className="text-sm text-muted-foreground">Thân thiện môi trường</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
