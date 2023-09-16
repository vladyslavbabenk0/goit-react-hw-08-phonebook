export default function Home() {
  return (
    <div
      style={{
        fontFamily:
          "'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        backgroundColor: '#F9F9F9',
        minHeight: '50vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '48px',
          marginTop: '60px',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Welcome to your <br></br>Phone book!
      </h1>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '22px',
          color: '#666',
          maxWidth: '800px',
          margin: 'auto',
          lineHeight: '1.5',
        }}
      >
        Try it now!
      </h2>
    </div>
  );
}
