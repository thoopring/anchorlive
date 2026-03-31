"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import R from "./RevealWrapper";

interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  msg: string;
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { type: "증권방송" },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmitError("");
    try {
      // TODO: Replace with actual API endpoint
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      console.log("[Contact Form]", data);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSent(true);
    } catch {
      setSubmitError("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-[13px] rounded-[10px] border-[1.5px] text-sm outline-none transition-all";
  const inputNormal = `${inputBase} border-gray-200 bg-gray-50 focus:border-primary focus:bg-white`;
  const inputError = `${inputBase} border-red-400 bg-red-50/50 focus:border-red-500 focus:bg-white`;

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
              <p className="text-[15px] text-gray-500 mb-6">
                담당자가 확인 후 영업일 1일 이내에 연락드리겠습니다.
              </p>
              <div className="inline-flex gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  02-2085-6102
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  tom@softbridge.co.kr
                </span>
              </div>
            </div>
          </R>
        ) : (
          <R delay={0.05}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    placeholder="회사명 *"
                    {...register("company", { required: "회사명을 입력해주세요" })}
                    className={errors.company ? inputError : inputNormal}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    placeholder="담당자명 *"
                    {...register("name", { required: "담당자명을 입력해주세요" })}
                    className={errors.name ? inputError : inputNormal}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    placeholder="연락처 *"
                    {...register("phone", {
                      required: "연락처를 입력해주세요",
                      pattern: {
                        value: /^[0-9\-+() ]{8,20}$/,
                        message: "올바른 연락처를 입력해주세요",
                      },
                    })}
                    className={errors.phone ? inputError : inputNormal}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="이메일 *"
                    {...register("email", {
                      required: "이메일을 입력해주세요",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "올바른 이메일 형식을 입력해주세요",
                      },
                    })}
                    className={errors.email ? inputError : inputNormal}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <select
                {...register("type")}
                className={`${inputNormal} text-gray-600`}
              >
                <option>증권방송</option>
                <option>코인방송</option>
                <option>교육/강의</option>
                <option>기타</option>
              </select>
              <textarea
                placeholder="문의 내용 (도입 예상 시기, 동시 접속 규모, 현재 사용 중인 솔루션 등)"
                rows={4}
                {...register("msg")}
                className={`${inputNormal} resize-y`}
              />

              {submitError && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-[10px] bg-red-50 border border-red-200 text-sm text-red-600">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-[15px] rounded-[10px] border-none bg-primary text-white text-base font-bold cursor-pointer hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    전송 중...
                  </>
                ) : (
                  "무료 상담 신청하기"
                )}
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
            </form>
          </R>
        )}
      </div>
    </section>
  );
}
