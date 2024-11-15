import React, { FC } from 'react'

export interface Props {
  when: boolean
  fallback?: React.ReactNode
  children: React.ReactNode
  whenNot?: React.ReactNode
}

export const Show: FC<Props> = ({ when, children, fallback, whenNot }) => {
  return <>{when ? children : whenNot || fallback}</>
}

export default Show
