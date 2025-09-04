import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import './App.css';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <div className="App">
            <UserContext.Provider value={userData}>
                <h1>User Profile with Context API</h1>
                <ProfilePage />
            </UserContext.Provider>
        </div>
    );
}

export default App;