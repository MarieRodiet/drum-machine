import AudioElement from '../components/AudioElement'
import { Button } from '@mui/material'

type keyProps = {
  name: string
  sound: string
  handleShowSound: (params: any) => any
  isQuiet: boolean
  url: string
}
export default function Key({ name, sound, url, handleShowSound, isQuiet }: keyProps) {
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

    // let playingPromise = playingElement.play()
    // if (playingPromise !== undefined) {
    //   playingPromise
    //     .then((_) => {
    //       console.log('playing')
    //       handleShowSound(sound)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       handleShowSound('')
    //     })
    // }

    fetch(url, { mode: 'no-cors' })
      .then((response) => response.blob())
      .then((blob) => {
        playingElement.srcObject = blob
        return playingElement.play()
      })
      .then((_) => {
        // Video playback started ;)
      })
      .catch((e) => {
        // Video playback failed ;(
      })
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
      <AudioElement name={name} url={sound} />
      {name}
    </Button>
  )
}
