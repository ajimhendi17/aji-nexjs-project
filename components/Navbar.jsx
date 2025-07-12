import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      padding: '15px 30px',
      backgroundColor: '#0070f3', // Biru khas Next.js
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      fontFamily: 'Segoe UI, sans-serif',
      borderBottom: '2px solid #005bb5',
    }}>
      <LinkItem href="/" label="🏠 Home" />
      <LinkItem href="/about" label="📖 About" />
      <LinkItem href="/profile" label="👤 Profile" />
      <LinkItem href="/contact" label="✉️ Contact" />
    </nav>
  );
}

function LinkItem({ href, label }) {
  return (
    <Link href={href} passHref>
      <span style={{
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: '6px',
        color: '#ffffff',
        transition: 'background-color 0.3s ease',
      }}
        onMouseEnter={e => e.target.style.backgroundColor = '#005bb5'}
        onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
      >
        {label}
      </span>
    </Link>
  );
}