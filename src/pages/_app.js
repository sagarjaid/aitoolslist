import "@/styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        onLoad={() => {
          console.log("hjar");
        }}
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3384730,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`,
        }}
      />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-K8PNJ1RRTG"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-K8PNJ1RRTG');
// </script>
