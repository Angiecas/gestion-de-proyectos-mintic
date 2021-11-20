import type { NextPage } from 'next'
import React from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className= 'bg-green-500'>
          <p>Página del Index principal</p>
      <Link href= '/admin/usuario'>
        <a className= 'cursor-pointer'> Ir para usuarios </a>
      </Link>
    </div>
  )
}

export default Home
