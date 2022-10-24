type audioElementProps = {
  name: string
  url: string
}
export default function AudioElement({ name, url }: audioElementProps) {
  return (
    <audio src={url} preload="none" className="clip" id={name} muted>
      {name}
    </audio>
  )
}
