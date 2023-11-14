import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="mx-auto max-w-2xl lg:flex-row items-center">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
