import React from "react"
import Layout from "../components/layout"
import "../styles/main.scss"


//import { Head } from "../components/head"

const Index = ({ location }) => {

  const pageUrl = location.pathname;


  return (

    <>
  
    <Layout pageUrl={pageUrl}>
        <div className="homepage-container">


          <h1>Aurélie et Camille</h1>

        </div>

    </Layout>
    </>
  )
}

export default Index

