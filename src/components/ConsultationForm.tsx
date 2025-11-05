"use client"

import * as React from "react"
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

interface ConsultationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    region: "",
    message: "",
    agreePrivacy: false
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreePrivacy: e.target.checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreePrivacy) {
      alert("개인정보 수집 및 이용에 동의해주세요.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          region: formData.region,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || '상담 신청에 실패했습니다.')
      }

      // 성공 처리
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // 3초 후 모달 닫기 및 초기화
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          name: "",
          phone: "",
          region: "",
          message: "",
          agreePrivacy: false
        })
        onClose()
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : '상담 신청에 실패했습니다. 잠시 후 다시 시도해주세요.')
      console.error('Form submission error:', error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <ModalTitle>무료 상담 신청</ModalTitle>
          <p className="text-gray-600 mt-2">
            정보를 입력해주시면 빠른 시일 내에 연락드리겠습니다.
          </p>
        </ModalHeader>

        <ModalBody>
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">신청이 완료되었습니다!</h3>
              <p className="text-gray-600">빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all outline-none"
                  placeholder="홍길동"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all outline-none"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* Region */}
              <div>
                <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">
                  지역 / 아파트명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  required
                  value={formData.region}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all outline-none"
                  placeholder="예) 강남구 래미안"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all outline-none resize-none"
                  placeholder="문의하실 내용을 자유롭게 작성해주세요."
                />
              </div>

              {/* Privacy Agreement */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-5 h-5 text-accent-orange border-gray-300 rounded focus:ring-accent-orange cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-red-500">*</span>
                    {" "}개인정보 수집 및 이용에 동의합니다.
                    <span className="block text-xs text-gray-500 mt-1">
                      수집항목: 이름, 연락처, 지역/아파트명, 문의사항 | 이용목적: 상담 및 서비스 안내 | 보유기간: 상담 완료 후 1년
                    </span>
                  </span>
                </label>
              </div>
            </div>
          )}
        </ModalBody>

        {!submitSuccess && (
          <ModalFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="min-w-[120px]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  전송 중...
                </span>
              ) : "상담 신청하기"}
            </Button>
          </ModalFooter>
        )}
      </form>
    </Modal>
  )
}
