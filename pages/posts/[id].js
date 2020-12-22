import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl leading-tight font-extrabold tracking-tighter my-4 text-primary-500">
                    {postData.title}
                </h1>
                <div className="text-gray-400 mb-5">
                    <Date dateString={postData.date} />
                </div>
                <div
                    className="flex flex-col justify-start items-start space-y-6 list-outside list-decimal text-gray-900 font-content"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>
        </Layout>
    )
}

export function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData,
        },
    }
}
