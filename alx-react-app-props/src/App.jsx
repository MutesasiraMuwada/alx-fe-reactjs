import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
    const userData = { 
        name: "Jane Doe", 
        email: "jane.doe@example.com",
        age: "25",
        bio: "Loves hiking and photography"
    };

    return (
        <div className="App">
            <UserContext.Provider value={userData}>
                <h1>User Profile with Context API</h1>
                <ProfilePage />
                <h2>UserProfile Component (Using Context):</h2>
                <UserProfile />
            </UserContext.Provider>
        </div>
    );
}

export default App;