import React from "react"
import ReactDOM from "react-dom"
import Photo from "./components/Photo.js"
import Name from "./components/Name.js"
import LinkedinButton from "./components/LinkedinButton.js"
import Footer from "./components/Footer.js"
import EmailButton from "./components/EmailButton.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"


 export default function App() { 
   return (<main>
                 <Photo />
                 <div className="textbox">
                <Name />
                
                <div className="button-container">
                <EmailButton />    <LinkedinButton />
                </div>
                
                <About />
                <Interests />
                 <Footer />
                 </div>
                
                
            </main>)
}
    
