import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        {children}
      </main>
  </div>
  )
}