import Link from 'next/link';
import React from 'react';
import Head from 'next/head';


const index = () => {
    return (
        <div>
            <head>
                <title>Admin Usuario</title>
            </head>
            <div>Página del admin de usuario</div>
            <Link href= "/">
            <a>Ir al home</a>
            </Link>
        </div>
    );
};

export default index
