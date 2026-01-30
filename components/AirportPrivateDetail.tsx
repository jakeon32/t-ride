
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import chauffeurImg from '../assets/chauffeur_airport.jpg';

const AirportPrivateDetail: React.FC = () => {
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative w-full bg-slate-50 pt-6 px-5 md:px-6">
          <div className="max-w-7xl mx-auto relative">
            <div className="relative h-[280px] md:h-[340px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
              <img src={chauffeurImg} alt="프라이빗 밴" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="bg-white/10 backdrop-blur-sm text-white/70 text-[10px] md:text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                  powered by <span className="font-bold">T-RiseUp</span>
                </span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-10">
                {/* Breadcrumb */}
                <nav className="text-white/70 text-xs md:text-sm mb-4 font-medium">
                  <Link to="/" className="hover:text-white transition-colors">홈</Link>
                  <span className="mx-2">›</span>
                  <Link to="/airport" className="hover:text-white transition-colors">공항 이동</Link>
                  <span className="mx-2">›</span>
                  <span className="text-white">인천공항 ↔ 강남</span>
                </nav>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-slate-700 text-white text-[11px] font-bold px-2.5 py-1 rounded">프라이빗(전용 밴)</span>
                  <span className="bg-emerald-500 text-white text-[11px] font-bold px-2.5 py-1 rounded">예약 가능</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2 [text-shadow:_0_2px_12px_rgba(0,0,0,0.3)]">
                  인천공항 ↔ 강남 프라이빗 밴
                </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['프라이빗 픽업', 'Door-to-Door', '24시간'].map((tag) => (
                    <span key={tag} className="text-[11px] font-medium text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-16 px-5 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Main Content */}
              <div className="lg:col-span-2 space-y-8">

                {/* 요약 카드 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">요약 정보</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: '운행 구간', value: '인천공항 ↔ 강남 일대' },
                      { label: '예상 소요', value: '약 50–70분' },
                      { label: '운행 형태', value: '예약제 전용 차량' },
                      { label: '대상', value: '가족·소규모 단체' },
                    ].map((item) => (
                      <div key={item.label} className="bg-slate-50 rounded-xl p-4">
                        <p className="text-[11px] font-medium text-slate-400 mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-slate-800">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 이용 안내 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">이용 안내</h2>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-slate-700 font-bold shrink-0">•</span>
                      <span><strong className="text-slate-800">이용 시간:</strong> 24시간 예약 가능 (심야·새벽 포함)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-700 font-bold shrink-0">•</span>
                      <span><strong className="text-slate-800">예약 방식:</strong> 기본 예약제 · 최소 24시간 전 예약 권장</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-700 font-bold shrink-0">•</span>
                      <span><strong className="text-slate-800">차량:</strong> 전용 밴 (최대 7인 탑승, 대형 수하물 적재 가능)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-700 font-bold shrink-0">•</span>
                      <span><strong className="text-slate-800">미팅 방법:</strong> 입국장 네임보드 픽업 · 기사 연락처 사전 안내</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-slate-700 font-bold shrink-0">•</span>
                      <span><strong className="text-slate-800">지연·취소:</strong> 출발 6시간 전까지 무료 취소 / 항공편 지연 시 무료 대기</span>
                    </li>
                  </ul>
                </div>

                {/* 픽업·드롭 안내 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">픽업 · 드롭 위치</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-xl p-5">
                      <h3 className="text-sm font-bold text-slate-800 mb-3">픽업 위치</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• 인천공항 T1/T2 입국장 게이트 앞 (네임보드)</li>
                        <li>• 호텔 로비 또는 지정 주소</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-5">
                      <h3 className="text-sm font-bold text-slate-800 mb-3">드롭 위치</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• 강남 일대 호텔, 숙소, 오피스</li>
                        <li>• 서울 내 자유 목적지 가능</li>
                        <li>• 경유지 추가 시 사전 협의</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 요금·예약 안내 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">요금 · 예약 안내</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 pr-4 font-bold text-slate-800">구분</th>
                          <th className="text-left py-3 pr-4 font-bold text-slate-800">편도</th>
                          <th className="text-left py-3 font-bold text-slate-800">비고</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium">기본 (1–3인)</td>
                          <td className="py-3 pr-4">85,000원</td>
                          <td className="py-3">수하물 3개 포함</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium">추가 인원 (4–7인)</td>
                          <td className="py-3 pr-4">110,000원</td>
                          <td className="py-3">대형 밴 배정</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium">심야 할증 (22–06시)</td>
                          <td className="py-3 pr-4" colSpan={2}>기본 요금 + 20%</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium">경유지 추가</td>
                          <td className="py-3 pr-4" colSpan={2}>건당 15,000원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 운영사 정보 */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-slate-900 mb-5">운영사 정보</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 mb-1">T-Ride Partner B</h3>
                      <p className="text-sm text-slate-500 mb-2">공항 프라이빗 전문 운송사 · 운영 10년차</p>
                      <p className="text-xs text-slate-400">전 차량 보험 가입 완료 · 다국어 기사 배정 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sticky CTA Sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <p className="text-sm text-slate-500 mb-1">기본 편도 (1–3인)</p>
                    <p className="text-2xl font-extrabold text-slate-900 mb-4">85,000원~</p>
                    <button className="w-full py-3.5 rounded-xl bg-[#1e293b] text-white font-bold text-sm hover:bg-slate-800 transition-colors mb-3">
                      예약하러 가기
                    </button>
                    <button
                      onClick={() => setShowInquiry(true)}
                      className="w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                    >
                      문의하기
                    </button>
                  </div>
                  <div className="bg-slate-100 rounded-2xl p-5">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      항공편 지연 시 무료 대기 서비스를 제공합니다.
                      경유지 추가, 유아카시트 등 특이사항은 문의하기를 이용해 주세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Fixed CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-5 py-4 z-40 flex gap-3">
          <button
            onClick={() => setShowInquiry(true)}
            className="flex-1 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm"
          >
            문의하기
          </button>
          <button className="flex-[2] py-3.5 rounded-xl bg-[#1e293b] text-white font-bold text-sm">
            예약하러 가기
          </button>
        </div>
      </main>

      <Footer />

      {/* 문의하기 모달 */}
      {showInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">T-Ride 문의</h2>
              <button onClick={() => setShowInquiry(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              아래 정보를 남겨주시면 이용 가능 여부와 견적을 담당자가 이메일 또는 연락처로 안내드립니다.
            </p>

            {/* 자동 필드 */}
            <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-1">
              <p className="text-xs text-slate-400">상품명: <span className="text-slate-600 font-medium">인천공항 ↔ 강남 프라이빗 밴</span></p>
              <p className="text-xs text-slate-400">서비스 타입: <span className="text-slate-600 font-medium">프라이빗(전용 밴)</span></p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('문의가 접수되었습니다.'); setShowInquiry(false); }}>
              {/* 편도/왕복 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">편도 / 왕복</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="radio" name="tripType" value="편도" defaultChecked className="accent-blue-600" /> 편도
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="radio" name="tripType" value="왕복" className="accent-blue-600" /> 왕복
                  </label>
                </div>
              </div>

              {/* 픽업 위치 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">픽업 위치 (주소/호텔명)</label>
                <input type="text" placeholder="예: 서울시 강남구 테헤란로 00, ○○호텔" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300" />
                <p className="text-xs text-slate-400 mt-1">정확한 주소 또는 호텔명을 입력해 주세요.</p>
              </div>

              {/* 날짜 & 시간 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">희망 이용일</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">희망 시간</label>
                  <input type="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300" />
                </div>
              </div>

              {/* 인원 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">인원</label>
                <input type="number" min="1" placeholder="1" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300" />
              </div>

              {/* 짐/특이사항 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">짐 / 특이사항</label>
                <textarea placeholder="예: 대형 수하물 3개, 유아카시트 필요" rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 resize-none" />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                <input type="text" placeholder="이메일 또는 전화번호" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300" />
              </div>

              {/* 언어 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">언어</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300">
                  <option value="KR">한국어</option>
                  <option value="EN">English</option>
                </select>
              </div>

              {/* 추가 요청 */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">추가 요청</label>
                <textarea placeholder="기타 요청사항을 자유롭게 입력해 주세요." rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 resize-none" />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-[#1e293b] text-white font-bold text-sm hover:bg-slate-800 transition-colors mt-2">
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportPrivateDetail;
