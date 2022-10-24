type audioElementProps = {
  name: string
  sound: string
}
export default function AudioElement({ name, sound }: audioElementProps) {
  return (
    <audio src={sound} className="clip" id={name}>
      {name}
    </audio>
  )
}
