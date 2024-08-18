import React from 'react'
import './Main1.css'
import Mainimg from './main-img.webp'

const Main1 = () => {
    return (
        <div className='mainn-container'>
            <div className='container1'>
                <div className='a1' >
                    Let AI write your <br />clinical notes so you <br />can focus on your patients
                </div>
                <div className='a2'>
                    PatientNotes is a clinical note-taking tool that uses AI to write <br />clinical notes, patient summaries, and medical letters. It is designed to<br /> save you time and improve the quality of your notes. With a focus on <br />privacy and security, PatientNotes is a safe and secure way to start <br />leveraging AI in your work today.
                </div>
                <div className='a3'>
                    <button>Get started with your free trial</button>
                </div>
            </div>
            <div className='container2'>
                <img src={Mainimg} style={{ width: "50vw", height: "auto" }} />
            </div>
        </div>
    )
}

export default Main1
