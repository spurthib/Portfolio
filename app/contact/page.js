export default function ContactPage() {
    return (
      <div style={{ 
        padding: '40px 20px', 
        maxWidth: '600px', 
        margin: '0 auto', 
        color: '#000', 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Me</h1>
        <form action="/api/send-email" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ fontSize: '1.2rem' }}>
            Your Email:
            <input 
              type="email" 
              name="email" 
              required 
              style={{ 
                width: '100%', 
                padding: '10px', 
                fontSize: '1rem', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
              }} 
            />
          </label>
          <label style={{ fontSize: '1.2rem' }}>
            Subject:
            <input 
              type="text" 
              name="subject" 
              required 
              style={{ 
                width: '100%', 
                padding: '10px', 
                fontSize: '1rem', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
              }} 
            />
          </label>
          <label style={{ fontSize: '1.2rem' }}>
            Message:
            <textarea 
              name="message" 
              required 
              rows="5" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                fontSize: '1rem', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
              }} 
            />
          </label>
          <button 
            type="submit" 
            style={{ 
              padding: '10px 20px', 
              fontSize: '1.2rem', 
              color: '#fff', 
              backgroundColor: '#007BFF', 
              borderRadius: '5px', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s ease', 
              ':hover': { backgroundColor: '#0056b3' }, 
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }