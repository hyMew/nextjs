import Head from 'next/head'
import Layout from '../components/layout'

export default function About() {
    return (
        <Layout
            title="about"
            description="about概要"
        >
            <p>こちらは<span>about</span>テスト</p>
        </Layout>
    )
}