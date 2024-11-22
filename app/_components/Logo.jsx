import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/dashboard'} className='flex items-center gap-2'>
        <Image src={'/TASK.png'} alt='logo'
        width={220} height={150} />
        
    </Link>
  )
}

export default Logo