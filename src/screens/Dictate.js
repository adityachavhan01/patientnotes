import React, { useRef } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Dictate.css'
import JoditEditor from 'jodit-react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Dictate = () => {
    const editor = useRef(null)

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div>
            <Navbar />
            <div className='dictate'>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={SpeechRecognition.startListening}>Start</button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                {/* <p className='content'>{transcript}</p> */}
                <div className='content'>
                    <JoditEditor ref={editor} value={transcript} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dictate
