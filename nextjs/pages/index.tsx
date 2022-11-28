import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
 
export default function Home() {
    return (
        <Layout
            title="ホームページタイトル"
            description="ホームページ概要"
        >
            <p>ホームページコンテンツ</p>
        </Layout>
    )
}