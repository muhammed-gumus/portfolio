// "use client";

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';

// type BlogPost = {
//   _id: string;
//   title: string;
//   date: string;
//   description: string;
//   slug: string;
// };

// const Blog = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get('http://localhost:8000/fetch-and-get-posts/');
//         console.log("API Response:", res.data);
//         setPosts(res.data);
//       } catch (error) {
//         console.error("Failed to fetch posts", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto mt-20 px-4">
//       <section className="mb-12">
//         <h1 className="text-4xl font-bold mb-2">Writing</h1>
//         <p className="text-gray-500 mb-6">Explore a selection of posts that showcase my skills and contributions.</p>
//         <div className="space-y-8">
//           {posts.length > 0 ? (
//             posts.map(post => (
//               <div key={post._id}>
//                 <time className="text-gray-500 mb-2 block">{post.date}</time>
//                 <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
//                 <p className="text-gray-300 mb-2">{post.description}</p>
//                 <Link href={`/blog/${post.slug}`}>
//                   <a className="text-blue-500">Read more</a>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <div>Şu anda herhangi bir blog yazısı bulunmuyor.</div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;
