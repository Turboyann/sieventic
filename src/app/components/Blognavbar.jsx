import "../globals.css";
import Link from 'next/link';
export default function Blognavbar() {
  return (
    <div className="flex flex-col h-[340px] w-full nav-blog-height">
        <nav className="contents font-semibold text-color-primary text-base lg:text-lg h-32 secondary-bg">
            <ul className="mx-auto flex flex-col sm:flex-row mb-8 sm:mb-0 items-center">
                <li className="p-5 xl:p-8">
                    <Link href="/">
                    <p>
                        <span className="navhover">Startseite</span>
                    </p>
                    </Link>        
                </li>
                <li className="p-5 xl:p-8">
                    <Link href="/blog">
                        <p>
                            <span className="navhover">sich informieren</span>
                        </p>
                    </Link>
                </li>
                <li className="p-5 xl:p-8">
                    <Link href="/about">
                        <p>
                            <span className="navhover">Über uns</span>
                        </p>
                    </Link>
                </li>
                <li className="p-5 xl:p-8">
                <Link href="/contact">
                    <p>
                    <span className="navhover">Kontaktiere uns</span>
                    </p>
                </Link>
                </li>
            </ul>
        </nav>
        <div className="flex flex-col justify-center text-center h-full">
            <h1 className="text-4xl sm:text-6xl font-[200] mb-2">Swissblog</h1>
            <p className="px-8 sm:text-lg font-[300]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, possimus?</p>
        </div>
    </div>
    );
}
        