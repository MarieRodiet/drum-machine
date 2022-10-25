import React from 'react'
import './styles/App.css'
import Keyboard from './components/Keyboard'
import ControlPanel from './components/ControlPanel'
import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import { firstKeys, secondKeys } from './audio.js'

function App() {
  const [sound, setSound] = useState('')
  const [isQuiet, setIsQuiet] = useState(true)
  const [isFirstKeys, setFirstKeys] = useState(true)
  const [volume, setVolume] = useState(20)

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

  let handleChangeVolume = (value: number) => {
    setVolume(value)
  }

  return (
    <Container
      id="drum-machine"
      sx={{
        bgcolor: '#fefae0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
      }}
    >
      <Typography color="primary" variant="h4">
        Drum Machine
      </Typography>
      <Keyboard
        volume={volume}
        handleShowSound={handleShowSound}
        isQuiet={isQuiet}
        keysToPlay={isFirstKeys ? firstKeys : secondKeys}
      />
      <ControlPanel
        sound={sound}
        handleSwitch={handleSwitch}
        isQuiet={isQuiet}
        handleKeysChange={handleKeysChange}
        handleChangeVolume={handleChangeVolume}
      />
    </Container>
  )
}

export default App
