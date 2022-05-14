import siteMetadata from "../../data/siteMetadata";
import { removeOverflowHidden, addOverflowHidden } from "../../lib/homeOverflowStyles";
import { PageSEO } from "../../components/analytics/SEO";
import { useEffect } from "react";
import Link from "next/link";


export default function Projects() {


  useEffect(() => {
    removeOverflowHidden()

    return addOverflowHidden
  }, [])


  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-20 px-10 lg:max-w-5xl lg:mx-auto flex flex-col gap-10">
        <section className='py-5 w-max'>
          <dl>
            <dt className="text-xl tracking-widest font-light py-2">
              Showcase projects
            </dt>
            <dd className="text-4xl py-2 text-white font-extrabold">
              <Link href="projects/fishnwire"><mark className="cursor-pointer p-2 bg-[#359aff] text-white rounded-md">Fish n Wire</mark></Link>
            </dd>
          </dl>
        </section>
        <section className='py-5 w-max'>
          <dl>
            <dt className="text-xl tracking-widest font-light py-2">
              Projects for training purposes
            </dt>
            <dd className="text-4xl py-2  font-extrabold">
              <Link href="projects/trainingpurposes">See them</Link>
            </dd>
          </dl>

        </section>
      </div>
    </>
  )
}
