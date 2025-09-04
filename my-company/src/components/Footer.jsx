function Footer() {
    return (
        <footer style={{ 
            backgroundColor: '#34495e', 
            color: 'white', 
            textAlign: 'center',
            padding: '2rem',
            marginTop: 'auto'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p style={{ margin: '0' }}>© 2023 Company Name. All rights reserved.</p>
                <p style={{ margin: '10px 0 0 0', color: '#bdc3c7' }}>
                    Address: 123 Business Street, City, Country | Phone: +1 234 567 890
                </p>
            </div>
        </footer>
    );
}

export default Footer;