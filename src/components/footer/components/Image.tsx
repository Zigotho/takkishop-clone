import React from 'react'

type Props = {
  payments: string[]
}
export const Images = ({ payments }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 max-w-xs">
      {payments.map((payment) => (
        <img
          className="h-8 w-10"
          src={`./src/assets/images/payments/${payment}.png`}
        />
      ))}
    </div>
  )
}
