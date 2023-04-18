import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function AboutMeSection({ data }) {
  return (
    <>
      <div className="border-b border-gray-200"></div>
      <div className="my-36 flex flex-col space-y-6 md:flex-row md:justify-start md:space-y-0">
        <div className="md:w-1/3">
          <h1 className="mt-4 text-4xl font-bold md:mt-0 lg:text-6xl">About Me</h1>
        </div>
        <div className="font-light md:w-2/3 md:text-lg">
          <p>
            I'm specialize in creating custom websites and web applications for small businesses and
            startups. With over four years of experience, I have expertise in frontend, backend, and
            DevOps, and skills in Nodejs, React, and Dotnet.
          </p>
          <p className="mt-4">
            I used to work on the logistic platform, warehouse management system, gaming and
            ecommerce platform. I like to listen about the challenges my clients was facing, and
            help them with a proper technical solution. I’m great at product optimization, managing
            infrastructure to reduce the cost, solving a complicated technical problem in project to
            ensure the scalability and performance.
          </p>
          <p className="mt-4">
            The outcome is always what I'm looking for. And when my clients happy about that, I feel
            satisfy with my work.
          </p>
          <p className="mt-4">
            Below is some of the product I was working on. If you feel we can be a great fit, let's
            contact me.
          </p>
        </div>
      </div>
    </>
  )
}

function ProjectSection({ data }) {
  return (
    <>
      <div className="border-b border-gray-200"></div>
      <div className="my-36 flex flex-col md:flex-row md:justify-between">
        <div className="flex justify-start pt-1 md:order-2 md:w-1/2 md:justify-end">
          <Image src={data.imgSrc} width={450} height={450} />
        </div>
        <div className="md:order-1 md:w-1/2">
          <h1 className="mt-4 text-4xl font-bold md:mt-0 lg:text-6xl">{data.title}</h1>
          {data.workType && (
            <p className="my-3 font-light text-gray-300 md:text-xl">{data.workType}</p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="my-5 flex space-x-4">
              {data.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          <p className="mt-4 mb-6 font-light leading-8 text-gray-800 md:mt-8 lg:text-lg">
            {data.description}
          </p>
          <DarkButton url={data.href} className="mt-6 py-2 px-8">
            See this project
          </DarkButton>
        </div>
      </div>
    </>
  )
}

const Tag = function ({ children }) {
  return <div className="bg-blue-200 px-3 py-2 text-sm font-light">{children}</div>
}

const DarkButton = function ({ url, children, className }) {
  return (
    <Link
      href={url}
      className={`inline-block border-2 border-black bg-white font-medium text-black duration-100 hover:bg-black hover:text-white lg:text-lg ${className}`}
    >
      {children}
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-24 mb-32">
        <div className="flex justify-between lg:space-x-6">
          <div>
            <h1 className="text-4xl font-bold md:text-6xl md:font-extrabold">Hi, I'm Dinh</h1>
            <h1 className="mt-2 text-4xl font-bold md:text-6xl md:font-extrabold">Web Developer</h1>
            <p className="mt-8 max-w-2xl font-light leading-8 md:text-lg md:tracking-wide">
              I'm a web developer with over four years of experience building websites and web
              applications. I have vast experience with many programming languages and frameworks.
              My skills in frontend and backend development, along with my experience with DevOps,
              make me the perfect candidate to take your project from idea to launch. I take pride
              in delivering high-quality work that exceeds expectations.
            </p>
            <Link
              href={'/projects'}
              className={`mt-12 inline-block border-2 border-black bg-black py-3 px-11 font-medium text-white duration-100 hover:bg-white hover:text-black lg:text-lg`}
            >
              See my work
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="w-[300px]">
              <Image
                src={'/static/images/avatar.webp'}
                alt="avatar"
                width="350px"
                height="350px"
                className="h-48 w-48 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <AboutMeSection />

      {projectsData.slice(0, 4).map((data) => (
        <ProjectSection key={data.title} data={data} />
      ))}

      {/* newsletter section */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
