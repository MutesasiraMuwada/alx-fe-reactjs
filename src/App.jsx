import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';  // Add this import
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Header />
      <MainContent />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Software developer and coffee enthusiast" 
        />
        
        <UserProfile 
          name="Charlie" 
          age="22" 
          bio="Travel blogger and food lover" 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;