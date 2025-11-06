import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function UrgencySection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent-orange via-accent-orange-dark to-accent-orange overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
          alt="Chart background"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        {/* Urgency Badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-base px-6 py-2">
            타이밍이 전부입니다
          </Badge>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-white">
          부동산 하신다면,<br />
          유튜브 유입 <span className="text-navy-900">지금이 블루오션</span>입니다
        </h2>

        <p className="text-xl md:text-2xl text-center text-white/90 font-bold mb-12">
          나중에는 늦습니다. 먼저 선점하세요.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stat 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">2025년</div>
            <p className="text-white/90 text-sm md:text-base">부동산 검색의 <span className="font-bold">70%</span>가<br />유튜브로 이동 예상</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">상위 10%</div>
            <p className="text-white/90 text-sm md:text-base">지금 시작한 공인중개사만<br />영상 노출 독점</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">6개월 후</div>
            <p className="text-white/90 text-sm md:text-base">경쟁이 치열해지면<br />비용 2배 이상 증가</p>
          </div>
        </div>

        {/* Loss Aversion Scenarios */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            지금 시작하지 않으면 일어나는 일
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <span className="text-3xl flex-shrink-0">📉</span>
              <div>
                <p className="font-bold text-white mb-1">기회 상실</p>
                <p className="text-white/80 text-sm">경쟁사가 먼저 '우리 지역 + 아파트명' 키워드를 선점합니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <span className="text-3xl flex-shrink-0">💸</span>
              <div>
                <p className="font-bold text-white mb-1">비용 증가</p>
                <p className="text-white/80 text-sm">나중에는 더 많은 영상, 더 높은 제작비가 필요합니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <span className="text-3xl flex-shrink-0">⏳</span>
              <div>
                <p className="font-bold text-white mb-1">시간 낭비</p>
                <p className="text-white/80 text-sm">후발주자는 신뢰 쌓는데 2배 이상 시간이 걸립니다</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
              <span className="text-3xl flex-shrink-0">😰</span>
              <div>
                <p className="font-bold text-white mb-1">고객 유실</p>
                <p className="text-white/80 text-sm">영상으로 먼저 신뢰를 준 경쟁사에게 고객이 넘어갑니다</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            먼저 시작하는 사람이<br />
            <span className="text-navy-900">시장을 장악합니다</span>
          </p>
          <p className="text-lg text-white/90 mb-2">
            1년 뒤, 3년 뒤를 생각하면
          </p>
          <p className="text-xl font-bold text-white">
            지금 당장 시작하는 것이 가장 저렴합니다
          </p>
        </div>
      </div>
    </section>
  );
}
