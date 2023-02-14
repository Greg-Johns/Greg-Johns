import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  // if (router.pathname === href) className = `${className} text-blue-500`
  if (router.pathname === href) className = `active`
  return (
    <Link href={href}>
      {React.cloneElement(children, { className })}
    </Link>
  )
}

export default ActiveLink
