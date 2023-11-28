import BannenBlog from "container/blog/BlogBanner"
import BlogContainer from "container/blog/BlogContainer"
import { GetServerSideProps } from "next"
import { withTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import React from "react"

interface IPageProps {}

const BlogsPage: React.FC<IPageProps> = () => {
  return (
    <div>
      <BannenBlog />
      <BlogContainer />
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

export default withTranslation("common")(BlogsPage)
