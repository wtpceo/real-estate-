export default function CoreMessageSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          블로그 + 유튜브 = 완전한 온라인 존재감
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed">
          <p className="text-center">
            <span className="font-bold text-accent-orange">블로그는 여전히 중요합니다.</span><br />
            정보를 찾는 고객에게 빠르게 답을 줄 수 있으니까요.
          </p>

          <p className="text-center text-2xl font-bold text-accent-orange">
            하지만 신뢰는 유튜브에서 만들어집니다.
          </p>

          <div className="bg-navy-800/50 rounded-2xl p-8 space-y-4">
            <p className="text-gray-300">블로그 글은 누가 썼는지 모릅니다.</p>
            <p className="text-gray-300">대행업체가 쓴 건지, AI가 쓴 건지 알 수 없습니다.</p>
          </div>

          <p className="text-center text-xl font-semibold">하지만 영상은 다릅니다.</p>

          <div className="bg-accent-orange-light rounded-2xl p-8 space-y-3">
            <p className="text-navy-900">얼굴, 목소리, 말투를 보면 고객은 5분 만에 압니다.</p>
            <div className="space-y-2 pl-4 border-l-4 border-accent-orange">
              <p className="text-navy-900 font-semibold">"아, 이 사람 오래 했구나"</p>
              <p className="text-navy-900 font-semibold">"이 사람 진짜 많이 아네"</p>
              <p className="text-navy-900 font-semibold">"이 사람한테 맡기면 되겠다"</p>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="mt-12 bg-white text-navy-900 rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">블로그 (서브)</h3>
              <p className="text-sm text-gray-600">정보 제공<br />빠른 답변<br />SEO 기본</p>
            </div>

            <div className="text-center text-4xl font-bold text-accent-orange">
              +
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2 text-accent-orange">유튜브 (메인)</h3>
              <p className="text-sm text-gray-600">신뢰 구축<br />전문성 증명<br />전환 촉진</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-gray-200">
            <p className="text-center text-2xl font-bold text-accent-orange">
              = 완벽한 온라인 마케팅
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
