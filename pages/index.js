import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <Link href="/samples/hoc" passHref>
          <a className={styles.card}>
            <h2>HOC &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>

        <Link href="/samples/render_props" passHref>
          <a className={styles.card}>
            <h2>Render Props &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </>
  );
}
