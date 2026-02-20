import { ImageResponse } from "next/og";



export const alt = "김다슬 포트폴리오";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
                    background: "linear-gradient(135deg, #FFF8FB 0%, #EEF2FF 50%, #F8FAFC 100%)",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: "absolute",
                        top: "-80px",
                        right: "-80px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background: "rgba(199, 210, 254, 0.3)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-60px",
                        left: "-60px",
                        width: "250px",
                        height: "250px",
                        borderRadius: "50%",
                        background: "rgba(252, 231, 243, 0.4)",
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10%",
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        background: "rgba(219, 234, 254, 0.25)",
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
                            padding: "8px 24px",
                            borderRadius: "9999px",
                            background: "rgba(255, 255, 255, 0.8)",
                            border: "1px solid rgba(229, 231, 235, 0.6)",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "#6B7280",
                            letterSpacing: "2px",
                            textTransform: "uppercase" as const,
                            marginBottom: "32px",
                        }}
                    >
                        Frontend Developer · Portfolio
                    </div>

                    {/* Name */}
                    <div
                        style={{
                            fontSize: "72px",
                            fontWeight: 700,
                            color: "#111827",
                            letterSpacing: "-2px",
                            marginBottom: "16px",
                            display: "flex",
                        }}
                    >
                        김다슬
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: "28px",
                            fontWeight: 300,
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
                            gap: "16px",
                        }}
                    >
                        {["Pastel UI", "Responsive Web", "AI + Data"].map((keyword) => (
                            <div
                                key={keyword}
                                style={{
                                    display: "flex",
                                    padding: "10px 28px",
                                    borderRadius: "12px",
                                    background: "rgba(255, 255, 255, 0.7)",
                                    border: "1px solid rgba(209, 213, 219, 0.5)",
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#374151",
                                }}
                            >
                                {keyword}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom accent line */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        height: "4px",
                        background: "linear-gradient(90deg, #C7D2FE, #FBCFE8, #BAE6FD)",
                        display: "flex",
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
