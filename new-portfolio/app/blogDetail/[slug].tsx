// "use client";

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// type BlogPost = {
//   _id: string;
//   title: string;
//   date: string;
//   description: string;
//   slug: string;
// };

// const Post = () => {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (slug) {
//       const fetchPost = async () => {
//         try {
//           const res = await axios.get(`http://localhost:8000/posts`);
//           const posts: BlogPost[] = res.data;
//           const post = posts.find(post => post.slug === slug);
//           setPost(post || null);
//         } catch (error) {
//           console.error("Failed to fetch post", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchPost();
//     }
//   }, [slug]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-20 px-4">
//       <article>
//         <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
//         <time className="text-gray-500 mb-2 block">{post.date}</time>
//         <p className="text-gray-300 mb-2">{post.description}</p>
//         {/* Detaylı içerik burada yer alacak */}
//       </article>
//     </div>
//   );
// };

// export default Post;
