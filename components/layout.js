import Head from 'next/head'
import Link from 'next/link'

const name = 'Arjith Natarajan'
export const siteTitle = 'Next.js Personal Website'

export default function Layout({ children, home }) {
    return (
        <div className="max-w-xl px-4 mt-12 mx-auto mb-24ß">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className="w-32 h-32 rounded-full"
                            alt={name}
                        />
                        <h1 className="text-4xl leading-tight my-4 font-extrabold tracking-tight text-primary-500">
                            {name}
                        </h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.jpg"
                                    className="w-24 h-24 rounded-full"
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className="text-2xl leading-snug my-4 text-gray-400 font-medium">
                            <Link href="/">
                                <a className="text-current">{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className="my-12">
                    <Link href="/">
                        <a className="text-secondary-500">← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
