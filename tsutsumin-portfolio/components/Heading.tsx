import type { ReactNode } from 'react'

type HeadingProps = {
  as: 'h2' | 'h3'
  children: ReactNode
}

export default function Heading({ as, children }: HeadingProps) {
  const Tag = as

  if (as === 'h2') {
    return (
      <Tag className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-6 lg:px-8">
        {children}
      </Tag>
    )
  }

  return (
    <Tag className="text-base sm:text-lg lg:text-xl font-semibold mt-6 sm:mt-8 mb-4 sm:mb-5 text-white/90 px-4 sm:px-6 lg:px-8 border-l-4 border-sky-400/70 ml-2 sm:ml-4">
      {children}
    </Tag>
  )
}


