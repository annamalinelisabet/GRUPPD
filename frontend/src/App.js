import './App.css';
import Navbar from './components/Navbar/Navbar';
import Views from './Views/Views';
import { useDispatch } from 'react-redux';
import { checkUser } from './store/actions/authActions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])


  return (
    <div className="App">
      <Navbar />
      <Views />
    </div>
  );
}

export default App;
