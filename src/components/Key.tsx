import AudioElement from '../components/AudioElement'
import { Button } from '@mui/material'

type keyProps = {
  name: string
  sound: string
  handleShowSound: (params: any) => any
}
export default function Key({ name, sound, handleShowSound }: keyProps) {
  let playSound = (e: any) => {
    handleShowSound('')
    if (e.type === 'click') {
      let clicked = document.getElementById(e.target.innerText) as HTMLAudioElement
      clicked?.play()
      handleShowSound(e.target.innerText)
    }
    if (e.type === 'keydown') {
      let clicked = document.getElementById(e.key.toUpperCase()) as HTMLAudioElement
      clicked?.play()
      handleShowSound(e.key.toUpperCase())
    }
  }
  return (
    <Button
      className="drum-pad"
      id={sound}
      onClick={playSound}
      onKeyDown={playSound}
      variant="contained"
      color="warning"
    >
      <AudioElement name={name} sound={sound} />
      {name}
    </Button>
  )
}
