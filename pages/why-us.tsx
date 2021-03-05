import Icon from '@/components/Icon'
import Button from '@/components/inputs/Button'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import classes from '../styles/WhyUs.module.scss'

export default function Home() {
  return (
    <Layout
      title="Why Us? | Taddei / Schroeder for ASCSU 2021"
      description="Lys Taddei and Weston Schroeder envision a forever campus. A space where past, present, and future rams can come together."
    >
      <main className={classes.main}>
        <section className={classes.sectionOne}>
          <div className={classes.text}>
            <h1>
              <span className="text-red">Why</span> We're Running
            </h1>
            <div className={classes.cover}>
              <Image
                priority
                src="/images/lys-weston.jpg"
                width={800}
                height={450}
                layout="responsive"
                alt=""
              />
            </div>
            <p>
              Lys Taddei and Weston Schroeder envision a{' '}
              <span className="text-blue">forever campus</span>. A space where past, present, and
              future rams can come together, an area where our{' '}
              <span className="text-blue">school pride</span> is heightened every day, a location
              where rams with varying backgrounds and perspectives can mingle with no hostility. The
              space where <span className="text-blue">everybody</span> is proud to be a CSU ram.
            </p>
            <p>
              No matter what state you come from, what religion you practice, or whomever you
              identify as, CSU is your forever campus. And it is time we{' '}
              <span className="text-blue">come together</span> to be forever strong, proud, and
              unified.
            </p>
          </div>
          {/* 
          <div className={classes.images}></div> */}
        </section>
        <section className={classes.sectionTwo}>
          <h2>
            What We’ll <span className="text-red">Do</span>
          </h2>
          <ul>
            <li>
              <h3>
                <Icon name="chevron-right" />{' '}
                <span>
                  Engage with <span className="text-blue">students</span> and their work to address
                  their <span className="text-red">Mental Health</span>.
                </span>
              </h3>
              <ul>
                <li>
                  <Icon name="corner-down-right" />{' '}
                  <span>
                    Work with fellow rams on developing and{' '}
                    <span className="text-blue">campus-wide</span> mental health app/program.
                  </span>
                </li>
                <li>
                  <Icon name="corner-down-right" />
                  Share stories on how people have{' '}
                  <span className="text-blue">kept their mental health up</span>, along with stories
                  of how we dealt with life when our mental health was down.
                </li>
              </ul>
            </li>
            <li>
              <h3>
                <Icon name="chevron-right" />{' '}
                <span>
                  Address the campus’s <span className="text-red">environmentally</span> friendly
                  opportunities.
                </span>
              </h3>
              <ul>
                <li>
                  <span>
                    <Icon name="corner-down-right" /> What has happened
                  </span>
                  <ul>
                    <li>
                      <Icon name="corner-down-right" />
                      After Thanksgiving break, the school chose to{' '}
                      <span className="text-blue">illuminate</span> the second floor lights in the
                      library, when it was considered <span className="text-blue">closed</span> for
                      studying.
                    </li>
                  </ul>
                </li>
                <li>
                  <span>
                    <Icon name="corner-down-right" /> What can happen
                  </span>
                  <ul>
                    <li>
                      <Icon name="corner-down-right" />
                      More water fountains <span className="text-blue">on campus</span> and water
                      bottle filling fountains.
                    </li>
                    <li>
                      <Icon name="corner-down-right" /> More organized trash cans.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <div className={classes.links}>
          <Button href="/about-lys" icon="chevron-right">
            About Lys Taddei
          </Button>
          <Button href="/about-weston" icon="chevron-right">
            About Weston Schroeder
          </Button>
          <Button href="/mission-statement" icon="chevron-right">
            Our Mission Statement
          </Button>
          <Button
            newWindow
            href="https://collegian.com/2021/02/category-news-ascsu-campaign-lys-taddei-and-weston-schroeder/"
            icon="arrow-up-right"
          >
            Collegian Publication
          </Button>
        </div>
      </main>
    </Layout>
  )
}
