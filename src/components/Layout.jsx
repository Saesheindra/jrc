import Seo from './Seo.jsx'

function Layout({ children }) {
  return (
    <>
      <Seo />
      {children}
    </>
  )
}

export default Layout
