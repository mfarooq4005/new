import { useState } from 'react'
import './ParentPortal.css'

function ParentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedChild, setSelectedChild] = useState(0)

  const children = [
    { id: 1, name: 'Ahmed Khan', grade: 'O Level 1', avatar: '👨‍🎓' },
    { id: 2, name: 'Ayesha Khan', grade: 'Grade 8', avatar: '👧‍🎓' }
  ]

  const childData = {
    0: {
      attendance: '95%',
      avgGrade: 'A+',
      assignments: [
        { id: 1, subject: 'Mathematics', title: 'Chapter 5 Exercises', dueDate: '2024-04-01', status: 'pending' },
        { id: 2, subject: 'Physics', title: 'Lab Report', dueDate: '2024-04-05', status: 'submitted' },
      ],
      grades: [
        { subject: 'Mathematics', grade: 'A+', marks: '95/100' },
        { subject: 'Physics', grade: 'A', marks: '88/100' },
        { subject: 'English', grade: 'A+', marks: '92/100' },
      ],
      announcements: [
        { id: 1, title: 'Parent-Teacher Meeting Scheduled', date: '2024-03-25', type: 'meeting' },
        { id: 2, title: 'Mid-Term Exams Next Week', date: '2024-04-01', type: 'exam' },
      ]
    },
    1: {
      attendance: '92%',
      avgGrade: 'A',
      assignments: [
        { id: 1, subject: 'Science', title: 'Project Work', dueDate: '2024-04-03', status: 'pending' },
      ],
      grades: [
        { subject: 'Mathematics', grade: 'A', marks: '88/100' },
        { subject: 'Science', grade: 'A+', marks: '94/100' },
        { subject: 'English', grade: 'A-', marks: '85/100' },
      ],
      announcements: [
        { id: 1, title: 'Science Fair Registration', date: '2024-03-20', type: 'event' },
      ]
    }
  }

  const currentData = childData[selectedChild]

  return (
    <div className="parent-portal">
      <aside className="parent-sidebar">
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
            className={`nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            <span>📅</span> Attendance
          </button>
          <button 
            className={`nav-item ${activeTab === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveTab('grades')}
          >
            <span>📈</span> Grades
          </button>
          <button 
            className={`nav-item ${activeTab === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <span>📝</span> Assignments
          </button>
          <button 
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <span>💬</span> Messages
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">👨‍👩‍👧</div>
            <div>
              <p className="username">{user?.username || 'Parent'}</p>
              <p className="role">Guardian</p>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div className="header-left">
            <h2>
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'attendance' && 'Attendance Report'}
              {activeTab === 'grades' && 'Grade Report'}
              {activeTab === 'assignments' && 'Assignments'}
              {activeTab === 'messages' && 'Messages'}
            </h2>
          </div>
          <div className="child-selector">
            <label>Select Child:</label>
            <select value={selectedChild} onChange={(e) => setSelectedChild(Number(e.target.value))}>
              {children.map((child, index) => (
                <option key={child.id} value={index}>
                  {child.name} - {child.grade}
                </option>
              ))}
            </select>
          </div>
        </header>

        <div className="portal-body">
          {activeTab === 'dashboard' && (
            <div className="dashboard-grid">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <div className="stat-number">{currentData.attendance}</div>
                  <div className="stat-label">Attendance</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <div className="stat-number">{currentData.avgGrade}</div>
                  <div className="stat-label">Average Grade</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <div className="stat-number">{currentData.assignments.filter(a => a.status === 'pending').length}</div>
                  <div className="stat-label">Pending Tasks</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📢</div>
                <div className="stat-info">
                  <div className="stat-number">{currentData.announcements.length}</div>
                  <div className="stat-label">New Updates</div>
                </div>
              </div>

              <div className="content-card full-width">
                <h3>Recent Announcements</h3>
                <div className="announcements-list">
                  {currentData.announcements.map(announcement => (
                    <div key={announcement.id} className={`announcement-item type-${announcement.type}`}>
                      <div className="announcement-content">
                        <h4>{announcement.title}</h4>
                        <p>{announcement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-card full-width">
                <h3>Contact Teachers</h3>
                <div className="teacher-contacts">
                  <div className="teacher-card">
                    <div className="teacher-avatar">👨‍🏫</div>
                    <div className="teacher-info">
                      <h4>Mr. Hassan Ali</h4>
                      <p>Mathematics Teacher</p>
                    </div>
                    <button className="btn btn-primary">Message</button>
                  </div>
                  <div className="teacher-card">
                    <div className="teacher-avatar">👩‍🏫</div>
                    <div className="teacher-info">
                      <h4>Mrs. Fatima Noor</h4>
                      <p>Science Teacher</p>
                    </div>
                    <button className="btn btn-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="content-card">
              <h3>Attendance Report - {children[selectedChild].name}</h3>
              <div className="attendance-summary">
                <div className="attendance-stat">
                  <div className="attendance-value">{currentData.attendance}</div>
                  <div className="attendance-label">Overall Attendance</div>
                </div>
                <div className="attendance-chart">
                  <div className="chart-bar">
                    <div className="bar-fill" style={{ width: currentData.attendance }}></div>
                  </div>
                  <p>Present: 95 days | Absent: 5 days</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="content-card">
              <h3>Grade Report - {children[selectedChild].name}</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.grades.map((grade, index) => (
                      <tr key={index}>
                        <td>{grade.subject}</td>
                        <td><span className="grade-badge">{grade.grade}</span></td>
                        <td>{grade.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="content-card">
              <h3>Assignments - {children[selectedChild].name}</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Title</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.assignments.map(assignment => (
                      <tr key={assignment.id}>
                        <td>{assignment.subject}</td>
                        <td>{assignment.title}</td>
                        <td>{assignment.dueDate}</td>
                        <td>
                          <span className={`status-badge status-${assignment.status}`}>
                            {assignment.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="content-card">
              <h3>Messages</h3>
              <div className="messages-list">
                <div className="message-item">
                  <div className="message-avatar">👨‍🏫</div>
                  <div className="message-content">
                    <div className="message-header">
                      <h4>Mr. Hassan Ali - Mathematics</h4>
                      <span className="message-date">Today, 10:30 AM</span>
                    </div>
                    <p>Ahmed has shown excellent progress in algebra. Keep up the good work!</p>
                  </div>
                </div>
                <div className="message-item">
                  <div className="message-avatar">👩‍🏫</div>
                  <div className="message-content">
                    <div className="message-header">
                      <h4>Mrs. Fatima Noor - Science</h4>
                      <span className="message-date">Yesterday, 3:45 PM</span>
                    </div>
                    <p>Please remind Ahmed to submit his lab report by Friday.</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Compose New Message
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default ParentPortal
