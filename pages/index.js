import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import AddTodo from '../src/components/addTodo./AddTodo'

export default function Home({ todos }) {
    const router = useRouter()
    const [value, setValue] = useState('')
    const [edit, setEdit] = useState(false)

    const toggle = () => {
        setEdit((isEdit) => !isEdit)
    }

    const handleSubmit = async () => {
        const todo = {
            title: value,
        }
        const res = await axios.post('http://localhost:3000/api/todos', todo)
        if (res.status === 200) {
            router.push('/')
        }

        setValue('')
    }

    return (
        <div>
            <Head>
                <title>Next todo app</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <AddTodo
                value={value}
                setValue={setValue}
                edit={edit}
                submit={handleSubmit}
            />
            <pre>{JSON.stringify(todos, null, 4)}</pre>
        </div>
    )
}

export async function getStaticProps(context) {
    const config = {
        headers: {
            'content-type': 'application/json',
        },
    }

    const res = await axios.get('http://localhost:3000/api/todos', config)

    const { data } = res

    if (!data) return { notFound: true }

    return {
        props: {
            todos: data,
        },
    }
}
