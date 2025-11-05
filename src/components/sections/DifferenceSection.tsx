import Image from "next/image";

export default function DifferenceSection() {
  const differences = [
    {
      emoji: "🎭",
      title: "출연 부담 ZERO",
      subtitle: "카메라 앞 싫으세요? 괜찮습니다",
      content: "전문 배우가 사장님처럼 전문가 느낌으로\n자연스럽게 촬영해드립니다\n얼굴 공개 걱정 없이!",
      color: "from-purple-50 to-white",
      borderColor: "border-purple-200"
    },
    {
      emoji: "💳",
      title: "회당 결제, 부담 NO",
      subtitle: "월 구독? 연 계약? 없습니다",
      content: "필요할 때만 1회씩 자유롭게\n주력 아파트 바뀔 때, 호재 생길 때\n그때그때 부담 없이 이용하세요",
      color: "from-blue-50 to-white",
      borderColor: "border-blue-200"
    },
    {
      emoji: "🎯",
      title: "부동산 마케팅 전문가",
      subtitle: "단순히 예쁘게 찍는 게 아닙니다",
      content: "어떤 키워드에, 어떤 내용을\n어떻게 보여줘야 전화 오는지 압니다\n200개 업체 운영 노하우",
      color: "from-green-50 to-white",
      borderColor: "border-green-200"
    },
    {
      emoji: "⚡",
      title: "빠른 제작, 확실한 결과",
      subtitle: "1회 방문으로 2편 제작",
      content: "촬영부터 업로드까지 2주 이내\n사장님은 촬영 당일만 시간 내주세요\n(배우 쓰시면 그것도 필요 없음!)",
      color: "from-orange-50 to-white",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
          왜 우리를 선택해야 하나요?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${diff.color} rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${diff.borderColor} overflow-hidden`}
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-orange/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{diff.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-900">{diff.title}</h3>
                <p className="text-sm text-accent-orange font-semibold mb-3">{diff.subtitle}</p>
                <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                  {diff.content}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-orange to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
