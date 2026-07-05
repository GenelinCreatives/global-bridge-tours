import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'

function Layout() {
  const location = useLocation()
  const isNotFoundPage =
    location.pathname === '/notfound' ||
    location.pathname === '/404' ||
    location.pathname === '*'

  return (
    <div className="w-screen overflow-hidden flex flex-col">
      {!isNotFoundPage && <Navbar />}
      <div className="flex-grow relative">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </div>
  )
}

export default Layout