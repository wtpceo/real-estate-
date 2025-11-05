import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-accent-orange text-white shadow-lg hover:bg-accent-orange-dark hover:shadow-2xl hover:scale-105 active:scale-95",
      secondary: "bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-navy-900 hover:border-white",
      outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
      ghost: "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
    }

    const sizes = {
      default: "h-12 px-8 py-3 text-base",
      sm: "h-10 px-6 py-2 text-sm",
      lg: "h-14 px-12 py-4 text-lg",
      icon: "h-10 w-10"
    }

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
