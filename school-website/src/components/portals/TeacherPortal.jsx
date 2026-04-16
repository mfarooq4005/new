import { useState } from 'react'
import './TeacherPortal.css'

function TeacherPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [images, setImages] = useState([
    { id: 1, title: 'School Event 2024', date: '2024-03-15', category: 'Events' },
    { id: 2, title: 'Robotics Competition', date: '2024-03-10', category: 'Achievements' },
    { id: 3, title: 'STREAM Fair', date: '2024-02-28', category: 'Academics' }
  ])

  const students = [
    { id: 1, name: 'Ahmed Khan', grade: 'O Level 1', attendance: '95%', avgGrade: 'A+' },
    { id: 2, name: 'Fatima Ali', grade: 'O Level 1', attendance: '92%', avgGrade: 'A' },
    { id: 3, name: 'Hassan Raza', grade: 'O Level 2', attendance: '88%', avgGrade: 'A-' },
    { id: 4, name: 'Zainab Hussain', grade: 'A Level 1', attendance: '97%', avgGrade: 'A+' },
  ]

  const assignments = [
    { id: 1, title: 'Mathematics Chapter 5', class: 'O Level 1', dueDate: '2024-04-01', submissions: '18/20' },
    { id: 2, title: 'Physics Lab Report', class: 'O Level 2', dueDate: '2024-04-05', submissions: '15/22' },
    { id: 3, title: 'English Essay', class: 'A Level 1', dueDate: '2024-04-10', submissions: '10/25' },
  ]

  const announcements = [
    { id: 1, title: 'Mid-Term Exams Schedule', date: '2024-03-20', priority: 'high' },
    { id: 2, title: 'Parent-Teacher Meeting', date: '2024-03-25', priority: 'medium' },
    { id: 3, title: 'Science Fair Registration', date: '2024-04-01', priority: 'low' },
  ]

  const renderDashboard = () => (
    <div className="dashboard-grid">
      <div className="stat-card">
        <div className="stat-icon">👨‍🎓</div>
        <div className="stat-info">
          <div className="stat-number">{students.length}</div>
          <div className="stat-label">Total Students</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📝</div>
        <div className="stat-info">
          <div className="stat-number">{assignments.length}</div>
          <div className="stat-label">Active Assignments</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📢</div>
        <div className="stat-info">
          <div className="stat-number">{announcements.length}</div>
          <div className="stat-label">Announcements</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📊</div>
        <div className="stat-info">
          <div className="stat-number">93%</div>
          <div className="stat-label">Avg Attendance</div>
        </div>
      </div>

      <div className="content-card full-width">
        <h3>Quick Actions</h3>
        <div className="quick-actions">
          <button className="action-btn" onClick={() => setActiveTab('students')}>
            <span>👨‍🎓</span> Manage Students
          </button>
          <button className="action-btn" onClick={() => setActiveTab('assignments')}>
            <span>📝</span> Create Assignment
          </button>
          <button className="action-btn" onClick={() => setActiveTab('announcements')}>
            <span>📢</span> Post Announcement
          </button>
          <button className="action-btn" onClick={() => setShowImageUploader(true)}>
            <span>🖼️</span> Upload Images
          </button>
        </div>
      </div>

      <div className="content-card full-width">
        <h3>Recent Announcements</h3>
        <div className="announcements-list">
          {announcements.map(announcement => (
            <div key={announcement.id} className={`announcement-item priority-${announcement.priority}`}>
              <div className="announcement-content">
                <h4>{announcement.title}</h4>
                <p>{announcement.date}</p>
              </div>
              <span className="priority-badge">{announcement.priority}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStudents = () => (
    <div className="content-card">
      <h3>Student Management</h3>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Attendance</th>
              <th>Avg Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.attendance}</td>
                <td>{student.avgGrade}</td>
                <td>
                  <button className="btn-small">View</button>
                  <button className="btn-small btn-secondary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderAssignments = () => (
    <div className="content-card">
      <h3>Assignment Management</h3>
      <button className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        + Create New Assignment
      </button>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Submissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(assignment => (
              <tr key={assignment.id}>
                <td>{assignment.title}</td>
                <td>{assignment.class}</td>
                <td>{assignment.dueDate}</td>
                <td>{assignment.submissions}</td>
                <td>
                  <button className="btn-small">View</button>
                  <button className="btn-small btn-secondary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderAnnouncements = () => (
    <div className="content-card">
      <h3>Announcement Management</h3>
      <button className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
        + Post New Announcement
      </button>
      <div className="announcements-list">
        {announcements.map(announcement => (
          <div key={announcement.id} className={`announcement-item priority-${announcement.priority}`}>
            <div className="announcement-content">
              <h4>{announcement.title}</h4>
              <p>{announcement.date}</p>
            </div>
            <div className="announcement-actions">
              <button className="btn-small">Edit</button>
              <button className="btn-small btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContentManagement = () => (
    <div className="content-card">
      <h3>Website Content Management</h3>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        Manage images, news, and other content published on the school website
      </p>
      
      <div className="content-tabs">
        <button 
          className={`content-tab ${!showImageUploader ? 'active' : ''}`}
          onClick={() => setShowImageUploader(false)}
        >
          📰 Manage News
        </button>
        <button 
          className={`content-tab ${showImageUploader ? 'active' : ''}`}
          onClick={() => setShowImageUploader(true)}
        >
          🖼️ Image Gallery
        </button>
      </div>

      {showImageUploader ? (
        <div className="image-uploader">
          <div className="upload-area">
            <div className="upload-icon">📁</div>
            <h4>Drag & Drop Images Here</h4>
            <p>or click to browse files</p>
            <button className="btn btn-primary">Select Images</button>
            <p className="upload-note">Supported formats: JPG, PNG, WebP. Max size: 5MB</p>
          </div>

          <div className="uploaded-images">
            <h4>Uploaded Images ({images.length})</h4>
            <div className="image-grid">
              {images.map(image => (
                <div key={image.id} className="image-card">
                  <div className="image-preview">
                    <span>🖼️</span>
                  </div>
                  <div className="image-info">
                    <h5>{image.title}</h5>
                    <p>{image.date}</p>
                    <span className="category-tag">{image.category}</span>
                  </div>
                  <div className="image-actions">
                    <button className="btn-small">Edit</button>
                    <button className="btn-small btn-danger">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="news-manager">
          <button className="btn btn-primary" style={{ marginBottom: '1.5rem' }}>
            + Add News Article
          </button>
          <div className="news-list">
            {images.slice(0, 2).map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-preview">
                  <span>📰</span>
                </div>
                <div className="news-info">
                  <h5>{item.title}</h5>
                  <p>Category: {item.category}</p>
                  <p>Date: {item.date}</p>
                </div>
                <div className="news-actions">
                  <button className="btn-small">Edit</button>
                  <button className="btn-small btn-danger">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="teacher-portal">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo-icon">✒️</span>
          <h3>Al Qalam</h3>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span>📊</span> Dashboard
          </button>
          <button 
            className={`nav-item ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <span>👨‍🎓</span> Students
          </button>
          <button 
            className={`nav-item ${activeTab === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <span>📝</span> Assignments
          </button>
          <button 
            className={`nav-item ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            <span>📢</span> Announcements
          </button>
          <button 
            className={`nav-item ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            <span>🌐</span> Website Content
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">👨‍🏫</div>
            <div>
              <p className="username">{user?.username}</p>
              <p className="role">Teacher</p>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <h2>
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'students' && 'Student Management'}
            {activeTab === 'assignments' && 'Assignment Management'}
            {activeTab === 'announcements' && 'Announcement Management'}
            {activeTab === 'content' && 'Website Content Manager'}
          </h2>
          <div className="date-display">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="portal-body">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'students' && renderStudents()}
          {activeTab === 'assignments' && renderAssignments()}
          {activeTab === 'announcements' && renderAnnouncements()}
          {activeTab === 'content' && renderContentManagement()}
        </div>
      </main>
    </div>
  )
}

export default TeacherPortal
