import React from 'react'
import './styles/App.css'
import Keyboard from './components/Keyboard'
import ControlPanel from './components/ControlPanel'
import Container from '@mui/material/Container'
import { useState } from 'react'

function App() {
  const [sound, setSound] = useState('no sound')
  let handleShowSound = (name: string) => {
    setSound(name)
    console.log(name)
  }
  return (
    <Container
      id="drum-machine"
      maxWidth="sm"
      sx={{
        bgcolor: '#fefae0',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Keyboard handleShowSound={handleShowSound} />
      <ControlPanel sound={sound} />
    </Container>
  )
}

export default App
