import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your website<a href="https://nextjs.org"> Fosuaa!</a>
        </h1>

        <p className={styles.description}>
          We will get started very{' '}
          <code className={styles.code}>soon</code>
        </p>

     
      </main>
    </div>
  )
}

export default Home
