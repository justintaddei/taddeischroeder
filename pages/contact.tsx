import Button from '@/components/inputs/Button'
import Input from '@/components/inputs/Input'
import Layout from '@/components/Layout'
import Send from '@/public/icons/send.svg'
import React, { FormEvent, useState } from 'react'
import btnClasses from '../styles/components/inputs/Button.module.scss'
import classes from '../styles/Contact.module.scss'

export default function Home() {
  const [formSubmissionResult, setFormSubmissionResult] = useState({
    success: false,
    message: '',
    name: ''
  })

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    if (!form.checkValidity()) return

    const formData = new FormData(form)

    const jsonFormData = Object.fromEntries(formData) as { [key: string]: string }
    const res = await fetch('/api/email', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(jsonFormData)
    }).then((r) => r.json())

    setFormSubmissionResult({ ...res, name: jsonFormData.name.split(' ')[0] })
  }

  return (
    <Layout title="Connect With Us | Taddei / Schroeder for ASCSU 2021" description="">
      <main className={classes.main}>
        <h1 className={classes.heading}>
          <span className="text-red">Connect</span> With Us
        </h1>

        <form noValidate onSubmit={submit} className={classes.form}>
          <Input className={classes.input} label="Name" name="name" />
          <Input className={classes.input} label="Email" name="email" type="email" />
          <Input className={classes.input} label="Message" name="message" type="textarea" />
          <button type="submit" className={`${btnClasses.button} ${btnClasses.blue}`}>
            Send <Send />
          </button>
        </form>
        <div className={classes.divider}></div>
        <div className={classes.platforms}>
          <h3>Follow us on Instagram</h3>
          <Button newWindow href="https://instagram.com/taddei_schroeder2021" look="blue">
            @taddei_schroeder2021
          </Button>
          <h3>Reach out via email</h3>
          <Button href="mailto:team@taddeischroeder.com" look="blue">
            team@taddeischroeder.com
          </Button>
        </div>
      </main>
    </Layout>
  )
}
