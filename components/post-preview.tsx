import DateFormatter from './date-formatter'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  return ( 
    <div className="hover:scale-105 duration-300">
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className={`blog-title text-3xl mb-3 leading-snug ${isHovered && "underline decoration-highlight"}`}>
            {title}
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>      
      </Link>
    </div>
  )
}

export default PostPreview
