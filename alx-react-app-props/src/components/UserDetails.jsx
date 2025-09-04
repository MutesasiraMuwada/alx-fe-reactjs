import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div style={{ 
            padding: '20px', 
            border: '2px solid #4CAF50', 
            borderRadius: '10px',
            margin: '20px',
            backgroundColor: '#f0f8ff',
            maxWidth: '400px'
        }}>
            <h2 style={{ color: '#2c3e50' }}>User Details (Using Context API)</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

export default UserDetails;