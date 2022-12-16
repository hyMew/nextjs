import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import index from '../styles/index.module.css'
import { useState } from "react"

export default function Home() {

    const [imageUrl, setImageUrl] = useState (
        "//picsum.photos/400/400?grayscale"
    );

    return (
        <Layout
            title="ホームページタイトル"
            description="ホームページ概要"
        >
            <div className={styles.contain}>
                <p className={index.ptest}>ホームページコンテンツ</p>
                <p>いろいろテスト中です。</p>
                <Link href="//google.com">Google</Link>
                <figure>
                    <Image src="/images/publicdomainq-0012862vrwktr.jpg" alt="test" width={300} objectFit="contain" />
                </figure>
                <figure className={index.sampleImage}>
                    <img src={imageUrl} />
                </figure>
            </div>
        </Layout>
    )
}