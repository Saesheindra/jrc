import { Link, useLocation } from 'react-router-dom'

function BottomNav() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path) => {
    if (path === '/') return currentPath === '/'
    return currentPath.startsWith(path)
  }

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        <Link to="/" className={`bottom-nav-item ${isActive('/') && currentPath === '/' ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </Link>

        <Link to="/events" className={`bottom-nav-item ${isActive('/events') ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Events</span>
        </Link>

        <Link to="/blog" className={`bottom-nav-item ${isActive('/blog') ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
          </svg>
          <span>Blog</span>
        </Link>

        <Link to="/careers" className={`bottom-nav-item ${isActive('/careers') ? 'active' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </svg>
          <span>Careers</span>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav
