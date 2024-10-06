import "../globals.css";
import Image from "next/image";
import { getSortedPostsData } from "../../../lib/posts";
import ClientSideRendering from "../components/ClientSideRendering";

export default async function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <ClientSideRendering allPostsData={allPostsData} />
    </div>
  );
}