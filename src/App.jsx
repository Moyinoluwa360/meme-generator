import Header from "./components/Header"
import Main from "./components/Main"
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
      <Main></Main>
    </div>
  )
}

export default App
