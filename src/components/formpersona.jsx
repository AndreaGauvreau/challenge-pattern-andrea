import React from "react"
import { ReactDOM } from "react"

export default function FormPersona({imageprofil,listofcompetences,onCompetencesChange,onNameChange,onLastNameChange,onAgeChange,onHobbiesChange, pname,hobbies,page,plastname,onImageChange}){
    
    
    const RandomAge=()=>{onAgeChange(Math.floor(Math.random()*80+6))}
    const Names=['Johnny','Pierre','Martin','Josephine','Lola','Marion','Andréa','John','Emma','Lucifer','Ronald','claire','Kevin','Mike','Sophie','kaido']
    const RandomNames=()=>{
        onNameChange(Names[Math.floor(Math.random()*Names.length)])
    }
    const RandomLastNames=()=>{
        onLastNameChange(Names[Math.floor(Math.random()*Names.length)])
    }

    const competencestab=['organisé','perfectionniste',"Travail d'équipe",'Autonomie','Curiosité','Organisation','Créativité','Fiabilité','Détermination','Empathie','Polyvalence'
]

    const RandomCompetences=()=>{
        onCompetencesChange([{compname:competencestab[Math.floor(Math.random()*competencestab.length)], compid:Math.random()*10},
        {compname:competencestab[Math.floor(Math.random()*competencestab.length)], compid:Math.random()*10},
        {compname:competencestab[Math.floor(Math.random()*competencestab.length)], compid:Math.random()*10},
        {compname:competencestab[Math.floor(Math.random()*competencestab.length)], compid:Math.random()*10},
        {compname:competencestab[Math.floor(Math.random()*competencestab.length)], compid:Math.random()*10}])
    }

    const RimagePersona=()=>{
        onImageChange(`https://thispersondoesnotexist.com/image?${Math.random()*2}`)
     }

const listofhobbies=['guitare','musique','finance','sport','football','photographie', 'Marketing', 'Vélo','Voyager','dormir','Apprendre de nouvelles choses']
const Rlistofhobbies=()=>{
    onHobbiesChange(
   `${listofhobbies[Math.floor(Math.random()*listofhobbies.length)]}, ${listofhobbies[Math.floor(Math.random()*listofhobbies.length)]},
${listofhobbies[Math.floor(Math.random()*listofhobbies.length)]}, ${listofhobbies[Math.floor(Math.random()*listofhobbies.length)]}`)
}
const [values, setValues]= React.useState('')

    const handlechangename=(e)=>{
        onNameChange(e.target.value)
    }
    
    const getvaluecomp =(val)=>{
     setValues(val.target.value)
    }


    const handlcompchange=(e)=>{
        onCompetencesChange([...listofcompetences,{compname:`${values}`, compid:`${Math.random()*3}`}])
        setValues('')

    }


    console.log(values)




    const handlechangelastname=(i)=>{
        onLastNameChange(i.target.value)
    }
    const handlechangeage=(e)=>{
        onAgeChange(e.target.value)
    }
    const handlechangehobbies=(e)=>{
        onHobbiesChange(e.target.value)
    }
    
const handleSubmit=(event)=>{
event.preventDefault()
}


    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='prénom' value={pname} onChange={handlechangename}/>
            <input type='text' placeholder='nom' value={plastname} onChange={handlechangelastname} />
            <input type='number' min='6' max='99' placeholder="age" value={page} onChange={handlechangeage}/>
            <button id='randombutton' onClick={()=>{RandomAge(); RandomNames();RandomLastNames();RimagePersona();Rlistofhobbies();RandomCompetences()}}>Générer un nouveau profil</button>
            
            <textarea name="" id="" cols="30" rows="5" placeholder="quels sont ses hobbies" value={hobbies} onChange={handlechangehobbies}></textarea>
            <input type='text' placeholder='Compétences' value={values} onChange={getvaluecomp} />
            <button onClick={handlcompchange}>ajouter la compétence</button>
        </form>)
}
