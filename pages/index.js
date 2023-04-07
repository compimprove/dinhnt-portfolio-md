import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function ParxlSection() {
  return (
    <>
      <div className="border-b border-gray-200"></div>
      <div className="flexible-row-col my-24">
        <div className="md:w-1/2">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Latest work</p>
          <h1 className="my-4 text-5xl font-bold leading-14">Parxl - Singapore Airline</h1>
          <div className="my-4 flex space-x-4">
            <Tag>Warehouse Management</Tag>
            <Tag>Logistics Platform</Tag>
            <Tag>System integration</Tag>
          </div>
          <p className="mt-8 mb-6">
            Parxl - an end-to-end e-commerce logistics platform, from pick up, air freight, customs
            clearance, last mile and returns, tax and fee calculation. The project provides complete
            solution for merchants, connect to over 100 destinations in these key markets—more often
            than almost any other airline.
          </p>
          <DarkButton url="#" className="mt-6 py-2 px-4">
            See this project
          </DarkButton>
        </div>
        <div className="flex justify-end pt-1 md:w-1/2">
          <div className="">
            <Image src="/static/images/project/Parxl.png" width={450} height={450} />
          </div>
        </div>
      </div>
    </>
  )
}

function PlenndeskSection() {
  return (
    <>
      <div className="border-b border-gray-200"></div>
      <div className="flexible-row-col my-24">
        <div className="md:w-1/2">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Latest work</p>
          <h1 className="my-4 text-5xl font-bold leading-14">Plenndesk - Intregralworq</h1>
          <div className="my-4 flex space-x-4">
            <Tag>Website Design</Tag>
            <Tag>Business</Tag>
            <Tag>Concept</Tag>
          </div>
          <p className="mt-8 mb-6">
            This is a homepage design for a concept project – a Domain Ragistrar Comapny. I have
            designed the page first. This is a homepage design for a concept project – a Domain
            Ragistrar Comapny. I have designed the page first.
          </p>
          <DarkButton url="#" className="mt-6 py-2 px-4">
            See this project
          </DarkButton>
        </div>
        <div className="flex justify-end md:w-1/2">
          <div className="border-2 p-3 ">
            <Image src="/static/images/project/Plenndesk.png" width={420} height={420} />
          </div>
        </div>
      </div>
    </>
  )
}

const Tag = function ({ children }) {
  return <div className="bg-blue-200 px-2 py-1 text-sm">{children}</div>
}

const DarkButton = function ({ url, children, className }) {
  return (
    <Link
      href={url}
      className={`inline-block border-2 border-black bg-black font-medium text-white duration-100 hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </Link>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-24 mb-32 max-w-2xl">
        <h1 className="text-5xl font-extrabold">Hi, I'm Dinh</h1>
        <h1 className="mt-2 text-5xl font-extrabold">Fullstack Web Developer</h1>
        <p className="mt-8 leading-7">
          I have vast experience with many programming languages and frameworks. From frontend to
          backend, I have a keen eye for detail and a strong commitment to delivering robust,
          scalable, and user-friendly web applications. If you're looking for a reliable and
          talented developer for your next project, I'm ready to help bring your ideas to life
        </p>
        <DarkButton url={'/work'} className="mt-12 py-3 px-8">
          See my work
        </DarkButton>
      </div>

      <ParxlSection />
      <PlenndeskSection />

      {/* newsletter section */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
