import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 after:content-['.'] after:text-highlight">
        000dry
      </h1>
      <div>
        <a href="https://github.com/000dry"><Image alt="Picture of the author" src="/assets/me.jpeg" style={{ borderRadius: '50%', border: '0.25rem solid highlight'}} width={60} height={60}/></a>
      </div>
    </section>
  )
}

export default Intro
