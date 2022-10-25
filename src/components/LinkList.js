import React from 'react'; 
import Link from './Link';

function LinkList({links}) {
    const linkNodes = links.map((link) => {
        return (
            <Link key={link.id} url={link.url}>
            <a className="App-link" href={link.url}>
            {link.name}
            </a>
            </Link>
        )
    });

    return (
        <>
         <ul> 
           <li>
              {linkNodes}
           </li>
         </ul>
        </>
    )
}


export default LinkList;