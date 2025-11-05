import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          내 지역 키워드,
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-accent-orange">
          어떤 영상을 만들어야 할까요?
        </h2>

        <p className="text-center text-xl mb-8">무료 상담에서 알려드립니다.</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-success-green text-xl flex-shrink-0">✅</span>
              <span>우리 지역에서 가장 많이 검색되는 키워드 TOP 10</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success-green text-xl flex-shrink-0">✅</span>
              <span>경쟁 채널 분석 및 우리의 기회 포인트</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success-green text-xl flex-shrink-0">✅</span>
              <span>배우 출연 vs 직접 출연, 어떤 게 유리할지 1:1 컨설팅</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success-green text-xl flex-shrink-0">✅</span>
              <span>부담 없이 1회부터 시작하는 방법</span>
            </li>
          </ul>
        </div>

        <p className="text-center text-xl font-bold mb-8">
          장기 계약 없이, 출연 부담 없이<br />
          <span className="text-accent-orange">부담 없이 먼저 상담받아보세요.</span>
        </p>

        <div className="flex justify-center mb-8">
          <Button size="lg" className="group text-xl px-12 py-5 h-auto relative overflow-hidden">
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative">지금 무료 상담 신청하기</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>

        <p className="text-center text-lg text-gray-300 mb-12">
          💬 "1회만 해봐도 효과를 느끼실 겁니다"
        </p>

        {/* Footer Info */}
        <div className="border-t border-white/20 pt-8 space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-300">
            <div>
              <span className="font-semibold">📞 전화:</span> 1670-0704
            </div>
            <div>
              <span className="font-semibold">📧 이메일:</span> wiz@wiztheplanning.com
            </div>
            <div>
              <span className="font-semibold">📍 주소:</span> 서울시 금천구 디지털로 178 가산퍼블릭 A동 2518,2519호
            </div>
          </div>

          {/* Business Info */}
          <div className="text-center text-xs text-gray-400 space-y-1 pt-4 border-t border-white/10">
            <p className="font-semibold">(주)위즈더플래닝</p>
            <p>사업자등록번호: 668-81-00391</p>
            <p className="text-gray-500 mt-2">© 2025 Wiz The Planning. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
