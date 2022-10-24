import { Box } from '@mui/system'

type controlPanelProps = {
  sound: string
}
export default function ControlPanel({ sound }: controlPanelProps) {
  /**User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip
   *  is displayed as the inner text of the #display element (each string must be unique). */
  return (
    <Box id="display" sx={{ width: 230, bgcolor: '#faedcd' }}>
      Control Panel:
      {sound}
    </Box>
  )
}
