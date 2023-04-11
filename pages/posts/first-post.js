import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import car1 from '../../public/car1.jpg'

export async function getServerSideProps() {
    // Fetch data from external data source
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { todos: data } }
}

const FirstPost = ({ todos }) => {
    return (
        <main>
            <h1>SSR page</h1>
            <ul><li>
            <h2><Link href="/">Back to home</Link></h2>
            </li>
            <li><Image
                src={car1} // Route of the image file
                height={300} // Desired size with correct aspect ratio
                width={300} // Desired size with correct aspect ratio
                alt="Cars"
            /></li>
            {todos.map(item => (
                    <li key={item.id}>{item.title} : {item.userId} : {item.completed}</li>
                ))}
            </ul>

        </main>
    )
}

// export default function FirstPost({ todos }) {
//   return (
//     <>
//       <Head>
//         <title>Simple Car</title>
//       </Head>
//       <h1>Cars</h1>
//       <h2>
//         Hello
//         {/* <Image
//     src="/images/car1.jpg" // Route of the image file
//     height={300} // Desired size with correct aspect ratio
//     width={300} // Desired size with correct aspect ratio
//     alt="Cars"
//   /> */}
//       </h2>
//       <div>Loading..</div>
//        { todos?.length === 0 ? (
//         <div>Loading..</div>
//        ) : (
//         todos?.map((todo) =>  {
//             <div key={todo.id}><p>{todo.id}: {todo.title}</p></div>
//         }
//        ))}
//        <Link href="/">Back to home</Link>
//     </>
//   );
// }

export default FirstPost