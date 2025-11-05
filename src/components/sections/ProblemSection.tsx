import Image from "next/image";

export default function ProblemSection() {
  const painPoints = [
    {
      emoji: "📝",
      title: "블로그는 열심히 올리는데",
      content: "블로그 포스팅 매일 올리고 있는데\n요즘 고객들은 유튜브부터 찾더라고요.\n블로그만으로는 뭔가 부족한 것 같아요",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&q=80"
    },
    {
      emoji: "📹",
      title: "유튜브 해야 하는 건 아는데",
      content: "유튜브가 대세라는 건 알겠는데\n촬영 장비도, 편집 능력도 없고\n어디서부터 시작해야 할지 막막해요",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80"
    },
    {
      emoji: "😰",
      title: "카메라 앞에 서는 게 부담스러워요",
      content: "영상은 만들고 싶은데\n제가 카메라 앞에 나가는 건 자신이 없어요\n말도 어눌하고 얼굴도 공개하기 싫고...",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80"
    },
    {
      emoji: "💸",
      title: "장기 계약은 부담돼요",
      content: "월 구독, 연 계약 이런 거 부담스러워요\n필요할 때만 쓰고 싶은데\n왜 다들 묶어서 팔려고 하죠?",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
          사장님, 이런 고민 있으시죠?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-5xl">{point.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-navy-900">{point.title}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {point.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
