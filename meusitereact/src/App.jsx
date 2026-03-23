import { useState } from 'react'
import gustavo from './assets/gustavo.png'
import eta from './assets/eta.png'
import Button from '../src/Components/Button.jsx'


function App(e) {
  const [nome, setNome] = useState("")
  const [mostrarInput, setMostrarInput] = useState(true)
  return (
    <div className="w-screen bg-black">
    <div className="box-border border-20 w-sreen h-screen bg-cover" style={{backgroundImage: `url(${eta})`}}>
        <div className="w-100% flex flex-col items-center gap-10 mt-10 text-5xl font-semibold">Gustavo Lima Martins
          <div className="w-screen h-60">
            <img src={gustavo} alt="gustavo" className="mx-auto w-80 rounded-full border-10 hover:w-90 hover:h- transition-all duration-800 hover:cursor-pointer" />
          </div>
          <h1 className="text-6xl font-extralight h-20 w-80 text-center">Meus Links</h1>
          <div className="gap-10 flex h-25">
            {/* Botão Linkedin */}
            <Button corpadrao={"bg-blue-500"} texto={"Linkedin"} cor={"hover:bg-blue-400"} link={"https://www.linkedin.com/in/gustavo-lima-martins-9554143ab/"}></Button>
            {/* Botão Youtube */}
            <Button corpadrao={"bg-red-500"} texto={"Youtube"} cor={"hover:bg-red-500"} link={"https://www.youtube.com/@JepinDev"}></Button>
            {/* Botão Git-Hub */}
            <Button corpadrao={"bg-gray-500"} texto={"Git-Hub"} cor={"hover:bg-gray-400"} link={"https://github.com/GustavoLimaMartinsJD"}></Button>
          </div>
          <div className="w-100% gap-10 flex">
            {/* Botão Curriculo */}
            <Button corpadrao={"bg-red-500"} texto={"Curriculo"} cor={"hover:bg-amber-500"} link={"https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view?usp=sharing"}></Button>
            {/*Botão Portifólio*/}
            <Button corpadrao={"bg-red-500"} texto={"Portifólio"} cor={"hover:bg-orange-600"} link={"https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view?usp=sharing"}></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
