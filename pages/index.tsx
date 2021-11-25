import type { NextPage } from 'next'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


const Home: NextPage = () => {
  return (
    <div className= 'bg-green-500'>
      <Head>
        <title>Home | Angie</title>
      </Head>
          <p>Página del Index principal - prueba dev </p>
      <Link href= '/admin/usuario'>
        <a className= 'cursor-pointer'> Ir para usuarios </a>
      </Link>
      <div>
        <i className = 'fas fa-atom' />
        </div>
    </div>
  )
}

export default Home
