import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OnlyLogo() {
  return (
    <Link href={'/dashboard'} className='flex items-center gap-2'>
        <Image src={'/2.png'} alt='logo'
        width={40} height={40} />
        
    </Link>
  )
}

export default OnlyLogo