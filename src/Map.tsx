import React, { FC } from 'react'

export interface MapProps<T extends { id: number }> {
  items: T[]
  RenderComponent: FC<Omit<T, 'id'>>
}

export const Map = <T extends { id: number }>({
  items,
  RenderComponent,
}: MapProps<T>) => {
  return (
    <>
      {items.map(({ id, ...rest }) => (
        <RenderComponent key={id} {...(rest as Omit<T, 'id'>)} />
      ))}
    </>
  )
}
