import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';




export default function Page() {
  return(
    <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className=" bg-white lg:col-span-5 lg:h-full xl:col-span-6">
      <div className="lg:w-3/3 absolute top-24 left-10">
          <Image src={'/13818814_5341775.jpg'} width={1000} height={900} alt='corporateimg' />
      </div>

      
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <SignIn/>
    </main>
  </div>
</section>
  )
}