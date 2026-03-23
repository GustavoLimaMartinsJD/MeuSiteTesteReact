import { useState } from 'react'
import gustavo from './assets/gustavo.png'
import Button from '../src/Components/Button.jsx'
function App() {

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="box-border border-20 w-screen h-screen rounded-4xl border-black bg-white">
        <div className="flex flex-col items-center gap-10">
          <img src={gustavo} alt="gustavo" className="mx-auto w-64 mt-30 rounded-4xl border-10" />
          <h1 className = "mt-10 text-7xl font-extralight">Meu site de teste
            </h1>
          <h1 className = "text-5xl font-extralight"> Com meus links</h1>
          <div className = "gap-10 flex">
          <Button corpadrao={"bg-blue-500"} texto={"Linkedin"} cor={"hover:bg-blue-400"} link={"https://www.linkedin.com/in/gustavo-lima-martins-9554143ab/"}></Button> 
          <Button corpadrao={"bg-red-500"} texto={"Youtube"} cor={"hover:bg-red-400"} link={"https://www.youtube.com/@JepinDev"}></Button> 
          <Button corpadrao={"bg-gray-500"} texto={"Git-Hub"} cor={"hover:bg-gray-400"} link={"https://github.com/GustavoLimaMartinsJD"}></Button> 
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
