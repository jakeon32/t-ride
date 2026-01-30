
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import cscenterHero from '../assets/CScenter.jpg';

type InquiryType = 'product-missing' | 'partnership' | 'general' | 'bug' | 'other';

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: 'product-missing', label: '원하는 상품이 목록에 없어요' },
  { value: 'partnership', label: '제휴 · 파트너 문의' },
  { value: 'general', label: '일반 문의 (서비스 이용 전반)' },
  { value: 'bug', label: '서비스 오류 · 버그 신고' },
  { value: 'other', label: '기타' },
];

const faqData = [
  {
    q: '목록에 없는 노선도 문의할 수 있나요?',
    a: '네, 가능합니다. 아래 \'문의하기\' 버튼을 눌러 \'원하는 상품이 목록에 없어요\'를 선택한 후 출발지·도착지 등 정보를 남겨주시면, 이용 가능 여부와 견적을 검토해 안내드립니다.',
  },
  {
    q: '특정 셔틀/프라이빗 상품 문의는 어디서 하나요?',
    a: '이미 목록에 있는 상품이라면, 해당 상품 상세 페이지에서 \'문의하기\' 버튼을 이용해 주세요. 상품에 맞는 정보가 자동으로 입력되어 더 빠르게 안내받으실 수 있습니다.',
  },
  {
    q: '단체/기업용 셔틀도 상담 가능한가요?',
    a: '네, 단체(10인 이상) 또는 기업 전용 셔틀 문의도 가능합니다. 문의하기에서 인원과 요청사항을 함께 남겨주시면 맞춤 견적을 안내드립니다.',
  },
  {
    q: '답변까지 얼마나 걸리나요?',
    a: '문의 접수 후 영업일 기준 1~2일 내에 담당자가 이메일 또는 연락처로 회신드립니다.',
  },
];

const businessTypes = ['운송사', '공연/이벤트', '여행사', '기타'];

