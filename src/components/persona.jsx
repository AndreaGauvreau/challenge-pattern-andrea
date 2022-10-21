import React from "react"
import { ReactDOM } from "react"
import FormPersona from "./formpersona"



export default function Monpersona({pname,plastname,page, hobbies,imageprofil,onImageChange, listofcompetences}){

    const imagePersona=()=>{
        onImageChange(`https://thispersondoesnotexist.com/image?${Math.random()*2}`)
     }
 

    return (
        <div className="mynewpersona">
            <div className="profil-generator"><img src={imageprofil} alt="persona" /> <button onClick={imagePersona}> Générer Image</button></div>
            <span>Prénom : <b>{pname}</b></span>
            <span>Nom : <b>{plastname}</b></span>
            <span>Age : <b>{page}ans</b></span>
            <span>Hobbies : <br></br><b>{hobbies}</b></span>
            <span>Competences : <br></br><b>{listofcompetences.map(comp=>(<li key={comp.compid}>{comp.compname}</li>))
}</b></span>
        </div>)
}