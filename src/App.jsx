import Header from "./Header"

function App() {
  async function getMeme(){
    console.log("runing")
    const getData = await fetch("https://api.imgflip.com/get_memes")
    const jsonData  = await getData.json()
    console.log(jsonData)
  }

  return (
    <div className="app">
      <Header></Header>
    </div>
  )
}

export default App
