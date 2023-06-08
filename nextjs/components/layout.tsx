import Head from 'next/head'
import Link from 'next/link'
//import Image from 'next/image'
import styles from '../styles/style.module.scss'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        <div>
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || 'ホームページ概要' } />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/service">Service</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{ children }</main>
            <footer>&copy; Next.js Demo</footer>
        </div>
    )
}