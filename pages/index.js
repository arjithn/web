import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey There! This is <b>Arjith</b>. I'm a frontend engineer and tech
          enthusiast. Best place to strike up a convo is on{" "}
          <a href="https:/twitter.com/arjithn">Twitter</a>.
        </p>
        <h1>
          Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>
      </section>
    </Layout>
  );
}
