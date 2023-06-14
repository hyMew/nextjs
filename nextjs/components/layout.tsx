import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/style.module.scss'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'test'
    return (
        <div>
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description } />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <main>{ children }</main>
            <footer>&copy; Next.js Demo</footer>
        </div>
    )
}