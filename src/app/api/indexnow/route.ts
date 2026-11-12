import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/config/site";

export async function GET() {
  const host = "cycespecialistas.com";
  const key = "a8f3b92c4e1d706598c12e34fa5b67cd";
  const keyLocation = `${SITE_CONFIG.domainUrl}/${key}.txt`;

  const urlList = [
    SITE_CONFIG.domainUrl,
    `${SITE_CONFIG.domainUrl}/medellin`,
    `${SITE_CONFIG.domainUrl}/bello`,
    `${SITE_CONFIG.domainUrl}/envigado`,
    `${SITE_CONFIG.domainUrl}/itagui-sabaneta`,
    `${SITE_CONFIG.domainUrl}/copacabana`,
    `${SITE_CONFIG.domainUrl}/caldas`,
    `${SITE_CONFIG.domainUrl}/rionegro`,
    `${SITE_CONFIG.domainUrl}/girardota`,
    `${SITE_CONFIG.domainUrl}/la-estrella`,
    `${SITE_CONFIG.domainUrl}/sabaneta`,
    `${SITE_CONFIG.domainUrl}/reset-almohadillas-epson`,
    `${SITE_CONFIG.domainUrl}/destape-cabezales-impresoras`,
    `${SITE_CONFIG.domainUrl}/impresora-no-imprime-color`,
    `${SITE_CONFIG.domainUrl}/impresora-no-reconoce-cartucho-tinta`,
    `${SITE_CONFIG.domainUrl}/impresora-laser-imprime-manchas-rayas`,
    `${SITE_CONFIG.domainUrl}/servicios-web`,
  ];

  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      message: "IndexNow notification sent to Bing, Yandex and AI engines successfully",
      urls: urlList,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    }, { status: 500 });
  }
}
