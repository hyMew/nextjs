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
    const pageTitle = title || 'marunakaクリーン 株式会社丸仲'
    return (
        <div>
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description } />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <header className={styles.header}>
                <div className={styles.inner}>
                    <a href="./"><div className={styles.logo}></div></a>
                </div>
				<nav className={styles.mainNav}>
					<div className={styles.headName}>
						<div className={styles.panel}>
							<ul className={styles.topNav}>
								<li><p><a href="./">TOP</a></p></li>
								<li><p><a href="./company">会社案内</a></p></li>
								<li><p><a href="./service">サービス紹介</a></p></li>
								<li><p><a href="./recruit">採用情報</a></p></li>
								<li><p><a href="./contact">お問合せ</a></p></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
            <main>{ children }</main>
            <footer>&copy; Next.js Demo</footer>
        </div>
    )
}