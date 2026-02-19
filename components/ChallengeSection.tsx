"use client";

import { motion } from "framer-motion";
import Layout from "./Layout";

export default function ChallengeSection() {
    const challenges = [
        {
            title: "AI 모델 연동 및 응답 처리",
            desc: "단순 API 호출이 아닌, 스트림 처리와 데이터 파싱을 통해 실시간 응답성을 확보하고 모델의 한계를 보완하는 로직을 설계했습니다."
        },
        {
            title: "공공데이터 API 통합 가공",
            desc: "다양한 형태의 공공데이터(JSON/XML)를 표준화된 포맷으로 변환하고, 불필요한 호출을 줄이는 캐싱 전략을 고민했습니다."
        },
        {
            title: "1인 웹 서비스 전체 라이프사이클",
            desc: "기획부터 디자인, 개발, 배포, 그리고 운영 단계의 이슈 트래킹까지 웹 서비스의 전 과정을 주도적으로 수행했습니다."
        }
    ];

    return (
        <Layout id="challenge" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        What I Challenged
                    </h2>
                    <div className="h-1 w-20 bg-blue-900 rounded-full mb-6" />
                    <p className="text-gray-600">
                        기술적인 난관을 마주하고, 이를 해결하며 얻은 경험들입니다.
                    </p>
                </div>

                <div className="grid gap-6">
                    {challenges.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white border-l-4 border-blue-900 shadow-sm p-8 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Layout>
    );
}
