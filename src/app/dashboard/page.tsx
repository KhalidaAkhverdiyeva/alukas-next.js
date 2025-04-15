// "use client";
// import React from "react";
// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { Blog } from "@/types/blog";
// // import Modal from "@/components/modal";
// // import BlogForm from "@/components/blogForm";
// // import { useRequest, useRequestMutation } from "@/http/axiosFetcher";
// // import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Dashboard: React.FC = () => {
//   //   const [isModalOpen, setIsModalOpen] = useState(false);
//   //   const [blogs, setBlogs] = useState<Blog[]>([]);

//   //   const { data, error, isLoading, mutate } = useRequest("blogs", {
//   //     method: "GET",
//   //     module: "devApi",
//   //   });

//   //   const { trigger: deleteBlog } = useRequestMutation("deleteBlog", {
//   //     method: "DELETE",
//   //     module: "devApi",
//   //   });

//   //   const handleDelete = async (id: string) => {
//   //     try {
//   //       await deleteBlog({ dynamicValue: id });
//   //       console.log("Blog deleted:", id);

//   //       setBlogs(blogs.filter((blog) => blog._id !== id));

//   //       mutate();

//   //       toast.success("Blog deleted successfully!");
//   //     } catch (error) {
//   //       console.error("Failed to delete blog:", error);

//   //       toast.error("Failed to delete blog.");
//   //     }
//   //   };

//   //   React.useEffect(() => {
//   //     if (data && data.blogs) {
//   //       setBlogs(data.blogs);
//   //     }
//   //   }, [data]);

//   //   if (isLoading) {
//   //     console.log("Loading data...");
//   //     return <div>Loading...</div>;
//   //   }
//   //   if (error) {
//   //     return <div>Error loading data</div>;
//   //   }

//   //   if (blogs.length === 0) return <div>No data available</div>;

//   //   const truncate = (text: string, maxLength: number) => {
//   //     return text.length > maxLength
//   //       ? text.substring(0, maxLength) + "..."
//   //       : text;
//   //   };

//   return (
//     <div className="px-[80px] py-[20px]">
//       {/* <ToastContainer /> */}
//       <div className="flex justify-end">
//         <button
//           //   onClick={() => setIsModalOpen(true)}
//           className="mb-4 px-4 py-2 bg-[#1D3557] text-end text-white rounded"
//         >
//           Add Blog
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Description
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Author
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Image
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {/* {blogs.map((blog) => (
//               <tr key={blog._id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {blog.title}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {truncate(blog.description, 100)}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {blog.author}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <img
//                     src={
//                       blog.image
//                         ? `https://alukas-back.onrender.com/${blog.image.replace(
//                             /\\/g,
//                             "/"
//                           )}`
//                         : "https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533"
//                     }
//                     alt={blog.title || "Blog Image"}
//                     className="w-16 h-16 object-cover rounded-lg"
//                   />
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <Link
//                     href={`/edit/${blog._id}`}
//                     className="text-[#1D3557] hover:text-blue-900 mr-4"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(blog._id)}
//                     className="text-red-600 hover:text-red-400"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))} */}
//           </tbody>
//         </table>
//         {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//           <h2 className="text-lg font-bold mb-4">Add New Blog</h2>
//           <BlogForm />
//         </Modal> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";

const page = () => {
  return <div>DASHBOARD</div>;
};

export default page;
