function Home() {
    return (
        <div style={{ 
            padding: '40px', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            minHeight: '60vh'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Our Company</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                We are dedicated to delivering excellence in all our services. 
                With years of experience and a team of experts, we provide innovative 
                solutions tailored to your needs.
            </p>
        </div>
    );
}

export default Home;