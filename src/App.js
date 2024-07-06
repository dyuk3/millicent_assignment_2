import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className='lg:flex w-screen h-screen overflow-auto'>
      <Sidebar menu={menu} setMenu={setMenu} />
      <Main menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default App;
