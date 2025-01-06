import React from 'react'

function Button({
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-blue-500',
    border = 'border-none',
    className = '',
    ...props
}) {
  return (
    <div>
        <button className='{`${type} ${textColor} ${bgColor} ${border} ${className}`}' {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button
