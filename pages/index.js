import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Title(props){
  return <h1>{props.children}</h1>
}

export default function Home() {
  return (
    
    <div>
      <Title>Boca</Title>
      Hot Reload:;:
    </div>
  )
}
