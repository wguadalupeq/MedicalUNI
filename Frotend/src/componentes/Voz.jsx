import './Voz.css';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
//import {Switch,Route,Link} from 'react-router-dom'
import Vista1 from './Vista1';
import Vista2 from './Vista2';
import Main from './Main';

const Voz = () => {
    const movermain = () => {
        ReactDOM.render(<Main />, document.getElementById("root"));
    }
    const movervista1 = () => {
        ReactDOM.render(<Vista1 />, document.getElementById("root"));
    }
    const movervista2 = () => {
        ReactDOM.render(<Vista2 />, document.getElementById("root"));
    }

    const [display] = useState('') 
    const commands = [
        {
            command: 'number one',          
            callback: () => movervista1()   
        },
        {
            command: 'number two',          
            callback: () => movervista2()   
        },
        {
            command: 'main page',          
            callback: () => movermain()   
        }
    ]

    const {transcript} = useSpeechRecognition( { commands })
                           
    return (
        <div className="voz">
            <h3>Speak to navigate</h3>
            <p>{transcript}</p>
            <p>{display}</p>
            <button onClick={SpeechRecognition.startListening}>Comenzar</button>
            <button onClick={SpeechRecognition.stopListening}>Detener</button>
        </div>
    )
  }

  export default Voz;