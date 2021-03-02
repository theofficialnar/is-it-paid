import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode,
  title?: string,
}

const defaultProps: LayoutProps = {
  title: 'Is It Paid?'
};

Layout.defaultProps = defaultProps;

export default function Layout({ children, title }: LayoutProps) {
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