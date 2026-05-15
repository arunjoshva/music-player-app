import Player from "./components/Player";

function App() {
  
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-zinc-950 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute w-125 h-125 bg-purple-500/20 blur-3xl rounded-full"></div>
      <Player />
    </div>
  )
}

export default App
