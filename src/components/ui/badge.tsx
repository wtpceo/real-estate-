import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-accent-orange/10 text-accent-orange border-accent-orange/20",
      secondary: "bg-gray-100 text-gray-700 border-gray-200",
      success: "bg-success-light text-success-green border-success-green/20",
      warning: "bg-yellow-50 text-yellow-700 border-yellow-200"
    }

    return (
      <div
        ref={ref}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
