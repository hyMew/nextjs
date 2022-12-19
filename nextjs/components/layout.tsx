import Head from 'next/head'
import Link from 'next/link'

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