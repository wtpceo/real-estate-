export default function ResultsSection() {
  const results = [
    {
      emoji: "📈",
      title: "검색 노출 증가",
      content: "'○○아파트' 검색 시 상위 노출\n블로그 + 유튜브로 검색 장악",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      emoji: "📞",
      title: "고품질 문의 증가",
      content: "단순 시세 문의 ↓\n실제 매수/임대 문의 ↑\n\"영상 보고 연락드렸어요\"",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      emoji: "⭐",
      title: "첫 통화부터 신뢰 형성",
      content: "\"영상에서 봤는데 전문가시네요\"\n신뢰가 형성된 상태로 상담 시작",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      emoji: "♻️",
      title: "24시간 일하는 영업사원",
      content: "한 번 만든 영상이\n밤낮없이 고객을 끌어옵니다\n1회 제작으로 지속 효과",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
          이런 결과를 기대할 수 있습니다
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${result.gradient}`}></div>

              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300">{result.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-navy-900 group-hover:text-accent-orange transition-colors duration-300">{result.title}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {result.content}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-orange/5 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
