import React from 'react'

type Props = {
  title: string
  className?: string
  children?: JSX.Element
}

export const Sections = (props: Props) => {
  const { title, className, children } = props
  return (
    <div className={className}>
      <ul>
        <p className="mb-3">{title}</p>
        {children}
      </ul>
    </div>
  )
}
