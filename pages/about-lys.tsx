import Button from '@/components/inputs/Button'
import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import classes from '../styles/AboutLys.module.scss'

export default function Home() {
  return (
    <Layout
      title="About Lys Taddei | Taddei / Schroeder for ASCSU 2021"
      description="My name is Lys Taddei. I am an Interior Architecture and Design student here at CSU. Ever since I was a little girl, I have been a passionate leader with the drive to make a positive difference, no matter how small."
    >
      <main className={classes.main}>
        <h1 className={classes.heading}>
          About <span className="text-red">Lys&nbsp;Taddei</span>
        </h1>

        <div className={classes.whoIAm}>
          <h2>Who I am</h2>
          <p>
            <span className={classes.photo}>
              <span className={classes.decor}></span>
              <Image priority width={400} height={582} src="/images/about-lys.jpg" alt="" />
            </span>
            My name is Lys Taddei. I am an Interior Architecture and Design student here at CSU.
            Ever since I was a little girl, I have been a{' '}
            <span className="text-blue">passionate leader</span> with the drive to make a positive
            difference, no matter how small. I have done this by{' '}
            <span className="text-blue">volunteering over 250 hours</span> at organizations such as
            the Redwood Food Bank in Sonoma County, CA, organizing a heart walk in honor of a boy
            who lost his battle to heart disease, and taking on the task of certification for 56
            fifth graders in need of an art teacher. These experiences helped me gain knowledge on
            how to proactively conduct oneself in varying situations. My involvement with
            organizations and businesses in the past has taught me how to have a great deal of{' '}
            <span className="text-blue">organization</span>,{' '}
            <span className="text-blue">respect</span>, <span className="text-blue">class</span>,{' '}
            <span className="text-blue">leadership</span>, and{' '}
            <span className="text-blue">professionalism</span>. Some fun facts about me, I have
            given a Ted Talk, I firmly believe that Trader Joe’s Scandinavian Swimmers are an elite
            snack, and the best piece of advice I have ever received is{' '}
            <span className="text-red">
              “Always do more than asked and ask for nothing in return. This is the true spirit of
              giving.”
            </span>
          </p>
        </div>
        <div className={classes.whyIChoseCSU}>
          <h2>Why I Chose CSU</h2>
          <p>
            I grew up out of state, but I have always loved Colorado. Colorado State University was
            my top pick, but I was trying to decide what major I would have and daydreaming about
            what college life would be like until the 2017 Tubbs Fire hit my hometown. This
            destructive fire burned over 36,000 acres, took 22 lives and 6,000 structures. The Tubbs
            fire took my highschool and most of my friends’ homes with it. I am a firm believer that
            with any tragedy or setback there is always a positive outlook that can be found. I
            found my diamond in the rough in the form of 3 family friends who had just lost their
            homes. They were homeless and they had to buy a house quickly. They had just bought one
            of the last houses on the market in Sonoma County and it was a serious fixer-upper. They
            asked me to help them make it liveable and I happily agreed. Before this, I had zero
            experience with construction, but I was ready to work and learn. Every weekend I spent
            my time helping this family by ripping out the carpeting, dismantling fireplaces,
            sanding window sills, and replacing baseboards. It was this experience that made me fall
            in love with Interior Architecture and Design. I quickly learned that CSU’s Interior
            Architecture and Design program is one of the best and getting my acceptance letter to
            be in the Architecture and Design program at Colorado State was one of the best days of
            my life. Every day, I am reminded how blessed I am to have the opportunity to be a CSU
            Ram.
          </p>
          <div className={classes.actions}>
            <Button look="blue" href="/about-weston" icon="chevron-right">
              About Weston Schroeder
            </Button>

            <div className={classes.links}>
              <Button href="/why-us" icon="chevron-right">
                Why Us
              </Button>
              <Button href="/contact" icon="chevron-right">
                Connect With Us
              </Button>
              <Button href="/mission-statement" icon="chevron-right">
                Our Mission Statement
              </Button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
