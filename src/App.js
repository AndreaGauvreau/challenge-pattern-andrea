import { ReactDOM } from 'react';
import React from "react"
import { render } from '@testing-library/react';
import Body from './components/body';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
  const [name, setName]= React.useState('Andréa')
  const [lastName, setLastName]= React.useState('Gauvreau')
  const [profilimg, setProfilImg]= React.useState('https://www.teachizi.fr/wp-content/uploads/2022/02/andrea-gauvreau-co-fondateur-teachizi.jpg')


  return <>
  <header><Header name={name} lastName={lastName} profilimg={profilimg}/></header>
  <main><Body/></main>
  <footer><Footer/></footer>
  </>

}

