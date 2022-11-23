"use client";

import Script from "next/script";

export const Analytics = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-1E79473R95"
    ></Script>
    <Script>
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-1E79473R95');`}
    </Script>
  </>
);
