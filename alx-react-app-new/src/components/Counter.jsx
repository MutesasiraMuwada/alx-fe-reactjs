import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ 
            textAlign: 'center', 
            margin: '20px', 
            padding: '20px', 
            border: '2px solid #ccc', 
            borderRadius: '10px',
            backgroundColor: '#f9f9f9'
        }}>
            <p style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                color: '#333'
            }}>
                Current Count: {count}
            </p>
            <div>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{ 
                        margin: '5px', 
                        padding: '10px 20px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Increment
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{ 
                        margin: '5px', 
                        padding: '10px 20px', 
                        backgroundColor: '#f44336', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Decrement
                </button>
                <button 
                    onClick={() => setCount(0)}
                    style={{ 
                        margin: '5px', 
                        padding: '10px 20px', 
                        backgroundColor: '#008CBA', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;