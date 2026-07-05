import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0906',
          color: '#fff',
          fontFamily: "'Inter', -apple-system, sans-serif",
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            backgroundColor: 'rgba(200, 168, 78, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A84E" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '12px',
            color: '#C8A84E'
          }}>
            Something went wrong
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '24px',
            maxWidth: '400px'
          }}>
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={this.handleReload}
            style={{
              padding: '12px 24px',
              backgroundColor: '#C8A84E',
              color: '#0a0906',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#d4b65e'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#C8A84E'}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
