import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export const getStaticProps = () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData,
        },
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="leading-normal text-xl text-center text-gray-600">
                <p>
                    Hey There! This is{' '}
                    <b className="text-secondary-600">Arjith</b>. I&#39;m a
                    software developer and tech enthusiast. Best place to strike
                    up a convo is on{' '}
                    <Link href="https:/twitter.com/arjithn">
                        <a className="text-primary-400">Twitter</a>
                    </Link>
                    .
                </p>
            </section>

            <section className="leading-normal text-xl p-px mt-5">
                <h2 className="text-2xl leading-snug my-4 text-gray-700">
                    Blog
                </h2>
                <ul className="list-none p-0 m-0">
                    {allPostsData.map(({ id, data: { date, title } }) => (
                        <li className="mb-5" key={id}>
                            <Link href={`posts/${id}`}>
                                <a className="text-secondary-500 font-medium">
                                    {title}
                                </a>
                            </Link>
                            <br />
                            <small className="text-gray-400">
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
