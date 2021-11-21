import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <div>Esta es la página index del admin del usuario</div>
            <Link href= "/">
            <a>Ir al home</a>
            </Link>
        </div>
    )
}

export default index
