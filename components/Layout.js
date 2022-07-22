import Nav from './Nav'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
        <Head>
        <title>HII</title>
        </Head>
        <Nav />
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout