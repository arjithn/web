import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
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
            <section className={utilStyles.headingMd}>
                <p>
                    Hey There! This is <b className="text-purple-600">Arjith</b>
                    . I&#39;m a frontend engineer and tech enthusiast. Best
                    place to strike up a convo is on{' '}
                    <a href="https:/twitter.com/arjithn">Twitter</a>.
                </p>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, data: { date, title } }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`posts/${id}`}>
                                <StyledLink>{title}</StyledLink>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

const StyledLink = styled.a`
    color: blueviolet;
`
