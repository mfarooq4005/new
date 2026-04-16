import { useState } from 'react'
import './StudentPortal.css'

function StudentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard')

  const assignments = [
    { id: 1, subject: 'Mathematics', title: 'Chapter 5 Exercises', dueDate: '2024-04-01', status: 'pending' },
    { id: 2, subject: 'Physics', title: 'Lab Report - Motion', dueDate: '2024-04-05', status: 'submitted' },
    { id: 3, subject: 'English', title: 'Essay Writing', dueDate: '2024-04-10', status: 'pending' },
    { id: 4, subject: 'Chemistry', title: 'Periodic Table Quiz', dueDate: '2024-03-28', status: 'graded' },
  ]

  const grades = [
    { subject: 'Mathematics', grade: 'A+', marks: '95/100', term: 'Term 1' },
    { subject: 'Physics', grade: 'A', marks: '88/100', term: 'Term 1' },
    { subject: 'Chemistry', grade: 'A+', marks: '92/100', term: 'Term 1' },
    { subject: 'English', grade: 'A-', marks: '85/100', term: 'Term 1' },
    { subject: 'Computer Science', grade: 'A+', marks: '97/100', term: 'Term 1' },
  ]

  const schedule = [
    { day: 'Monday', subjects: ['Mathematics', 'Physics', 'English', 'Chemistry'] },
    { day: 'Tuesday', subjects: ['Computer Science', 'Mathematics', 'Physics Lab', 'Urdu'] },
    { day: 'Wednesday', subjects: ['English', 'Chemistry Lab', 'Mathematics', 'Islamic Studies'] },
    { day: 'Thursday', subjects: ['Physics', 'Computer Science', 'English', 'Mathematics'] },
    { day: 'Friday', subjects: ['Chemistry', 'Physical Education', 'Art', 'Library'] },
  ]

  const announcements = [
    { id: 1, title: 'Mid-Term Exams Start Next Week', date: '2024-03-20', type: 'exam' },
    { id: 2, title: 'Science Fair Registration Open', date: '2024-03-18', type: 'event' },
    { id: 3, title: 'Parent-Teacher Meeting Scheduled', date: '2024-03-25', type: 'meeting' },
  ]

  return (
    <div className="student-portal">
      <aside className="student-sidebar">
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
            className={`nav-item ${activeTab === 'assignments' ? 'active' : ''}`}
            onClick={() => setActiveTab('assignments')}
          >
            <span>📝</span> Assignments
          </button>
          <button 
            className={`nav-item ${activeTab === 'grades' ? 'active' : ''}`}
            onClick={() => setActiveTab('grades')}
          >
            <span>📈</span> My Grades
          </button>
          <button 
            className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <span>📅</span> Timetable
          </button>
          <button 
            className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <span>📚</span> Resources
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">👨‍🎓</div>
            <div>
              <p className="username">{user?.username || 'Student'}</p>
              <p className="role">O Level 1</p>
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
            {activeTab === 'assignments' && 'My Assignments'}
            {activeTab === 'grades' && 'Grade Report'}
            {activeTab === 'schedule' && 'Class Schedule'}
            {activeTab === 'resources' && 'Learning Resources'}
          </h2>
          <div className="date-display">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="portal-body">
          {activeTab === 'dashboard' && (
            <div className="dashboard-grid">
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <div className="stat-number">{assignments.filter(a => a.status === 'pending').length}</div>
                  <div className="stat-label">Pending Assignments</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <div className="stat-number">A</div>
                  <div className="stat-label">Average Grade</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <div className="stat-number">{assignments.filter(a => a.status === 'submitted').length}</div>
                  <div className="stat-label">Submitted</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Classes Today</div>
                </div>
              </div>

              <div className="content-card full-width">
                <h3>Recent Announcements</h3>
                <div className="announcements-list">
                  {announcements.map(announcement => (
                    <div key={announcement.id} className={`announcement-item type-${announcement.type}`}>
                      <div className="announcement-content">
                        <h4>{announcement.title}</h4>
                        <p>{announcement.date}</p>
                      </div>
                      <span className="type-badge">{announcement.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-card full-width">
                <h3>Quick Links</h3>
                <div className="quick-links">
                  <a href="#assignments" className="quick-link" onClick={(e) => { e.preventDefault(); setActiveTab('assignments') }}>
                    <span>📝</span> View Assignments
                  </a>
                  <a href="#grades" className="quick-link" onClick={(e) => { e.preventDefault(); setActiveTab('grades') }}>
                    <span>📈</span> Check Grades
                  </a>
                  <a href="#schedule" className="quick-link" onClick={(e) => { e.preventDefault(); setActiveTab('schedule') }}>
                    <span>📅</span> Class Schedule
                  </a>
                  <a href="#resources" className="quick-link" onClick={(e) => { e.preventDefault(); setActiveTab('resources') }}>
                    <span>📚</span> Study Materials
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="content-card">
              <h3>My Assignments</h3>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Title</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map(assignment => (
                      <tr key={assignment.id}>
                        <td>{assignment.subject}</td>
                        <td>{assignment.title}</td>
                        <td>{assignment.dueDate}</td>
                        <td>
                          <span className={`status-badge status-${assignment.status}`}>
                            {assignment.status}
                          </span>
                        </td>
                        <td>
                          {assignment.status === 'pending' && (
                            <button className="btn-small">Submit</button>
                          )}
                          {assignment.status === 'submitted' && (
                            <button className="btn-small btn-secondary">View</button>
                          )}
                          {assignment.status === 'graded' && (
                            <button className="btn-small btn-secondary">View Grade</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="content-card">
              <h3>Grade Report - Term 1</h3>
              <div className="grade-summary">
                <div className="gpa-card">
                  <div className="gpa-value">4.0</div>
                  <div className="gpa-label">GPA</div>
                </div>
                <div className="grade-stats">
                  <div className="stat">
                    <div className="stat-value">5</div>
                    <div className="stat-label">Total Subjects</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">91%</div>
                    <div className="stat-label">Average</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value">A</div>
                    <div className="stat-label">Overall Grade</div>
                  </div>
                </div>
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                      <th>Marks</th>
                      <th>Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((grade, index) => (
                      <tr key={index}>
                        <td>{grade.subject}</td>
                        <td><span className="grade-badge">{grade.grade}</span></td>
                        <td>{grade.marks}</td>
                        <td>{grade.term}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="content-card">
              <h3>Weekly Class Schedule</h3>
              <div className="schedule-grid">
                {schedule.map((day, index) => (
                  <div key={index} className="schedule-day">
                    <h4>{day.day}</h4>
                    <ul className="subject-list">
                      {day.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="subject-item">
                          <span className="subject-dot"></span>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="content-card">
              <h3>Learning Resources</h3>
              <div className="resources-grid">
                <div className="resource-card">
                  <div className="resource-icon">📖</div>
                  <h4>E-Books</h4>
                  <p>Access digital textbooks and reference materials</p>
                  <button className="btn btn-primary">Browse Library</button>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">🎥</div>
                  <h4>Video Lectures</h4>
                  <p>Recorded lectures and educational videos</p>
                  <button className="btn btn-primary">Watch Videos</button>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">📄</div>
                  <h4>Study Notes</h4>
                  <p>Downloadable notes and study guides</p>
                  <button className="btn btn-primary">Download Notes</button>
                </div>
                <div className="resource-card">
                  <div className="resource-icon">❓</div>
                  <h4>Practice Quizzes</h4>
                  <p>Self-assessment quizzes for each subject</p>
                  <button className="btn btn-primary">Start Quiz</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default StudentPortal
