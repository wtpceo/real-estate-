"use client";

import { Accordion, type AccordionItemProps } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs: AccordionItemProps[] = [
    {
      value: "faq-1",
      trigger: <h3 className="text-lg font-bold text-navy-900">제가 꼭 나와야 하나요?</h3>,
      content: "아닙니다! 전문 배우(미시 여성)를 섭외해서 촬영 가능합니다. 카메라 앞이 부담스럽거나 얼굴 공개를 원치 않으시면 배우가 대신 전문가처럼 촬영합니다. 물론 사장님이 직접 나오시면 신뢰도는 더 높고 비용도 절감됩니다."
    },
    {
      value: "faq-2",
      trigger: <h3 className="text-lg font-bold text-navy-900">배우가 나오면 신뢰도가 떨어지지 않나요?</h3>,
      content: "전혀요. 오히려 세련되고 전문적인 느낌을 줍니다. 많은 부동산 채널들이 모델/배우를 활용하고 있으며, 중요한 건 콘텐츠의 전문성입니다. 사장님께서 제공하신 정보를 배우가 자연스럽게 전달합니다."
    },
    {
      value: "faq-3",
      trigger: <h3 className="text-lg font-bold text-navy-900">장기 계약 해야 하나요?</h3>,
      content: "전혀 아닙니다. 1회부터 자유롭게 이용 가능합니다. 월 구독도, 연 계약도 없습니다. 주력 아파트 생길 때, 호재 생길 때, 필요할 때만 1회씩 편하게 이용하세요."
    },
    {
      value: "faq-4",
      trigger: <h3 className="text-lg font-bold text-navy-900">채널이 없는데 가능한가요?</h3>,
      content: "네, 채널 개설부터 도와드립니다. 기존 채널이 있다면 그대로 활용합니다."
    },
    {
      value: "faq-5",
      trigger: <h3 className="text-lg font-bold text-navy-900">조회수가 안 나오면 어떡하죠?</h3>,
      content: "초정밀 키워드는 조회수가 적어도 괜찮습니다. 5천~1만 조회에도 진짜 관심 고객이 보고, 2-3%만 전환되어도 충분한 성과입니다. 중요한 건 조회수가 아니라 '계약으로 이어지는 조회'입니다."
    },
    {
      value: "faq-6",
      trigger: <h3 className="text-lg font-bold text-navy-900">블로그 마케팅은 안 해도 되나요?</h3>,
      content: "아닙니다! 블로그는 계속 하셔야 합니다. 블로그는 정보 제공과 SEO의 기본입니다. 다만 블로그만으로는 부족하고, 유튜브가 신뢰를 만들어주는 메인 전장이라는 뜻입니다. 블로그 + 유튜브 = 완벽한 조합입니다."
    },
    {
      value: "faq-7",
      trigger: <h3 className="text-lg font-bold text-navy-900">얼마나 걸리나요?</h3>,
      content: "촬영은 1회 2-3시간, 전체 제작은 약 2주 소요됩니다."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
          자주 묻는 질문
        </h2>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
