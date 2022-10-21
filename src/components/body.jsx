import React from "react"
import { ReactDOM } from "react"
import FormPersona from "./formpersona"
import Monpersona from "./persona"



export default function Body(){
    const [page, setPage]=React.useState(18)
    const [pname, setPname]=React.useState('Luffy')
    const [plastname, setPlastName]=React.useState('Mugiwara')
    const [hobbies, setHobbies]=React.useState('La viande, La viande, les trésors, se dépasser, la bagarre, les nakamas')
    const [imageprofil, setImageprofil]= React.useState('https://i.pinimg.com/736x/5d/8b/26/5d8b261b13af2e1ecf34ac560cfd270f.jpg')
    
    const compPersona=[]

const [listofcompetences, setListofcompetences]= React.useState(compPersona)

    const onCompetencesChange=(thecompetences)=>{
        setListofcompetences(thecompetences)
    }

    const onNameChange=(thename)=>{
        setPname(thename)
    }
    
    const onImageChange=(theimg)=>{
        setImageprofil(theimg)
    }
    const onLastNameChange=(theLname)=>{
        setPlastName(theLname)
    }
    const onAgeChange=(theage)=>{
        setPage(theage)
    }    
    const onHobbiesChange=(thehobbies)=>{
        setHobbies(thehobbies)
    }


return (<>
    <h1>Crée ton persona</h1>
    <div id='personasection'><FormPersona 
    onNameChange={onNameChange} 
    onImageChange={onImageChange}
    onLastNameChange={onLastNameChange}
    onAgeChange={onAgeChange}
    onHobbiesChange={onHobbiesChange}
    pname={pname}
    imageprofil={imageprofil}
    page={page}
    plastname={plastname}
    hobbies={hobbies}
    listofcompetences={listofcompetences}
    onCompetencesChange={onCompetencesChange}
    />
    <Monpersona page={page} 
    hobbies={hobbies} 
    pname={pname} 
    plastname={plastname} 
    imageprofil={imageprofil} onImageChange={onImageChange}
    listofcompetences={listofcompetences}/></div>
</>
)
}

