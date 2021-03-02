import classes from '@/styles/components/inputs/Input.module.scss'
import React, { FormEvent, useState } from 'react'
import useWave from 'use-wave'

interface Props {
  name: string
  label: string
  type?: 'text' | 'email' | 'textarea'

  className?: string
}

const Input = ({ name, label, type = 'text', className }: Props) => {
  const wave = useWave()

  const [error, setError] = useState('')

  const handleValidity = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target as HTMLInputElement | HTMLTextAreaElement

    if (e.type === 'change' && error === '') return

    setError(input.validationMessage)
  }

  const InputComponent = type === 'textarea' ? 'textarea' : 'input'

  return (
    <label
      ref={wave}
      className={`${classes.wrapper} ${
        type === 'textarea' ? classes.textarea : classes.input
      } ${className} ${error && classes.invalid}`}
    >
      <InputComponent
        onChange={handleValidity}
        onInvalid={handleValidity}
        className={`${type === 'textarea' ? classes.textarea : classes.input} ${
          error && classes.invalid
        }`}
        name={name}
        type={type}
        required
      />
      <span className={`${classes.label} text-style-sub-text`}>{label}</span>
      {error && (
        <span aria-live="assertive" className={`text-style-sub-text ${classes.errorMessage ?? ''}`}>
          {error}
        </span>
      )}
    </label>
  )
}

export default Input
