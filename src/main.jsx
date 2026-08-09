import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Expertise from './pages/Expertise.jsx'
import Awards from './pages/Awards.jsx'
import Blog from './pages/Blog.jsx'
import Events from './pages/Events.jsx'
import Careers from './pages/Careers.jsx'
import Podcasts from './pages/Podcasts.jsx'
import EsgMalaysiaGuide2026 from './pages/blog/EsgMalaysiaGuide2026.jsx'
import IfrsS1S2MalaysiaGuide from './pages/blog/IfrsS1S2MalaysiaGuide.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Layout from './components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/esg-consulting-malaysia-guide" element={<EsgMalaysiaGuide2026 />} />
            <Route path="/blog/ifrs-s1-s2-malaysia-implementation" element={<IfrsS1S2MalaysiaGuide />} />
            <Route path="/events" element={<Events />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
