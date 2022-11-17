import { useState } from "react"
import HeaderComponent from "./components/HeaderComponent"

function App() {
  const [cantidad, setCantidad] = useState(10000);

  function handleChange(e) {
    console.log(+e.target.value)
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <HeaderComponent />
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
      />
    </div>
  )
}

export default App
