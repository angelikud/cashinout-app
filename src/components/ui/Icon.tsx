interface IconProps {
  name: string
  className?: string
  size?: number
}

export default function Icon({ name, className = '', size }: IconProps) {
  return (
    <span
      className={`material-icons-outlined ${className}`}
      style={size ? { fontSize: size } : undefined}
    >
      {name}
    </span>
  )
}
