import { useState } from 'react'

function App() {

  const [ hexColor, setHexColor ] = useState(() => getRandomHexColorConcise())
  const [ rgbColor, setRgbColor ] = useState(() => getRandomRgbColor())
  const [ colorType, setColorType ] = useState("HEX")

  function getRandomHexColorConcise() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  }

  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

  
    return `rgb(${r}, ${g}, ${b})`;
}

  const genRandomColor = () => colorType === "HEX" ? setHexColor(getRandomHexColorConcise()) : 
                        setRgbColor(getRandomRgbColor()) 
  

  const randomColor = {
    backgroundColor: colorType === "HEX" ? hexColor : rgbColor
  }
  
  return (
    <div style={randomColor} className='container'>
        <header>
          <button onClick={ () => setColorType(prev => prev === "RGB" ? "HEX" : prev)}>create HEX Color</button>
          <button onClick={ () => setColorType(prev => prev === "HEX" ? "RGB" : prev)}>create RGB color</button>
          <button onClick={genRandomColor}>Generate Random Color</button>
        </header>
        <main>
          <h1> { colorType === "HEX" ? "HEX Color" : "RGB COLOR" } </h1>
          <h1> { colorType === "HEX" ? hexColor : rgbColor } </h1>
        </main>
    </div>
  )
}

export default App