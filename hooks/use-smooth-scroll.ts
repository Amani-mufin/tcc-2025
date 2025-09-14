'use client'

import { MouseEvent } from 'react'

export function useSmoothScroll() {
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.split("#")[1]

    if (targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Adding a delay to allow the mobile menu to close before scrolling
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }, 300)
    }
  }

  return handleScrollTo
}
