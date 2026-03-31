import './ShinyButton.css'

export function ShinyButton({ children, onClick, className = '', as: Tag = 'button', href, ...props }) {
  return (
    <Tag
      className={`shiny-cta ${className}`}
      onClick={onClick}
      href={href}
      {...props}
    >
      <span>{children}</span>
    </Tag>
  )
}
