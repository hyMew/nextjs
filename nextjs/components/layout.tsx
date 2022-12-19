import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/style.module.css'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        <div className="{style.wrap}">
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || 'ホームページ概要' } />
            </Head>
            <header>
                <h1>{ pageTitle }</h1>
            </header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li>こちらはテストです</li>
                </ul>
            </nav>
            <main>{ children }</main>
            <footer>&copy; Next.js Demo</footer>
        </div>
    )
}