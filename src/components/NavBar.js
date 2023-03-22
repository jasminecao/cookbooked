import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <Head>
        <title>CookBooked</title>
        <meta
          name="description"
          content="An interactive website to follow recipes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <nav
        className="flex h-16 bg-bg_white px-9"
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05);' }}
      >
        <Link href="/" className="my-auto">
          <div className="flex">
            <Image
              src="/logo.svg"
              width={36}
              height={36}
              alt="CookBooked chefs hat logo"
            />
            <span className="font-medium align-middle mx-3">CookBooked</span>
          </div>
        </Link>
      </nav>
    </>
  )
}

export default NavBar
