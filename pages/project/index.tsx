import Banner from "container/home/Banner"
import ContactUs from "container/home/ContactUs"
import BannerProject from "container/project/BannerProject"
import ProjectList from "container/project/ProjectList"
import { GetServerSideProps } from "next"
import { withTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import React from "react"

interface IPageProps {}

const ProjectPage: React.FC<IPageProps> = () => {
  return (
    <div>
      <BannerProject />
      <ProjectList />
      <ContactUs />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale
}: Params) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default withTranslation("common")(ProjectPage)
