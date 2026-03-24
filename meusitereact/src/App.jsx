import gustavo from './assets/gustavo.png'
import eta from './assets/eta.png'
import Button from '../src/Components/Button.jsx'
import { useState } from "react";

function App() {
  const [Balanca, SetBalanca] = useState(false);

  return (
    <div
      className="min-h-screen border-2 w-full bg-cover bg-center text-center px-4"
      style={{ backgroundImage: `url(${eta})` }}
    >
      <div className="flex flex-col items-center gap-10 mt-10 text-4xl md:text-5xl font-semibold">

        {/* Nome */}
        <span
          className={`${Balanca ? "opacity-0" : ""} transition-all duration-700`}
          style={{ fontFamily: 'Playfair Display' }}
        >
          Gustavo Lima Martins
        </span>

        {/* Imagem */}
        <div>
          <img
            src={gustavo}
            alt="gustavo"
            onClick={() => SetBalanca(!Balanca)}
            className={`
              mx-auto
              w-52 md:w-72 lg:w-80
              rounded-full border-double border-[10px] bg-gray-700
              hover:border-gray-300
              hover:-translate-y-2
              hover:scale-105
              hover:cursor-pointer
              ${Balanca ? "animate-bounce shadow-purple-500" : ""}
              shadow-2xl
              transition-all duration-700
            `}
          />
        </div>

        {/* Título */}
        <h1
          className={`${Balanca ? "opacity-0" : ""} transition-all duration-700 text-4xl md:text-6xl`}
          style={{ fontFamily: 'Playfair Display' }}
        >
          Meus Links
        </h1>

        {/* BOTÕES */}
        <div className="w-full max-w-6xl">

          {/* MOBILE */}
          <div className="flex flex-col gap-6 md:hidden items-center">
            <div className="w-72">
              <Button corpadrao="bg-amber-500" texto="Linkedin" cor="hover:bg-blue-400" link="https://www.linkedin.com/in/gustavo-lima-martins-9554143ab/" />
            </div>
            <div className="w-72">
              <Button corpadrao="bg-amber-500" texto="Curriculo" cor="hover:bg-amber-500" link="https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view" />
            </div>
            <div className="w-72">
              <Button corpadrao="bg-orange-600" texto="Portifólio" cor="hover:bg-orange-600" link="https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view" />
            </div>
            <div className="w-72">
              <Button corpadrao="bg-gray-400" texto="Git-Hub" cor="hover:bg-gray-400" link="https://github.com/GustavoLimaMartinsJD" />
            </div>
            <div className="w-72">
              <Button corpadrao="bg-green-700" texto="Game" cor="hover:bg-green-700" link="https://drive.google.com/drive/folders/1EFxVbd8FaIV30_cgdAxBufEmUV9H_6lM" />
            </div>
          </div>

          {/* DESKTOP (igual ao seu) */}
          <div className="hidden md:flex justify-center gap-10">

            <div className="w-80 -my-15">
              <Button corpadrao="bg-gray-700" texto="Linkedin" cor="hover:bg-blue-400" link="https://www.linkedin.com/in/gustavo-lima-martins-9554143ab/" />
            </div>

            <div className="w-80 mt-20">
              <Button corpadrao="bg-gray-700" texto="Curriculo" cor="hover:bg-amber-500" link="https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view" />
            </div>

            <div className="w-80 mt-35">
              <Button corpadrao="bg-gray-700" texto="Portifólio" cor="hover:bg-orange-600" link="https://drive.google.com/file/d/1qBs8OdpEF7_RdtKJ3L-edfoHXwvKHK6W/view" />
            </div>

            <div className="w-80 mt-20">
              <Button corpadrao="bg-gray-700" texto="Git-Hub" cor="hover:bg-gray-400" link="https://github.com/GustavoLimaMartinsJD" />
            </div>

            <div className="w-80 -my-15">
              <Button corpadrao="bg-gray-700" texto="Game" cor="hover:bg-green-700" link="https://drive.google.com/drive/folders/1EFxVbd8FaIV30_cgdAxBufEmUV9H_6lM" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;