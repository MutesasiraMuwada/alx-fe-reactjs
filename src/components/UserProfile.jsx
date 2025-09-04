const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '2px solid #e0e0e0',
            padding: '20px',
            margin: '15px',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '300px'
        }}>
            <h2 style={{ 
                color: '#2c3e50',
                margin: '0 0 15px 0',
                fontSize: '1.8rem',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px'
            }}>
                {props.name}
            </h2>
            <p style={{ 
                margin: '8px 0',
                fontSize: '1.1rem',
                color: '#7f8c8d'
            }}>
                Age: <span style={{ 
                    fontWeight: 'bold',
                    color: '#e74c3c'
                }}>{props.age}</span>
            </p>
            <p style={{ 
                margin: '8px 0',
                fontSize: '1rem',
                color: '#34495e',
                fontStyle: 'italic',
                lineHeight: '1.5'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;