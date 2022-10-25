import AudioElement from '../components/AudioElement'
import { Button } from '@mui/material'

type keyProps = {
  name: string
  sound: string
  handleShowSound: (params: any) => any
  isQuiet: boolean
  url: string
  volume: number
}
export default function Key({ name, sound, url, handleShowSound, isQuiet, volume }: keyProps) {
  let playSound = (e: any) => {
    let key = ''
    handleShowSound('')
    if (e.type === 'click') {
      key = e.target.innerText
    }
    if (e.type === 'keydown') {
      key = e.key.toUpperCase()
    }
    let playingElement = document.getElementById(key) as HTMLAudioElement
    let link = playingElement.getAttribute('src') as string
    const sound = new Audio(link)
    sound.volume = volume / 100
    sound.play()
    handleShowSound(name)
  }

  return (
    <Button
      className="drum-pad"
      id={sound}
      onClick={isQuiet ? () => {} : playSound}
      onKeyDown={isQuiet ? () => {} : playSound}
      variant="contained"
      color="warning"
    >
      <AudioElement name={name} url={url} />
      {name}
    </Button>
  )
}
