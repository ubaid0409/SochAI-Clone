"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 API Keys
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const AUTH_TOKEN = process.env.NEXT_PUBLIC_SOCHAI_EXPLORE_TOKEN;

  // 🔥 Fetch all posts
  const fetchPosts = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${API_BASE_URL}/api/get-all-posts?page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      // ✅ Make sure posts are valid
      setPosts(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Handle Like (Optimistic UI)
  const handleLike = async (postId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, upvotes: (p.upvotes || 0) + 1 } : p
      )
    );

    try {
      await fetch(`${API_BASE_URL}/api/upvote-post/${postId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Like API failed:", err);
    }
  };

  // 🔥 Fetch posts on load & when page changes
  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  return (
    // <div className="flex min-h-screen bg-gray-100 text-gray-900">
    //   {/* <Head>
    //     <title>Dashboard | SochAI</title>
    //   </Head> */}

    // </div>
      <div className="flex flex-1 min-h-screen p-6 overflow-y-auto text-white mt-2 ml-2 ">
        <div className="bg-neutral-800 rounded-lg p-6 shadow">
          {loading ? (
            <p className="text-center">Loading posts...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : posts.length > 0 ? (
            <>
              <div className="divide-y">
                {posts.map((post) => (
                  <div key={post.id} className="flex gap-4 py-4">
                    {/* User Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {post.user?.username?.charAt(0).toUpperCase() || "U"}
                    </div>

                    {/* Post Content */}
                    <div className="flex-1">
                      <p className="font-semibold">{post.user?.username || "Unknown User"}</p>
                      {post.title && <p className="text-lg font-bold">{post.title}</p>}
                      {post.content && <p>{post.content}</p>}

                      {/* Post Images */}
                      {post.imageUrls?.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {post.imageUrls.map((img, idx) => (
                            <img
                              key={idx}
                              src={img.replace("view?usp=drivesdk", "preview")}
                              alt="Post"
                              className="rounded-lg w-full h-40 object-cover"
                            />
                          ))}
                        </div>
                      )}

                      {/* Post Stats */}
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <span>👍 {post.downvotes || 0}</span>
                        <span>👎 {post.downvotes || 0}</span>
                        <span>💬 {post.commentCount || 0}</span>
                        <span>👀 {post.view_count || 0}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Buttons */}
              <div className="flex justify-center mt-4 gap-4">
                {page > 1 && (
                  <button
                    onClick={() => setPage(page - 1)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Previous
                  </button>
                )}
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p className="text-center">No posts found.</p>
          )}
        </div>
      </div>
  );
}
