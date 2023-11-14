import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 translate-x-4 skew-y-3">
      <Link href="/" className="hover:underline hover:decoration-black text-highlight after:content-['.'] after:text-black">
        000dry
      </Link>
    </h2>
  )
}

export default Header
