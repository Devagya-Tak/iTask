import Navbar from "./components/Navbar"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addtodo">
          <h2 className="text-lg font-bold"> Add a todo </h2>
          <input type="text" />
          <button className="bg-violet-600 hover:bg-violet-900 p-2 py-1 text-sm font-bold  text-white rounded-md mx-6">Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">Lorem ipsum dolor sit.</div>
            <div className="buttons">
              <button className="bg-violet-600 hover:bg-violet-900 p-2 py-1 text-sm font-bold  text-white rounded-md mx-6">Edit</button>
              <button className="bg-violet-600 hover:bg-violet-900 p-2 py-1 text-sm font-bold  text-white rounded-md mx-6">Delete</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

