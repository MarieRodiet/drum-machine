import { Box } from '@mui/system'
import { FormControlLabel, Switch, Slider, Stack, Typography } from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'

type controlPanelProps = {
  sound: string
  handleSwitch: (params: boolean) => void
  isQuiet: boolean
  handleKeysChange: (params: boolean) => void
  handleChangeVolume: (params: number) => void
}
export default function ControlPanel({
  sound,
  handleSwitch,
  isQuiet,
  handleKeysChange,
  handleChangeVolume,
}: controlPanelProps) {
  const handleValueChange = (e: any) => {
    handleChangeVolume(e.target.value)
  }
  return (
    <Box
      id="display"
      sx={{
        width: 330,
        height: 200,
        bgcolor: '#faedcd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        p: 2,
        m: 2,
      }}
    >
      <FormControlLabel
        value="start"
        control={<Switch color="warning" onChange={(e) => handleSwitch(e.target.checked)} />}
        label="ON/OFF"
        labelPlacement="top"
      />
      <Stack spacing={2} direction="row" sx={{ m: 1, width: '100%' }} alignItems="center">
        <VolumeDown />
        {isQuiet ? (
          <Slider disabled aria-label="Disabled slider" size="small" min={10} max={100} step={10} />
        ) : (
          <Slider
            key="volume"
            aria-label="Volume"
            min={0}
            max={100}
            step={10}
            onChange={handleValueChange}
            size="small"
            valueLabelDisplay="auto"
          />
        )}
        <VolumeUp />
      </Stack>
      {isQuiet ? (
        ''
      ) : (
        <Typography color="primary" fontSize="14" paragraph={true}>
          {sound}
        </Typography>
      )}
      <FormControlLabel
        value="start"
        control={<Switch color="success" onChange={(e) => handleKeysChange(e.target.checked)} />}
        label="Change Sounds"
        labelPlacement="top"
      />
    </Box>
  )
}
