import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { useState } from "react"

export default function Home() {

    const [imageUrl, setImageUrl] = useState (
        "//picsum.photos/400/400"
    );

    return (
        <Layout
            title="ホームページタイトル"
            description="ホームページ概要"
        >
            <p>ホームページコンテンツ</p>
            <p>いろいろテスト中です。</p>
            <figure className={styles.sampleImage}>
                <img src={imageUrl}></img>
            </figure>
        </Layout>
    )
}