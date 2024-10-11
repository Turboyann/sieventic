import getFormattedDate from "../../../lib/getFormattedDate"
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { BlogPost } from "../../../types/types";

type PostsData = BlogPost[];

interface ListItemNewProps {
  allPostsData: PostsData;
}

export default function ListItemNew({ allPostsData }: ListItemNewProps) {
  return (

  <div className="flex min-h-screen flex-col items-center justify-between secondary-bg">
    <div className="div-class">
      <Image width={6199} height={2521} className="z-0" src='/hero-image.jpg' alt="image" priority={true} />      
    </div>
    <div className="hero-posts">
      <ul className="flex justify-between">
        <li className="hidden lg:flex hero-post-left">
          <ul className="max-w-2xl">
          <h1 className="post-title-big">Älteste Beiträge</h1>

            {allPostsData.slice(0, 2).reverse().map((post) => {
            const { id, title, date, category, author } = post; 
            const formattedDate = getFormattedDate(date); 
          
            return (
              <li className="hero-posts-left">
              <Image className="post-image-big" src={`/${id}.jpg`} width={5568} height={3712} alt="image"/>
              <p className="category">{category}</p>
              <h1 className="post-title">{title}</h1>
              <p className="data-post">{date} <span className="post-author">{author}</span></p>
              <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere architecto inventore facilis ducimus porro labore praesentium tempora ipsam blanditiis.</p>
              <Link href={`blog/posts/${id}`}> 
                <button className="buttom-big">MEHR LESEN</button>
              </Link>
              </li>
              );
            })}
          </ul>
        </li>
        <li className="flex flex-col right-hero mt-28 md:mt-0">
          <section className="lg:ml-10 bg-white relative bottom-20 p-8 pb-5">
            <h1 className='hero-right-title text-sm lg:pt-4 pb-6 font-semibold sm:text-3xl sm:font-light'>Neuste Beiträge</h1>
              <Image className="special-hero-post-image" src='/swiss.jpg' alt='image' width={1956} height={1956} />
              <p className="post-text-right mb-10">Wir verfolgen es, Schweizer über das Alltägliche zu informieren, darunter fallen Themengebiete wie Steuern, Politik und das Gesundheitswesen</p>
          

          <ul className="mb-18">
          {allPostsData.slice(0, 2).map((post) => {
          const { id, title, date, category } = post; 
          const formattedDate = getFormattedDate(date); 
        
          return (
            <li className="">

              <ul>
                <li key={id} className="w-full relative pb-10">
                  <Image className="hero-right-image" src={`/${id}.jpg`} width={5472} height={2836} alt="image"/>
                  <h1 className="hero-right-small-title">{title}</h1>
                  <p className="post-text-right mb-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <Link href={`blog/posts/${id}`} className="p-1">
                    <button className="button-small">MEHR LESEN</button>
                  </Link>
                </li>
               </ul>
            </li>
          );
        })}
      </ul>
    </section>

        </li>
      </ul>
    </div>

    </div>
    )};