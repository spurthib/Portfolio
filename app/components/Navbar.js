// app/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', // Space between logo and menu items
      alignItems: 'center', // Center items vertically
      padding: '10px 20px', 
      backgroundColor: '#333', 
      color: 'white' 
      
    }}>
    
      <div style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>Spurthi Buchireddy</div>
      <div>
        <Link href="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link href="/experience" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Experience</Link>
        <Link href="/research" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Research</Link>
        <Link href="/certifications" style={{ color: 'white', textDecoration: 'none' }}>Certifications</Link>
        <Link href="/education" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Education</Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;

