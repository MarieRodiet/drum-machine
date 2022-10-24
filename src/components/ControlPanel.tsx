import { Box } from '@mui/system'
import { FormControlLabel, Switch, Slider, Stack, Typography } from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { useState } from 'react'

type controlPanelProps = {
  sound: string
  handleSwitch: (params: boolean) => void
  isQuiet: boolean
  handleKeysChange: (params: boolean) => void
}
export default function ControlPanel({
  sound,
  handleSwitch,
  isQuiet,
  handleKeysChange,
}: controlPanelProps) {
  const [value, setValue] = useState(20)

  const changeValue = (event: any, value: any) => {
    console.log(event.target)
    setValue(value)
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
        label="Power"
        labelPlacement="top"
      />
      <Stack spacing={2} direction="row" sx={{ m: 1, width: '100%' }} alignItems="center">
        <VolumeDown />
        {isQuiet ? (
          <Slider
            disabled
            aria-label="Disabled slider"
            value={value}
            size="small"
            min={10}
            max={100}
            step={10}
          />
        ) : (
          <Slider
            aria-label="Volume"
            min={10}
            max={100}
            step={10}
            value={value}
            onChange={changeValue}
            size="small"
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
