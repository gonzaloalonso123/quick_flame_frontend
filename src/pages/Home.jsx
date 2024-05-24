import React, { useEffect } from "react";
import { useToast } from "../context/ToastProvider";
import { useData } from "../context/data/DataProvider";

export const Home = () => {
  const { get, post, data } = useData();

  return (
    <div className="flex items-center justify-center flex-col gap-3 p-8 h-screen w-screen  bg-qf_gray">
      <button
        onClick={get.projects}
        className="bg-qf_orange_1 text-white p-2 rounded-md"
      >
        Get Posts
      </button>
      <button onClick={() => post.projects({ title: "New Post" })}>
        Create Post
      </button>

      {data &&
        data.projects &&
        data.projects.map((project) => (
          <div
            key={project.id}
            className="p-2 border border-gray-300 rounded-md"
          >
            <h1>{project.title}</h1>
          </div>
        ))}
    </div>
  );
};
