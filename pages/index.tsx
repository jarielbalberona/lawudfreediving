import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lawud Freediving - Community</title>
        <meta name="description" content="A freediving community based in Dumaguete City, Negros Oriental." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/lawud-freediving-black.svg"
            alt="Lawud Freediving Logo"
            width={350}
            height={350}
            priority
          />
        </div>

      </main>
    </>
  )
}
