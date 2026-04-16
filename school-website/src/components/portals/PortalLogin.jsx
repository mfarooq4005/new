import { useState } from 'react'
import './PortalLogin.css'

function PortalLogin({ onLogin, portalType }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Temporary hardcoded credentials for development
    const credentials = {
      teacher: { username: 'teacher', password: 'teacher123' },
      student: { username: 'student', password: 'student123' },
      parent: { username: 'parent', password: 'parent123' },
      admin: { username: 'admin', password: 'admin123' }
    }

    const validCreds = credentials[portalType]
    
    if (username === validCreds.username && password === validCreds.password) {
      onLogin({ type: portalType, username })
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  const portalTitles = {
    teacher: 'Teacher Portal',
    student: 'Student Portal',
    parent: 'Parent Portal',
    admin: 'Admin Dashboard'
  }

  const portalDescriptions = {
    teacher: 'Access your teaching dashboard, manage students, and track progress',
    student: 'View your assignments, grades, and learning resources',
    parent: 'Monitor your child\'s progress and communicate with teachers',
    admin: 'Manage school data, users, and website content'
  }

  return (
    <div className="portal-login-container">
      <div className="portal-login-card">
        <div className="portal-header">
          <span className="portal-icon">🎓</span>
          <h2>{portalTitles[portalType]}</h2>
          <p>{portalDescriptions[portalType]}</p>
        </div>

        <form onSubmit={handleSubmit} className="portal-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-primary btn-full">
            Login to Portal
          </button>

          <div className="demo-credentials">
            <p><strong>Demo Credentials:</strong></p>
            <p>Username: <code>{credentials[portalType].username}</code></p>
            <p>Password: <code>{credentials[portalType].password}</code></p>
          </div>
        </form>

        <button onClick={() => onLogin(null)} className="back-btn">
          ← Back to Home
        </button>
      </div>
    </div>
  )
}

export default PortalLogin
