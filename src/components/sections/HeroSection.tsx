import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
          alt="Modern apartment buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-800/75 to-navy-900/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <Badge variant="default" className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-sm">
            <span className="text-accent-orange">📹</span>
            <span>2025 부동산 마케팅 트렌드</span>
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            블로그만으로는 부족합니다.<br />
            <span className="text-accent-orange">이제 유튜브가 메인 전장입니다.</span>
          </h1>

          {/* Sub Headline */}
          <div className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto space-y-2">
            <p>검색에서 '○○아파트', '○○대장아파트'를 찾는 고객들,</p>
            <p>블로그로 정보를 수집하고 → <span className="font-bold text-white">유튜브 영상 으로 신뢰를 보고 결정합니다.</span></p>
            <p className="text-base md:text-lg">조회수 5천만 나와도 계약 10건이면 수천만원입니다.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="w-full sm:w-auto group">
              우리 지역 키워드 분석 받기
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              무료 상담 신청하기
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Badge variant="success" className="bg-success-light/20 text-white border-success-green/30">
              <span className="text-success-green">✓</span>
              출연 부담 ZERO
            </Badge>
            <Badge variant="success" className="bg-success-light/20 text-white border-success-green/30">
              <span className="text-success-green">✓</span>
              장기 계약 NO
            </Badge>
            <Badge variant="success" className="bg-success-light/20 text-white border-success-green/30">
              <span className="text-success-green">✓</span>
              1회부터 자유 이용
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
