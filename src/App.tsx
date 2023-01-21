import { Button } from './components/Button';

function App() {
  return (
    <main className="h-screen">
      <div className="navbar border-b-2 border-base-200 px-4">
        <span className="font-semibold">React + daisyui + CVA</span>
      </div>

      <div className="flex">
        <Button variant="primary">Teste</Button>
      </div>
    </main>
  );
}

export default App;
