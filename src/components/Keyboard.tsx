import Key from './Key'
import { Box } from '@mui/system'

interface KeyboardProps {
  handleShowSound: (params: any) => any
}
export default function Keyboard({ handleShowSound }: KeyboardProps) {
  const keys = [
    {
      name: 'Q',
      sound: '/audio/Heater-1.mp3',
    },
    {
      name: 'W',
      sound: '/audio/Heater-2.mp3',
    },
    {
      name: 'E',
      sound: '/audio/Heater-3.mp3',
    },
    {
      name: 'A',
      sound: '/audio/Heater-4_1.mp3',
    },
    {
      name: 'S',
      sound: '/audio/Heater-6.mp3',
    },
    {
      name: 'D',
      sound: '/audio/Cev_H2.mp3',
    },
    {
      name: 'Z',
      sound: '/audio/Dsc_Oh.mp3',
    },
    {
      name: 'X',
      sound: '/audio/Kick_n_Hat.mp3',
    },
    {
      name: 'C',
      sound: '/audio/RP4_KICK_1.mp3',
    },
  ]

  return (
    <Box
      sx={{
        width: 230,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {keys.map((el) => (
        <Key name={el.name} sound={el.sound} key={el.name} handleShowSound={handleShowSound} />
      ))}
    </Box>
  )
}
