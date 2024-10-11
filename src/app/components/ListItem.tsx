import getFormattedDate from "../../../lib/getFormattedDate"
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { BlogPost } from '../../../types/types'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date, author, category } = post
    const FormattedDate = getFormattedDate(date)
    return (
        <li className="hero-posts-left">
            <Image className="post-image-big border" src={`/${id}.jpg`} width={5568} height={3712} alt="image" />
            <p className="category border-b border-l">{category}</p>
            <Link href={`blog/posts/${id}`}><h1 className="post-title">{title}</h1></Link>
            <p className="data-post">{FormattedDate},<span className="post-author"> {author}</span></p>
            <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui facere architecto inventore facilis ducimus porro labore praesentium tempora ipsam blanditiis.</p>
            <Link href={`blog/posts/${id}`}>
                <button className="buttom-big">MEHR LESEN</button>
            </Link>
        </li>
    )
}