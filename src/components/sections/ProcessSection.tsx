export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "무료 상담 (30분)",
      items: [
        "주력 단지, 경쟁 환경 파악",
        "검색 키워드 사전 분석 공유",
        "✅ 사장님 출연 vs 배우 출연 선택"
      ]
    },
    {
      number: 2,
      title: "콘텐츠 기획 (3일)",
      items: [
        "촬영할 2편 주제 확정",
        "배우 출연 시: 전달할 정보만 정리",
        "직접 출연 시: 멘트 가이드 제공"
      ]
    },
    {
      number: 3,
      title: "현장 촬영 (1회 2-3시간)",
      items: [
        "아파트 현장 + 주변 인프라",
        "배우 출연 시: 사장님 참여 불필요",
        "2편 분량 한 번에 촬영"
      ]
    },
    {
      number: 4,
      title: "편집 및 최적화 (1주)",
      items: [
        "영상 편집 + 자막 + 효과",
        "썸네일 3종 제작",
        "제목/설명 SEO 최적화"
      ]
    },
    {
      number: 5,
      title: "업로드 및 모니터링",
      items: [
        "채널 업로드 (또는 대행)",
        "초기 성과 모니터링",
        "필요 시 다음 회차 제안"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
          이렇게 진행됩니다
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-orange"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-3 text-navy-900">{step.title}</h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {step.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-shrink-0 w-16 h-16 bg-accent-orange text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg z-10 border-4 border-white">
                  {step.number}
                </div>

                <div className="flex-1 md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
