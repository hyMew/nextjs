//import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/style.module.scss'
import index from '../styles/index.module.scss'
import { useState } from "react"

export default function Home() {

    return (
        <Layout
            title="トップページ"
            description="優しく。美しく。笑顔。丸仲へ marunakaクリーンは汚れの悩みをプロの技術・知識・資器材を用い解決いたします。クリーニングの困り事などございましたら、お気軽にご相談ください。"
        >
            <div className={styles.contain}>
                <div className={index.header}>
                    <div className={index.header_box}>
                        <div>
                            <p>これはテストです。</p>
                        </div>
                    </div>
                </div>
                <div className={index.newsLine}>
                    <div className={index.news_box}>
                        <p className={index.newsCat}>NEWS</p>
                        <dl>
                            <Link href="./">
                                <span className={index.news_date}>2023年2月20日</span>
                                <span className={index.news_text}>◯◯◯◯</span>
                            </Link>
                        </dl>
                    </div>
                </div>
                <div className={index.main}>
                    <p>
                        Pタグです。
                    </p>
                </div>
            </div>
        </Layout>
    )
}