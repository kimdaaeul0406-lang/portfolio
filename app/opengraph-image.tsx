import { ImageResponse } from "next/og";

export const alt = "김다슬 포트폴리오";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    // Load Korean font for proper rendering (KakaoTalk, etc.)
    const fontBold = await fetch(
        "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-700-normal.woff"
    ).then((res) => res.arrayBuffer());

    const fontRegular = await fetch(
        "https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-kr@latest/korean-400-normal.woff"
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(145deg, #FFF8FB 0%, #EEF2FF 40%, #F0F4FF 70%, #FFF0F5 100%)",
                    fontFamily: "NotoSansKR",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative gradient circles */}
                <div
                    style={{
                        position: "absolute",
                        top: "-100px",
                        right: "-60px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(199, 210, 254, 0.5), rgba(186, 230, 253, 0.3))",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-40px",
                        width: "350px",
                        height: "350px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, rgba(252, 205, 211, 0.5), rgba(253, 230, 138, 0.3))",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "8%",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "rgba(221, 214, 254, 0.3)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        right: "15%",
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        background: "rgba(186, 230, 253, 0.25)",
                        display: "flex",
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "60px",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {/* Label Badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 28px",
                            borderRadius: "9999px",
                            background: "rgba(255, 255, 255, 0.85)",
                            border: "1px solid rgba(229, 231, 235, 0.6)",
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#6B7280",
                            letterSpacing: "2px",
                            marginBottom: "36px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                        }}
                    >
                        Software Creator · Portfolio
                    </div>

                    {/* Name */}
                    <div
                        style={{
                            fontSize: "76px",
                            fontWeight: 700,
                            color: "#111827",
                            letterSpacing: "-2px",
                            marginBottom: "20px",
                            display: "flex",
                        }}
                    >
                        김다슬
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: "28px",
                            fontWeight: 400,
                            color: "#4B5563",
                            marginBottom: "48px",
                            textAlign: "center",
                            lineHeight: 1.4,
                            display: "flex",
                        }}
                    >
                        감성은 설계하고, 기능은 끝까지 구현합니다.
                    </div>

                    {/* Keywords */}
                    <div
                        style={{
                            display: "flex",
                            gap: "14px",
                        }}
                    >
                        {[
                            { label: "Planning", color: "rgba(252, 205, 211, 0.35)" },
                            { label: "Design", color: "rgba(186, 230, 253, 0.35)" },
                            { label: "Development", color: "rgba(221, 214, 254, 0.35)" },
                        ].map((keyword) => (
                            <div
                                key={keyword.label}
                                style={{
                                    display: "flex",
                                    padding: "12px 30px",
                                    borderRadius: "14px",
                                    background: keyword.color,
                                    border: "1px solid rgba(209, 213, 219, 0.4)",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "#374151",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                {keyword.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom accent gradient line */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "5px",
                        background: "linear-gradient(90deg, #818CF8, #F9A8D4, #67E8F9, #C084FC)",
                        display: "flex",
                    }}
                />
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "NotoSansKR",
                    data: fontRegular,
                    style: "normal",
                    weight: 400,
                },
                {
                    name: "NotoSansKR",
                    data: fontBold,
                    style: "normal",
                    weight: 700,
                },
            ],
        }
    );
}
