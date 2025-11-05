import Image from "next/image";

export default function MarketInsightSection() {
  const dataPoints = [
    {
      emoji: "📊",
      title: "'청라 대장아파트' 유튜브 검색",
      content: "월 평균 조회수 1.5만회",
      highlight: "= 이 키워드 영상 하나로 월 1.5만명 노출"
    },
    {
      emoji: "🎯",
      title: "영상 시청자의 2-3%만 전환되어도",
      content: "조회수 5천 → 100~150명 관심",
      highlight: "→ 그 중 10건만 계약해도 수천만원 매출"
    },
    {
      emoji: "⏱️",
      title: "5분 영상이 알려주는 것",
      content: "경력, 전문성, 말투, 신뢰도",
      highlight: "→ 블로그 10개로도 못 주는 '진짜 전문가' 느낌"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-900">
          2025년 부동산 고객,
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-accent-orange">
          이렇게 검색합니다
        </h2>

        {/* Journey Diagram */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-gray-400">
              <div className="font-bold text-lg mb-2 text-navy-900">[1단계] 네이버 블로그</div>
              <p className="text-gray-600">"○○아파트 시세" 검색 → 기본 정보 수집</p>
            </div>

            <div className="text-center text-3xl text-accent-orange">↓</div>

            <div className="bg-accent-orange-light rounded-2xl p-6 border-l-4 border-accent-orange">
              <div className="font-bold text-lg mb-2 text-navy-900">[2단계] 유튜브 영상 (핵심!)</div>
              <p className="text-gray-700">"○○아파트" 검색 → 영상으로 전문가 검증 → <span className="font-bold">"이 사람한테 맡겨야겠다"</span></p>
            </div>

            <div className="text-center text-3xl text-accent-orange">↓</div>

            <div className="bg-success-light rounded-2xl p-6 border-l-4 border-success-green">
              <div className="font-bold text-lg mb-2 text-navy-900">[3단계] 전화 문의</div>
              <p className="text-gray-700">신뢰가 형성된 상태로 연락</p>
            </div>
          </div>
        </div>

        {/* Core Insight */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 mb-12 text-center">
          <p className="text-xl md:text-2xl mb-4">
            블로그는 <span className="text-gray-300">'정보 수집'</span>
          </p>
          <p className="text-xl md:text-2xl mb-6">
            유튜브는 <span className="text-accent-orange font-bold">'신뢰 형성'</span>
          </p>
          <p className="text-lg text-gray-300 mb-2">블로그로 매물 정보를 확인하고,</p>
          <p className="text-lg text-gray-300 mb-6">유튜브로 "이 사람 진짜 전문가구나"를 확인합니다.</p>
          <p className="text-2xl font-bold text-accent-orange">블로그가 서브라면, 유튜브는 메인입니다.</p>
        </div>

        {/* Data Points with Visual Enhancement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden hover:-translate-y-1"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{point.emoji}</div>
                <h3 className="text-lg font-bold mb-3 text-navy-900">{point.title}</h3>
                <p className="text-gray-600 mb-2">{point.content}</p>
                <p className="text-accent-orange font-semibold flex items-center gap-2">
                  {point.highlight}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Stats Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-accent-orange mb-2">5천~1만</div>
            <div className="text-sm text-gray-600">월 평균 조회수</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-accent-orange mb-2">2-3%</div>
            <div className="text-sm text-gray-600">실제 전환율</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-accent-orange mb-2">10건+</div>
            <div className="text-sm text-gray-600">예상 계약 건수</div>
          </div>
        </div>
      </div>
    </section>
  );
}
