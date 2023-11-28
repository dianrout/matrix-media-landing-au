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
          Matrix Media - Leading the trend on social networking sites
        </title>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/logo.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      </Head>

      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
