import React from "react"
import { ReactDOM } from "react"


export default function Header({name, lastName, profilimg}){

    const myMenu=[
        {name:'crée ton persona', id:'1'},
        {name:"soon", id:'2'},
        {name:"soon", id:'3'},
    ]

    const handleClick=event=>{
        event.preventDefault()

    }


    return (<>
    <div className="profilstart"><img src={profilimg}/>Bonjour {name} {lastName}</div>
        <ul>{myMenu.map(item=>(<a href={item.id} onClick={handleClick}><li key={item.id}>{item.name}</li></a>))}</ul>
    </>)
        }