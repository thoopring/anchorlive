"use client";

import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import R from "./RevealWrapper";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "증권방송",
    msg: "",
  });

  const inputClass =
    "w-full px-4 py-[13px] rounded-[10px] border-[1.5px] border-gray-200 text-sm outline-none bg-gray-50 transition-all focus:border-primary focus:bg-white";

  return (
    <section id="contact" className="py-[100px] px-8 bg-white">
      <div className="max-w-[640px] mx-auto">
        <R>
          <span className="text-sm font-bold text-primary tracking-[.04em]">CONTACT</span>
          <h2 className="text-heading-section text-dark mt-2.5 mb-3">도입 문의</h2>
          <p className="text-base text-gray-500 leading-[1.7] mb-10">
            전문 상담원이 귀사의 상황에 맞는 최적의 솔루션을 안내해드립니다.
            <br />
            영업일 기준 1일 이내에 연락드립니다.
          </p>
        </R>

        {sent ? (
          <R>
            <div className="text-center py-16">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">문의가 접수되었습니다</h3>
              <p className="text-[15px] text-gray-500">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
            </div>
          </R>
        ) : (
          <R delay={0.05}>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  placeholder="회사명 *"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                />
                <input
                  placeholder="담당자명 *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  placeholder="연락처 *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder="이메일 *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className={`${inputClass} text-gray-600`}
              >
                <option>증권방송</option>
                <option>코인방송</option>
                <option>교육/강의</option>
                <option>기타</option>
              </select>
              <textarea
                placeholder="문의 내용 (도입 예상 시기, 동시 접속 규모, 현재 사용 중인 솔루션 등)"
                rows={4}
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className={`${inputClass} resize-y`}
              />
              <button
                onClick={() => setSent(true)}
                className="w-full py-[15px] rounded-[10px] border-none bg-primary text-white text-base font-bold cursor-pointer hover:bg-primary-dark transition-colors"
              >
                무료 상담 신청하기
              </button>
              <div className="flex justify-center gap-7 mt-3">
                <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
                  <Phone className="w-3.5 h-3.5" />
                  02-2085-6102
                </span>
                <span className="flex items-center gap-1.5 text-[13px] text-gray-400">
                  <Mail className="w-3.5 h-3.5" />
                  tom@softbridge.co.kr
                </span>
              </div>
            </div>
          </R>
        )}
      </div>
    </section>
  );
}
