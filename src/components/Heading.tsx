import type { ReactNode } from 'react'

type HeadingProps = {
  as: 'h2' | 'h3'
  children: ReactNode
}

export default function Heading({ as, children }: HeadingProps) {
  const Tag = as

  if (as === 'h2') {
    return (
      <Tag className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 font-bold mb-2 md:mb-2 lg:mb-4 text-left mx-4 md:mx-6 lg:mx-8">
        {children}
      </Tag>
    )
  }

  return (
    <Tag className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-6 mb-4 text-left mx-4 md:mx-6 lg:mx-8 pl-2 md:pl-3">
      {children}
    </Tag>
  )
}


