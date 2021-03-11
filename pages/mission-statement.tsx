import Button from '@/components/inputs/Button'
import Layout from '@/components/Layout'
import React from 'react'
import classes from '../styles/MissionStatement.module.scss'

export default function MissionStatement() {
  return (
    <Layout
      title="Mission Statement | Taddei / Schroeder for ASCSU 2021"
      description="The Taddei/Schroeder campaign is focusing on the resilience of the CSU community, and how we can continue to build CSU’s resilience through sustainability and smarter spending habits."
    >
      <main className={classes.main}>
        <h1>
          The <span className="text-red">Forever</span> Campus
        </h1>
        <h2>
          Forever <span className="text-red">Strong</span>
        </h2>
        <p>
          The Taddei/Schroeder campaign is focusing on the resilience of the CSU community, and how
          we can continue to build CSU’s resilience through sustainability and smarter spending
          habits.
        </p>
        <p>
          For example, the second and third floor of the library does not need to be lit over
          breaks, this would save us hundreds to thousands of dollars every year. With the money we
          would be saving from increased smart energy habits, we could allocate these funds to
          furthering sustainability at CSU as well as allotting a certain percentage of funds back
          to students. Students could see this improvement everyday through credits in Uber/Lyft,
          and RamCash. Continuing the relationship made with Uber and Lyft by the current
          administration would help students get around efficiently and safely, and allocating funds
          back to students via RamCash would act as an incentive for increased presence on campus.
          Increased presence on campus would help campus culture and continue to unify students
          after a hard year. Achieving these goals would only be beneficial. Two more goals the
          Taddei/Schroeder campaign will achieve is installing more water bottle filling stations on
          campus, which would reduce the amount of waste even further, and installing more water
          bottle stations would be an incentive to use reusable water bottles instead of disposable
          plastic ones. We would increase the number of trash cans around campus for the increased
          amount of PPE due to COVID-19. We would work with the city of Fort Collins as well as the
          administration to discover the tangibility of installing solar on top of campus buildings.
          Colorado is known for its beautiful and consistent sunshine which could help Colorado
          State University generate electricity not only for our campus, but also for the city of
          Fort Collins.
        </p>
        <h2>
          Forever <span className="text-red">Proud</span>
        </h2>
        <p>
          Being a CSU ram is a blessing. CSU is rich in opportunity, diversity, and social
          interaction, but not under lockdown. We will work on COVID-19 recovery and opening back up
          safely &amp; quickly so students can begin getting their well deserved college experience
          again. With vaccinations rolling out and with all the measures that are in place. We are
          now doing more damage to mental health than we are good to physical health by being shut
          down. Not only is the campus charging us full in person rates at a time when we are barely
          in person at all, we are also losing out on many of the things that actually make life
          worth living. Covid might get you, but you also may die in a car accident tomorrow. Life
          is not permanent and college is when you’re supposed to make some of the best memories of
          your life. It’s when you learn how to be a successful adult and make relationships that
          last, and we are all being deprived of that. We aim to create a unified space with all
          individuals coming in to fall 2021. We believe that if all students have the opportunity
          to learn from one another, we can build with one another. It’s been a year since we were
          sent home because of the COVID-19 pandemic, we have all been affected in one way or
          another. Student retention is on the decline and so is school spirit. This year has taken
          its toll, it's time we take this opportunity and link horns so we can build our forever
          campus.
        </p>
        <h2>
          Forever <span className="text-red">Unified</span>
        </h2>
        <p>
          We can all agree that it is not the infrastructure that makes the campus, it's the
          students. That being said, COVID has taken its toll on Ram Pride and student retention
          more than ever before. This fall, it is our time to come back stronger, prouder, and more
          unified than we’ve ever been. The Taddei/Schroeder campaign will focus on student
          retention rates and campus culture. Bringing Ram Pride back to CSU will make a world of
          difference, it's time for football games and tailgates. Students go to college for a
          degree but also for the “College Experience.” Lets spark RAM PRIDE, unify our students,
          and create a forever campus.
        </p>
        <div className={classes.links}>
          <Button href="/why-us" icon="chevron-right">
            Why Us
          </Button>
          <Button href="/about-lys" icon="chevron-right">
            About Lys Taddei
          </Button>
          <Button href="/about-weston" icon="chevron-right">
            About Weston Schroeder
          </Button>
        </div>
      </main>
    </Layout>
  )
}
