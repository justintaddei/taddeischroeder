import Icon from '@/components/Icon'
import React, { PropsWithChildren } from 'react'
import classes from '@/styles/components/inputs/ButtonScroll.module.scss'
import useScrollTo from '@/hooks/useScrollTo'

interface Props {
  className: string
}

const ButtonScroll = ({ children, className }: PropsWithChildren<Props>) => {
  const scrollTo = useScrollTo()
  return (
    <button
      onClick={(e) => scrollTo(e.target as Element)}
      className={`${classes.button} ${className}`}
    >
      <div className={classes.circle}>
        <Icon name="arrow-down" />
      </div>
      <span>{children}</span>
    </button>
  )
}

export default ButtonScroll
