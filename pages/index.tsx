import HomeContent from "container/home"
import Banner from "container/home/Banner"
import { GetServerSideProps } from "next"
import { withTranslation } from "next-i18next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"

interface IPageProps {}

const Home: React.FC<IPageProps> = () => {
  return <HomeContent />
}

// export const getServerSideProps: GetServerSideProps = async ({
//   locale
// }: Params) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"]))
//     }
//   }
// }

// export default withTranslation("common")(Home)
export default Home
