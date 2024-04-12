import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

const HeaderC = ({ header }: { header: Header }) => {
  return (
    <nav>
      <Gutter>
        <Link href="/"></Link>
      </Gutter>
    </nav>
  )
}

export default HeaderC
