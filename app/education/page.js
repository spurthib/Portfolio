export default function Education() {
  return (
    <div style={{ 
      padding: '30px 20px', 
      maxWidth: '1300px', 
      margin: '0 auto', 
      color: '#000', 
      lineHeight: '1.4', 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Education</h1>

      {/* Mississippi State University Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Mississippi State University</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px', fontStyle: 'italic' }}>2021</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Masters in Computer Science</li>
          <li>GPA: 4.0</li>
          <li>
            <strong>Related Coursework:</strong>
            <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
              <li>Artificial Intelligence</li>
              <li>Computational Intelligence</li>
              <li>Data Science</li>
              <li>Software Engineering</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Jawaharlal Nehru Technological University Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Jawaharlal Nehru Technological University</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px', fontStyle: 'italic' }}>2013</p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Bachelors in Computer Science</li>
          <li>GPA: 3.66</li>
          <li>
            <strong>Related Coursework:</strong>
            <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
              <li>Data Structures and Algorithms</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Computer Networks</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}