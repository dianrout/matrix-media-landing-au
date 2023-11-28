import JobsDetailContainer from "container/jobs/job-detail/JobDetailContainer"
import { GetServerSideProps } from "next"
import { withTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import React from "react"

interface IPageProps {}

const JobsPage: React.FC<IPageProps> = () => {
  return (
    <div>
      <JobsDetailContainer />
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

export default withTranslation("common")(JobsPage)
