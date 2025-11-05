export default function UsageSection() {
  const scenarios = [
    {
      emoji: "📍",
      title: "시나리오 1: 주력 아파트가 생겼을 때",
      quote: "이번 달부터 ○○아파트 집중하기로 했어요",
      solution: "딱 2편만 제작해서 검색 장악"
    },
    {
      emoji: "📍",
      title: "시나리오 2: 대형 호재가 생겼을 때",
      quote: "우리 지역에 GTX 확정됐어요!",
      solution: "호재 분석 영상 1회 제작"
    },
    {
      emoji: "📍",
      title: "시나리오 3: 분기별 콘텐츠 업데이트",
      quote: "3개월마다 한 번씩 콘텐츠 쌓아가고 싶어요",
      solution: "분기당 1회씩 자율적으로 이용"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          부담 없이, 자유롭게
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-accent-orange">
          필요할 때만 이용하세요
        </h2>

        <p className="text-center text-xl mb-4">
          우리는 월 구독이나 장기 계약을 강요하지 않습니다.
        </p>
        <p className="text-center text-2xl font-bold mb-12 text-accent-orange">
          1회부터 자유롭게 이용 가능합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{scenario.emoji}</div>
              <h3 className="text-lg font-bold mb-3">{scenario.title}</h3>
              <p className="text-gray-300 italic mb-4">"{scenario.quote}"</p>
              <p className="text-accent-orange font-semibold">→ {scenario.solution}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-accent-orange text-white rounded-2xl p-8 shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold">
            "묶이지 마세요. 필요할 때, 원하는 만큼만."
          </p>
        </div>
      </div>
    </section>
  );
}
