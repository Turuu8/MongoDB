import SignIn from './Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Chagne } from './chnage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<SignIn />} /> */}
        <Route path='/ch' element={<Chagne />} />
      </Routes>
      <SignIn />
    </BrowserRouter>
  );
}

export default App;
