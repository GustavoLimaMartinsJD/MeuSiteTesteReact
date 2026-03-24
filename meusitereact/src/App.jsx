
import gustavo from './assets/gustavo.png'
import eta from './assets/eta.png'
import Button from '../src/Components/Button.jsx'
import { useEffect, useState } from "react";


function App(e) {
  const [Balanca, SetBalanca] = useState(false);
  return (
    <div className="w-screen bg-black">
      <div className="box-border border-5  w-screen h-screen bg-cover text-center" style={{ backgroundImage: `url(${eta})` }}>
        <div className="w-100% flex flex-col rounded-4xl items-center gap-10 mt-10 text-5xl font-semibold"><span className = {`${Balanca ? "opacity-0 transition-all duration-700" : ""}`} style={{fontFamily: 'Playfair Display'}}>Gustavo Lima Martins</span>
          <div className="w-screen h-60">
            <img src={gustavo} alt="gustavo" className = {`mx-auto w-80 rounded-full border-double border-10 bg-gray-700 hover:border-gray-300 hover:-my-5 hover:w-95 hover:cursor-pointer ${Balanca ? "animate-bounce shadow-purple-500" : ""} hover:shadow-purple-500 shadow-2xl transition-all duration-700`} onClick = {() => SetBalanca(!Balanca)}/>
          </div>
          <h1 className={`text-6xl h-20 w-80 ${Balanca ? "opacity-0 transition-all duration-700" : ""} text-center`} style={{fontFamily: 'Playfair Display'}}>Meus Links</h1>
          <div className="gap-10 flex h-25">
            <div className = "w-80 -my-10">
            {/* Botão Linkedin */}
            <Button corpadrao={"bg-blue-500"} texto={"Linkedin"} cor={"hover:bg-blue-400"} link={"https://www.linkedin.com/in/gustavo-lima-martins-9554143ab/"}></Button>
            </div>
            <div className = "w-80 mt-30">
            {/* Botão Curriculo */}
            <Button corpadrao={"bg-red-500"} texto={"Curriculo"} cor={"hover:bg-amber-500"} link={"https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view?usp=sharing"}></Button>
            </div>
            <div className = "w-80 mt-30">
            {/*Botão Portifólio*/}
            <Button corpadrao={"bg-red-500"} texto={"Portifólio"} cor={"hover:bg-orange-600"} link={"https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view?usp=sharing"}></Button>
            </div>
            <div className = "w-80 -my-10">
            {/* Botão Git-Hub */}
            <Button corpadrao={"bg-gray-500"} texto={"Git-Hub"} cor={"hover:bg-gray-400"} link={"https://github.com/GustavoLimaMartinsJD"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
