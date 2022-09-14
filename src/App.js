import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddUser from './components/pages/AddUser';
import AllUsers from './components/pages/AllUsers';
import Edit from './components/pages/Edit';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/add" element={<AddUser />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
