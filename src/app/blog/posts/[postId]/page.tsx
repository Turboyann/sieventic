import React from 'react'
import { getSortedPostsData, getPostData } from '../../../../../lib/posts'
import Link from 'next/link'
import { notFound } from "next/navigation"
import "../../../globals.css"
import getFormattedDate from '../../../../../lib/getFormattedDate'
import Image from 'next/image'
import Commentsection from "../../../components/Commentsection"

export function generateMetadata({ params }: { params: {postId: string }}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: 'Post not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: {postId: string }}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return notFound();
    }

    const {id, title, date, category, author, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)
  
    return (
    <div className='mx-auto w-6/12 my-20'>
        <h1 className='text-7xl mt-16 mb-12 w-full font-light mx-auto text-center'>{title}</h1>
        <div className='mb-6 w-full mx-auto'>
            <p className='inline mt-0 mr-6'>{pubDate}</p>
            <Link href={`/blog?category=${category}`} className='inline mt-0 mx-6'>{category}</Link>
            <p className='inline mt-0 mx-6'>{author}</p>
        </div>        
        <Image className="mb-12 w-full" src={`/${id}.jpg`} width={5568} height={3712} alt="image"/>
        <article className='w-9/12 mx-auto mb-20'>
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <Commentsection postId={postId}/>
    </div>
  )
}
