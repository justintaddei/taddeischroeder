import Button from '@/components/inputs/Button'
import ButtonScroll from '@/components/inputs/ButtonScroll'
import Layout from '@/components/Layout'
import { useCycle } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import classes from '../styles/Home.module.scss'

export default function Home() {
  const [activeSentence, cycleActiveSentence] = useCycle('strong', 'proud', 'unified')

  useEffect(() => {
    const token = setInterval(cycleActiveSentence, 3000)

    return () => clearInterval(token)
  }, [])

  return (
    <Layout
      title="Taddei / Schroeder for ASCSU 2021 | Official Site"
      description="A space where all rams can come together, an area where our school pride is heightened every day, a location where rams with varying backgrounds and perspectives can mingle with no hostility. The space where everybody is proud to be a CSU ram."
    >
      <main>
        <section className={classes.sectionOne}>
          <div className={classes.backgroundImages}>
            <img
              className={activeSentence === 'strong' ? classes.active : ''}
              src="/images/home/strong.jpg"
              alt=""
            />
            <img
              className={activeSentence === 'proud' ? classes.active : ''}
              src="/images/home/proud.jpg"
              alt=""
            />
            <img
              className={activeSentence === 'unified' ? classes.active : ''}
              src="/images/home/unified.jpg"
              alt=""
            />
          </div>
          <div className={classes.overlay}></div>
          <header className={classes.header}>
            <h1 className={classes.tagline}>
              <img
                className={`${classes.strong} ${activeSentence === 'strong' ? classes.active : ''}`}
                src="/images/forever-strong.svg"
                alt="Forever strong"
              />
              <img
                className={`${classes.proud} ${activeSentence === 'proud' ? classes.active : ''}`}
                src="/images/forever-proud.svg"
                alt="Forever proud"
              />
              <img
                className={`${classes.unified} ${
                  activeSentence === 'unified' ? classes.active : ''
                }`}
                src="/images/forever-unified.svg"
                alt="Forever unified"
              />
            </h1>
            <div className={classes.buttons}>
              <Button href="/mission-statement">Mission Statement</Button>
              <Button href="/why-us" icon="arrow-right">
                Why Us
              </Button>
            </div>
          </header>
          <ButtonScroll className={classes.scrollButton}>Brief Introduction</ButtonScroll>
        </section>
        <section className={classes.sectionTwo}>
          <div className={classes.content}>
            <h2>
              We envision a <span className="text-red">forever campus</span>
              <br />
              for all <span className="text-blue">past</span>,{' '}
              <span className="text-blue">present</span>, and{' '}
              <span className="text-blue">future</span> rams.
            </h2>
            <p>
              A space where <span className="text-blue">all rams</span> can come together, an area
              where our school pride is heightened every day, a location where rams with varying
              backgrounds and perspectives can mingle with no hostility. The space where everybody
              is <span className="text-blue">proud to be a CSU ram.</span>
            </p>
            <Button href="/why-us" look="blue" icon="arrow-right">
              Learn More
            </Button>
          </div>
          <div className={classes.decor}>
            <div className={classes.horizontal}>
              <Image width="448" height="300" src="/images/home/horizontal.jpg" alt="" />
            </div>
            <div className={classes.emptyBox}></div>
            <div className={classes.vertical}>
              <Image width="377.3" height="360" src="/images/home/vertical.jpg" alt="" />
            </div>
          </div>
          <div className={classes.links}>
            <Button href="/about-lys" icon="chevron-right">
              About Lys Taddei
            </Button>
            <Button href="/about-weston" icon="chevron-right">
              About Weston Schroeder
            </Button>
            {
              <Button href="/contact" icon="chevron-right">
                Connect With Us
              </Button>
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}
