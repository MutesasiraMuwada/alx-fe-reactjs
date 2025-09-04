function About() {
    return (
        <div style={{ 
            padding: '40px', 
            maxWidth: '800px', 
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>About Us</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Our company has been providing top-notch services since 1990. 
                We specialize in various fields including technology, marketing, and consultancy. 
                Our team of experienced professionals is committed to delivering exceptional 
                results for our clients.
            </p>
            <div style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#34495e' }}>Our Mission</h2>
                <p>To provide innovative solutions that drive business growth and success.</p>
                
                <h2 style={{ color: '#34495e', marginTop: '20px' }}>Our Vision</h2>
                <p>To be the leading provider of technology and consulting services worldwide.</p>
            </div>
        </div>
    );
}

export default About;