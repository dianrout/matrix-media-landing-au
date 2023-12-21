import { GetStaticProps } from "next"
import { withTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Image from "next/image"
import Link from "next/link"
import ImagePage from "public/img/404.png"

const FourOhFour = () => {
  return (
    <>
      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-[768px] w-full">
            <Image
              src={ImagePage}
              alt=""
              width={609}
              height={440}
              className="m-auto"
            />
            <div className="flex gap-2 w-full justify-between">
              <p className="text-gray text-[25px] Mulish-800 max-w-[436px]">
                This page <span className="text-primary">doesn't exist</span> or
                removed! We suggest you back to home
              </p>
              <Link
                href="/"
                className="flex items-center justify-center Mulish-800 rounded-[50px] bg-secondary text-[#fff] w-[220px] h-[80px] text-[20px]"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: Params) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default withTranslation("common")(FourOhFour)
