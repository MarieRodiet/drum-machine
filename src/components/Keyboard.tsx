import Key from './Key'
import { Box } from '@mui/system'

interface KeysArray {
  name: string
  sound: string
  url: string
}

interface KeyboardProps {
  handleShowSound: (params: string) => void
  isQuiet: boolean
  keysToPlay: KeysArray[]
}
export default function Keyboard({ handleShowSound, isQuiet, keysToPlay }: KeyboardProps) {
  return (
    <Box
      sx={{
        width: 230,
        height: 150,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-around',
      }}
    >
      {keysToPlay.map((el) => (
        <Key
          name={el.name}
          sound={el.sound}
          url={el.url}
          key={el.name}
          handleShowSound={handleShowSound}
          isQuiet={isQuiet}
        />
      ))}
    </Box>
  )
}
