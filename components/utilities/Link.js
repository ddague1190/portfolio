/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import { Router, useRouter } from "next/router"

const CustomLink = ({ href, ...rest }) => {
  const router = useRouter
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  const isCurrRoute = href == router.route

  if (isInternalLink) {
    return (
      <Link  href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
