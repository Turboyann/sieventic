import Image from "next/image";
import Link from "next/link";
import ListItemNew from "./components/ListItemNew";
import { getSortedPostsData } from "../../lib/posts";
import "./globals.css";

const allPostsData = getSortedPostsData();

export default function Home() {

  return (
    <main className="">

    <ListItemNew allPostsData={allPostsData}/>

    <div className="background-secondary h-[400] mb-32">
      <h1 className="text-3xl md:text-4xl text-color-primary mt-14 md:mt-0 pb-20 font-light">Erkunde unsere Themen</h1>
      <ul className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-6">
        <Link href="/blog?category=finanzen" className="topic-image-element">
          <Image className="topic-images" src='/finanzen.jpg' alt="finanzen" width={3556} height={3556} />
          <p className="home-topics-title">Finanzen</p>
        </Link>
        <Link href="/blog?category=reisen" className="topic-image-element">
          <Image className="topic-images" src='/reisen.jpg' alt="reisen" width={2000} height={2000} />
          <p className="home-topics-title">Reisen</p>
        </Link>
        <Link href="/blog?category=bildung" className="topic-image-element">
          <Image className="topic-images" src='/bildung.jpg' alt="bildung" width={3163} height={3163} />
          <p className="home-topics-title">Bildung</p>
        </Link>
        <Link href="/blog?category=politik" className="topic-image-element">
          <Image className="topic-images" src='/politik.jpg' alt="politik" width={2907} height={2907} />
          <p className="home-topics-title">Politik</p>
        </Link>
        <Link href="/blog?category=mehr" className="topic-image-element">
          <Image className="topic-images" src='/mehr.jpg' alt="mehr" width={4000} height={4000} />
          <p className="home-topics-title">Weiteres</p>
        </Link>
      </ul>
    </div>

    <div className="secondary-bg p-5 md:p-10">
      <ul className="flex flex-col md:flex-row justify-between w-1/2 md:w-2/3 my-16 xl:my-0 space-x-16 mx-auto relative md:w-2/3 lg:w-1/2">
        <li className="flex flex-col content-center justify-center w-full md:mb-0 mx-auto">
          <h1 className="text-color-primary text-xl md:text-2xl lg:text-3xl mb-2">Was über die Seite</h1>
          <p className="text-base md:text-lg">
            Herzlich willkommen! Diese Webseite wurde mit dem Ziel ins Leben gerufen, Menschen in der Schweiz dabei zu unterstützen, ihr Leben bewusster und selbstbestimmter zu gestalten. In einer zunehmend komplexen Welt fällt es oft schwer, die richtigen Entscheidungen zu treffen und den Überblick zu behalten. 

            Wir bieten Ihnen Tools, Tipps und Ressourcen, die Ihnen helfen, Ihre alltäglichen und langfristigen Entscheidungen besser zu überdenken und bewusste Schritte in Richtung einer ausgeglichenen und erfüllten Lebensweise zu gehen.
          </p>
        </li>
        <li className="hidden xl:flex justify-center w-full md:w-1/2">
          <Image className="about-the-page wavy-image" src='/about-the-page.jpg' alt="about-the-page" width={7360} height={4912} />
        </li>
      </ul>
    </div>
    </main>
  );
}
