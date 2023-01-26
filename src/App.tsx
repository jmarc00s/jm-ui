import { useState } from 'react';
import { Button } from './components';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="h-screen">
      <div className="navbar border-b-2 border-base-200 px-4">
        <span className="font-semibold">React + daisyui + CVA</span>
      </div>
    </main>
  );
}

export default App;
