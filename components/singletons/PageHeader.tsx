import classes from '@/styles/components/singletons/PageHeader.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import useWave from 'use-wave'
import DropdownIcon from '../../public/icons/chevron-down.svg'
import MenuIcon from '../../public/icons/menu.svg'
import CloseIcon from '../../public/icons/x.svg'
import NewTab from '../../public/icons/arrow-up-right.svg'

interface NavButtonProps {
  href: string
}

const NavButton = ({ href, children }: PropsWithChildren<NavButtonProps>) => {
  const { route } = useRouter()
  const wave = useWave()
  const currentPage = `/${route.split('/')[1]}`

  const isActive = currentPage === href

  return (
    <Link href={href}>
      <a
        ref={wave}
        target={href.startsWith('http') ? '_blank' : '_self'}
        className={`${classes.navButton} ${isActive ? classes.active : ''}`}
      >
        {children}
      </a>
    </Link>
  )
}

const PageHeader = () => {
  const wave = useWave()

  const toggleButton = React.createRef<HTMLInputElement>()

  const closeNav = () => {
    if (toggleButton.current) toggleButton.current.checked = false
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <img className={classes.logo} src="/logo.svg" alt="Taddei Schroeder Logo" />
      </Link>
      <input
        ref={toggleButton}
        hidden
        id="navToggle"
        className={classes.navToggleCheckbox}
        type="checkbox"
      />
      <label htmlFor="navToggle" className={classes.navToggle}>
        <MenuIcon />
        <CloseIcon />
      </label>
      <nav onClick={() => closeNav()}>
        <ul>
          <li>
            <NavButton href="/">Home</NavButton>
          </li>
          <li tabIndex={-1}>
            <span ref={wave} className={`${classes.navButton} ${classes.aboutDropdownToggle}`}>
              About <DropdownIcon />
            </span>
            <ul className={classes.aboutDropdown}>
              <li>
                <NavButton href="/why-us">Why Us?</NavButton>
              </li>
              <li>
                <NavButton href="/mission-statement">Mission Statement</NavButton>
              </li>
              <li>
                <NavButton href="/about-lys">About Lys Taddei</NavButton>
              </li>
              <li>
                <NavButton href="/about-weston">About Weston Schroeder</NavButton>
              </li>
              <li>
                <NavButton href="https://collegian.com/2021/02/category-news-ascsu-campaign-lys-taddei-and-weston-schroeder/">
                  Collegian Publication <NewTab />
                </NavButton>
              </li>
            </ul>
          </li>
          {/* <li>
            <NavButton href="/events">Events</NavButton>
          </li> */}
          <li>
            <NavButton href="/contact">Connect With Us</NavButton>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PageHeader
