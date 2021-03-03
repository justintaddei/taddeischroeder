import classes from '@/styles/components/singletons/PageFooter.module.scss'
import Link from 'next/link'

const PageFooter = () => {
  return (
    <footer className={classes.footer}>
      <p className="text-style-heading-3">
        Follow{' '}
        <Link href="https://www.instagram.com/explore/tags/forevercampus/">
          <a target="_blank" rel="noopener noreferrer" className={classes.noWrap}>
            #<span className="text-red">forever</span>
            <span className="text-blue">campus</span>
          </a>
        </Link>{' '}
        on Instagram
      </p>
    </footer>
  )
}

export default PageFooter
