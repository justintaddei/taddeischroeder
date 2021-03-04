import Button from '@/components/inputs/Button'
import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import classes from '../styles/AboutWeston.module.scss'

export default function Home() {
  return (
    <Layout
      title="About Weston Schroeder | Taddei / Schroeder for ASCSU 2021"
      description="Aloha, ‘O Weston Schroeder ko’u inoa. I am currently a sophomore, political science student, and I am running me ko’u hoa aloha Lys Taddei for the executive office of ASCSU."
    >
      <main className={classes.main}>
        <h1 className={classes.heading}>
          About <span className="text-red">Weston Schroeder</span>
        </h1>

        <div className={classes.whoIAm}>
          <h2>Who I am</h2>
          <p>
            <span className={classes.photo}>
              <span className={classes.decor}></span>

              <Image width={400} height={494} src="/images/about-weston.jpg" alt="" />
            </span>
            Aloha, ‘O Weston Schroeder ko’u inoa. I am currently a sophomore, political science
            student, and I am running me ko’u hoa aloha Lys Taddei for the executive office of
            ASCSU. Throughout my life, I have always had compassion for people. From taking the time
            to hear somebody out or actively serving the community, I make people a priority. From
            my time in mission trips in Texas, South Dakota, New Mexico, and Guatemala, our church
            always recommended that during the work day, we take time to talk to those we are
            serving. Hearing stories from different families, all from different walks of life, has
            shaped how I interact with people. For starters, I don’t always have the answers.
            However, when I work with people, we create the solution together. Some fun facts about
            me, Hip-Hop & Jazz are my top genres of music, I like winter more than summer, and the
            best piece of advice that I’ve received is “Make your bed everyday, because even if you
            had a bad day, you get to say that you accomplished something today”. I believe that
            personal fulfillment is crucial before you can fulfill others and making my bed gives me
            that small spark each day!
          </p>
        </div>
        <div className={classes.whyIChoseCSU}>
          <h2>Why I Chose CSU</h2>
          <p>
            When I was in high school, I swore to myself that I would go to college out-of-state.
            For starters, it was because I thought all Colorado schools were the same, and it would
            just be “high-school all over again”. As I toured other schools, I couldn’t find myself
            to be in the right place even when I toured the University of Hawaii at Manoa. Honestly,
            the day I chose CSU was when I visited my brother when he lived in Corbett. Throughout
            the family weekend in October 2017, I was plopped into Fort Collins. It was the
            homecoming football game, and my brother had some preoccupations so he left me with his
            dorm mates. Even without my main support, I was welcomed in with open arms. I felt like
            a ram, even at 16 years old! That night I chose CSU because the community linked arms
            with me, and gave me a space to be me!
          </p>
          <div className={classes.actions}>
            <Button look="blue" href="/about-lys" icon="chevron-right">
              About Lys Taddei
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
