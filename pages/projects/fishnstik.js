import Link from "../../components/utilities/Link"
import { Canvas } from "@react-three/fiber"
import { Sky } from "@react-three/drei"
import { useEffect } from "react"
import { removeOverflowHidden, addOverflowHidden } from "../../lib/homeOverflowStyles"
const features = [
  { name: 'Tailwind CSS', description: "I focused for a while on strict adherence BEM and a 7-1 SASS architecture. In React projects, this approach feels sub-optimal. Tailwind feels extremly fast for simple layouts. (There exists an entire build of this site in another theme using BEM and global scoped style sheets)." },
  { name: 'Django with Django Rest Framework', description: 'I enjoy working in Python. Django is very easy to extend.' },
  { name: 'React', description: "My recent past can be chronologically and spiritually divided into 'before React' and 'after React'" },
  { blogTitle: 'Filtering with Dropdowns', blogLink: '/blog/filter-logic-dropdowns', name: 'Notable Tools', description: 'Redux, JWT, Axios, Framer-Motion, React-Select' },
]

export default function FishNStik() {
  useEffect(() => {
    removeOverflowHidden()
    return addOverflowHidden
  }, [])
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">

        <div>
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl">FishNStik</h2>


          <p className="mt-4 text-gray-500">
            An e-commerce store leveraging React and Django with Django Rest Framework.
          </p>

          <span className="relative z-0 py-6 inline-flex rounded-md">
            <Link
              href='https://github.com/ddague1190/fishnstik_app'
              type="button"
              className="font-extrabold relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring--500 focus:border--500"
            >
              <svg role="img" viewBox="0 0 24 24" height='20px' xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>

            </Link>

            <Link
              href='https://fishnstik.herokuapp.com/'
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring--500 focus:border--500"
            >
              Link to website
            </Link>
          </span>

          <p className="mt-4 text-gray-500 mb-2 leading-4">
            This store was built from first principles over a few iterations. It is full-featured enough that I learned how to manage a complex project.
          </p>
          <p className="mt-4 text-gray-500 mb-2 leading-4">
            An example of the level of detail achieved is the checkout process, wherein an order can be made without advanced payment. Once the items have been manufactured or the order is otherwise fulfilled, then the customer pays for the items and they will be shipped. This model allows for pricing adjustments and indefinite delays that are inherent to the business. 
          </p>


          <section className="text-black mt-8">
            <h1 className="text-2xl text-blue-500">Reflections</h1>

            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 leading-4">{feature.description}</dd>
                  {feature.blogTitle && <dd className='text-xs mt-4 w-26 font-semibold text-blue-500 '><Link href={feature.blogLink}>{`See my post on ${feature.blogTitle}`}</Link></dd>}
                </div>
              ))}
            </dl>
          </section>

        </div>
        <div className="flex justify-center items-center w-full">

          <iframe id="ytplayer" type="text/html" className="mx-auto w-full aspect-video"
            src="https://www.youtube.com/embed/pnPMv9FVGdE?autoplay=1&origin=http://example.com"
            frameBorder="0"></iframe>
        
        </div>
      </div>
    </div>
  )
}