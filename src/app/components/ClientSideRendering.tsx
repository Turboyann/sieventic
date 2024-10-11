'use client';

import { useEffect, useState, Suspense } from "react";
import ListItem from "./ListItem";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BlogPost } from "../../../types/types";


type PostsData = BlogPost[];

interface ClientSideRenderingProps {
  allPostsData: PostsData;
}

export default function ClientSideRendering({ allPostsData }: ClientSideRenderingProps) {
  const [topic, setTopic] = useState<string>('');
  const [posts, setPosts] = useState<PostsData>(allPostsData);

  // Wrap this section with Suspense
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchableComponent
        allPostsData={allPostsData}
        topic={topic}
        setTopic={setTopic}
        posts={posts}
        setPosts={setPosts}
      />
    </Suspense>
  );
}

function SearchableComponent({
  allPostsData,
  topic,
  setTopic,
  posts,
  setPosts,
}: {
  allPostsData: PostsData;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  posts: PostsData;
  setPosts: React.Dispatch<React.SetStateAction<PostsData>>;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleCategorySelection(topic: string) {
    const params = new URLSearchParams(searchParams);
    if (topic) {
      params.set('category', topic);
    } else {
      params.delete('category')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    const query = searchParams.get('query') || '';
    const category = searchParams.get('category') || "";
    setTopic(category);

    let prefilteredPosts = topic !== ""
      ? allPostsData.filter(post => post.category.toLowerCase() === topic.toLowerCase())
      : allPostsData;

    const filteredPosts = prefilteredPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()));

    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    setPosts(sortedPosts);
  }, [topic, allPostsData]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center p-6 mb-10 mt-10 sm:mt-0 shadow-md rounded-lg">
        <div className="relative mr-4 mb-6 sm:mb-0">
          <input
            type="text"
            placeholder="Suche Beiträge..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            className="w-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:shadow-md"
          />
        </div>
        <div className="flex justify-center sm:justify-start flex-wrap space-x-4">
          {['Alles', 'Finanzen', 'Reisen', 'Bildung', 'Politik', 'Weiteres'].map((item) => (
            <div
              key={item}
              onClick={() => {
                const selectedTopic = item.toLowerCase() === 'alles' ? '' : item.toLowerCase();
                setTopic(selectedTopic);
                handleCategorySelection(selectedTopic);
              }}
              className={`cursor-pointer px-4 py-2 mb-2 lg:mb-0 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-100 transition duration-200 ${topic === (item.toLowerCase() === 'alles' ? '' : item.toLowerCase()) ? 'bg-blue-100' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto w-3/4 gap-5">

        {posts.length > 0 ? (
          posts.map(post => (
            <ListItem key={post.id} post={post} />
          ))
        ) : (
          <li className="col-span-full text-center text-gray-500 mt-20 md:text-2xl h-[300px] lg:h-[500px]">Keine Suchergebnisse gefunden.</li>
        )}

      </ul>
    </div>
  );
}
