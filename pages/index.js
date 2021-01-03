import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Next todo app</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div>Hello! this is a todo app</div>
        </div>
    )
}
