export default function SolutionSection() {
  const steps = [
    {
      number: 1,
      title: "초정밀 키워드 발굴",
      items: [
        "'○○아파트', '○○ 대장아파트', '○○ 부동산 호재'",
        "경쟁 적고, 구매 의도 높은 키워드만 선별",
        "사장님 주력 단지 맞춤 전략"
      ]
    },
    {
      number: 2,
      title: "전문 배우 섭외 (선택)",
      items: [
        "🎭 카메라 앞 부담스러우세요? 괜찮습니다",
        "전문 배우(미시 여성)가 부동산 전문가처럼 촬영",
        "사장님은 정보만 주시면 됩니다",
        "물론 직접 출연하셔도 좋습니다 (비용 절감!)"
      ]
    },
    {
      number: 3,
      title: "1회 방문 2편 촬영",
      items: [
        "아파트 현장 + 주변 인프라",
        "호재 분석 + 전문가 인터뷰 형식",
        "한 번 방문으로 2편 완성"
      ]
    },
    {
      number: 4,
      title: "검색 최적화 완료",
      items: [
        "영상 편집 + 자막 + 썸네일",
        "제목/설명/태그 SEO 최적화",
        "업로드 및 채널 세팅 지원"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy-900">
          딱 2편의 영상으로
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-accent-orange">
          우리 지역 고객을 만납니다
        </h2>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-2xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-success-green text-2xl">✅</span>
              <span className="font-semibold">출연 부담 ZERO - 전문 배우가 대신 촬영</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-success-green text-2xl">✅</span>
              <span className="font-semibold">장기 계약 NO - 1회부터 자유롭게 이용</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-success-green text-2xl">✅</span>
              <span className="font-semibold">초정밀 키워드 - 진짜 살 사람만 보는 영상</span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-navy-900">🎬 이렇게 만들어드립니다</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent-orange"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-orange text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-3 text-navy-900">{step.title}</h4>
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-accent-orange mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