const Support: React.FC = () => {
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedType, setSelectedType] = useState<InquiryType>('general');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300';
  const labelClass = 'block text-sm font-bold text-slate-700 mb-2';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative w-full bg-white pt-6 pb-6 px-5 md:px-6">
          <div className="max-w-7xl mx-auto relative">
            <div className="relative h-[280px] md:h-[340px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
              <img
                src={cscenterHero}
                alt="고객센터"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                  powered by <span className="font-bold">T-RiseUp</span>
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10">
                <nav className="text-white/60 text-xs md:text-sm mb-4 font-medium">
                  <Link to="/" className="hover:text-white/90 transition-colors">홈</Link>
                  <span className="mx-2">›</span>
                  <span className="text-white/90">고객센터</span>
                </nav>
                <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.3)]">고객센터</h1>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                  자주 묻는 질문을 먼저 확인해 보시고,
                  필요한 경우 아래 '문의하기' 버튼을 통해 문의를 보내주세요.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="px-5 md:px-6 pt-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-xs md:text-sm text-blue-700 leading-relaxed">
                이미 목록에 있는 특정 노선이나 상품에 대한 문의는
                해당 상품 상세 페이지의 '문의하기'를 이용하시면 더 빠르게 도와드릴 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 md:py-16 px-5 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-6">자주 묻는 질문</h2>
            <div className="space-y-3">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className="text-sm md:text-base font-bold text-slate-800 pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-16 md:pb-24 px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">원하는 답변을 찾지 못하셨나요?</h3>
              <p className="text-sm text-slate-500 mb-6">
                FAQ로 해결되지 않은 문의는 T-Ride 팀이 직접 확인해 드립니다.
              </p>
              <button
                onClick={() => { setShowInquiry(true); setSubmitted(false); setSelectedType('general'); }}
                className="inline-block px-10 py-3.5 rounded-xl bg-[#1e293b] text-white font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                문의하기
              </button>
              <p className="text-[11px] text-slate-400 mt-6 font-medium">
                목적지 기반 이동 솔루션 운영 및 관리 플랫폼 &middot; Powered by <span className="font-bold">T-RiseUp</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* 문의하기 모달 */}
      {showInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
            <div className="overflow-y-auto p-6 md:p-8">

            {submitted ? (
              /* 접수 완료 */
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">문의가 접수되었습니다</h2>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                  영업일 기준 1~2일 내에 담당자가 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setShowInquiry(false)}
                  className="inline-block px-8 py-3 rounded-xl bg-[#1e293b] text-white font-bold text-sm hover:bg-slate-800 transition-colors"
                >
                  닫기
                </button>
              </div>
            ) : (
              /* 폼 */
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">T-Ride 문의</h2>
                  <button onClick={() => setShowInquiry(false)} className="text-slate-400 hover:text-slate-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 문의 유형 */}
                  <div>
                    <label className={labelClass}>문의 유형</label>
                    <div className="space-y-2">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all text-sm ${selectedType === type.value
                            ? 'border-blue-300 bg-blue-50 font-bold text-blue-700'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={selectedType === type.value}
                            onChange={(e) => setSelectedType(e.target.value as InquiryType)}
                            className="accent-blue-600 shrink-0"
                          />
                          {type.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 기본 정보 */}
                  <div>
                    <label className={labelClass}>이름 또는 회사명 <span className="text-red-400">*</span></label>
                    <input type="text" required placeholder="이름 또는 회사명" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>연락처 <span className="text-red-400">*</span></label>
                    <input type="text" required placeholder="이메일 또는 전화번호" className={inputClass} />
                    <p className="text-xs text-slate-400 mt-1">답변을 받으실 이메일 또는 전화번호를 입력해 주세요.</p>
                  </div>

                  {/* "원하는 상품이 목록에 없어요" 추가 필드 */}
                  {selectedType === 'product-missing' && (
                    <div className="space-y-4 pt-2 border-t border-slate-100">
                      <p className="text-xs text-slate-400 pt-3">아래 정보를 남겨주시면 이용 가능 여부와 견적을 안내드립니다.</p>
                      <div>
                        <label className={labelClass}>이동 유형</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input type="radio" name="serviceType" value="shuttle" defaultChecked className="accent-blue-600" /> 셔틀(버스)
                          </label>
                          <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input type="radio" name="serviceType" value="private" className="accent-blue-600" /> 프라이빗(전용 밴)
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>출발지</label>
                          <input type="text" placeholder="예: 인천공항 T1" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>도착지</label>
                          <input type="text" placeholder="예: 서울역" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>편도 / 왕복</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input type="radio" name="tripType" value="편도" defaultChecked className="accent-blue-600" /> 편도
                          </label>
                          <label className="flex items-center gap-2 text-sm text-slate-600">
                            <input type="radio" name="tripType" value="왕복" className="accent-blue-600" /> 왕복
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>희망 이용일</label>
                          <input type="date" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>희망 시간</label>
                          <input type="text" placeholder="예: 09:00" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>인원</label>
                        <input type="number" min="1" placeholder="1" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>짐 / 특이사항</label>
                        <textarea placeholder="예: 캐리어 2개, 유아 1명" rows={2} className={`${inputClass} resize-none`} />
                      </div>
                      <div>
                        <label className={labelClass}>응대 언어</label>
                        <select className={inputClass}>
                          <option value="KR">한국어</option>
                          <option value="EN">English</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>추가 요청</label>
                        <textarea placeholder="예: 2곳 경유, 아동 카시트 필요" rows={2} className={`${inputClass} resize-none`} />
                      </div>
                    </div>
                  )}

                  {/* 제휴 · 파트너 문의 */}
                  {selectedType === 'partnership' && (
                    <div className="space-y-4 pt-2 border-t border-slate-100">
                      <div className="pt-3">
                        <label className={labelClass}>사업 유형</label>
                        <select className={inputClass}>
                          {businessTypes.map((bt) => (
                            <option key={bt} value={bt}>{bt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>문의 내용 <span className="text-red-400">*</span></label>
                        <textarea
                          required
                          placeholder="제휴를 희망하시는 목적지/지역, 운영 형태 등을 자유롭게 적어 주세요."
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>
                  )}

                  {/* 일반 / 오류 / 기타 */}
                  {(selectedType === 'general' || selectedType === 'bug' || selectedType === 'other') && (
                    <div className="pt-2 border-t border-slate-100">
                      <div className="pt-3">
                        <label className={labelClass}>문의 내용 <span className="text-red-400">*</span></label>
                        <textarea
                          required
                          placeholder={
                            selectedType === 'general'
                              ? '예: T-Ride 서비스 이용 방법, 목적지 추천 등'
                              : selectedType === 'bug'
                                ? '예: ○○페이지에서 버튼이 작동하지 않습니다.'
                                : '문의 내용을 자유롭게 입력해 주세요.'
                          }
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#1e293b] text-white font-bold text-sm hover:bg-slate-800 transition-colors mt-2"
                  >
                    문의 보내기
                  </button>
                </form>
              </>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
