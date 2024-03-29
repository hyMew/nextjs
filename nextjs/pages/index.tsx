import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/style.module.scss'
import index from '../styles/index.module.scss'
import { useState } from "react"


export default function Home() {

    return (
        <Layout
            title="トップページ"
            description="test。"
        >
            <div className={styles.contain}>
                <div className={index.header}>
                    <div className={index.header_box}>
                        <div>
                            <p>これはテストです。</p>
                            <p>
                                <Image
                                    src="images/sasuga.gif"
                                    width={100}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    alt="test">
                                </Image>
                            </p>
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