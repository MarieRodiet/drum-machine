import React from 'react'
import './styles/App.css'
import Keyboard from './components/Keyboard'
import ControlPanel from './components/ControlPanel'
import Container from '@mui/material/Container'
import { useState } from 'react'
import { firstKeys, secondKeys } from './audio.js'

function App() {
  const [sound, setSound] = useState('')
  const [isQuiet, setIsQuiet] = useState(true)
  const [isFirstKeys, setFirstKeys] = useState(true)

  let handleShowSound = (name: string) => {
    setSound(name)
    console.log(name)
  }

  let handleSwitch = () => {
    setIsQuiet(!isQuiet)
  }

  let handleKeysChange = () => {
    setFirstKeys(!isFirstKeys)
  }

  return (
    <Container
      id="drum-machine"
      sx={{
        bgcolor: '#fefae0',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Keyboard
        handleShowSound={handleShowSound}
        isQuiet={isQuiet}
        keysToPlay={isFirstKeys ? firstKeys : secondKeys}
      />
      <ControlPanel
        sound={sound}
        handleSwitch={handleSwitch}
        isQuiet={isQuiet}
        handleKeysChange={handleKeysChange}
      />
    </Container>
  )
}

export default App
