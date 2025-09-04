function Services() {
    const services = [
        { name: "Technology Consulting", description: "Expert advice on technology solutions" },
        { name: "Market Analysis", description: "Comprehensive market research and insights" },
        { name: "Product Development", description: "End-to-end product development services" },
        { name: "Digital Marketing", description: "Strategic online marketing campaigns" },
        { name: "Cloud Solutions", description: "Scalable cloud infrastructure services" },
        { name: "Data Analytics", description: "Data-driven insights and analytics" }
    ];

    return (
        <div style={{ 
            padding: '40px', 
            backgroundColor: '#fff'
        }}>
            <h1 style={{ 
                textAlign: 'center', 
                color: '#2c3e50', 
                marginBottom: '40px' 
            }}>
                Our Services
            </h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {services.map((service, index) => (
                    <div key={index} style={{ 
                        padding: '20px', 
                        border: '2px solid #e74c3c', 
                        borderRadius: '10px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>{service.name}</h3>
                        <p style={{ color: '#7f8c8d' }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;