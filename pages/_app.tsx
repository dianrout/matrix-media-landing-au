import $http from "@services/api"
import interceptor from "@services/api/interceptor"
import "@styles/app.scss"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import "tailwindcss/tailwind.css"
import Layouts from "@components/Layouts"
import store from "store/store"
import { appWithTranslation } from "next-i18next"
import SEOBanner from "public/images/banner.png"

interceptor($http, store)
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="all" />
        <title>
          HNTD Network - Pioneering the latest trends in social media.
        </title>
        <meta property="og:image" content={SEOBanner.src} />
        <meta property="twitter:image" content={SEOBanner.src} />
        <meta property="twitter:image:src" content={SEOBanner.src} />
        <meta
          name="title"
          content={
            "HNTD Network - Pioneering the latest trends in social media."
          }
        />
        <meta
          name="description"
          content={
            "With a source of highly entertaining and unique content, we are confident to deliver a good time of entertainment and top trending content on social networks to our audience."
          }
        />
        <meta name="keywords" content={"hntd"} />
        <meta
          name="generator"
          content={
            "HNTD Network - Pioneering the latest trends in social media."
          }
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>

      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
