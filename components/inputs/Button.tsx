import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import classes from '@/styles/components/inputs/Button.module.scss'
import Icon from '@/components/Icon'
import useWave from 'use-wave'

interface Props {
  href: string
  look?: 'white' | 'blue' | 'flat'
  icon?: string
  newWindow?: boolean
}

const Button = ({
  href,
  look = 'white',
  icon,
  newWindow = false,
  children
}: PropsWithChildren<Props>) => {
  const wave = useWave()
  return (
    <Link href={href}>
      {newWindow ? (
        <a
          ref={wave}
          target="_blank"
          rel="noopener"
          className={`${classes.button} ${classes[look]}`}
        >
          {children} {icon && <Icon name={icon} />}
        </a>
      ) : (
        <a ref={wave} className={`${classes.button} ${classes[look]}`}>
          {children} {icon && <Icon name={icon} />}
        </a>
      )}
    </Link>
  )
}

export default Button
