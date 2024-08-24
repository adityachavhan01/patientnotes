import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import JoditEditor from 'jodit-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Session.css'
import ReactMarkdown from 'react-markdown';
import './Dictate.css'
import JoditEditor from 'jodit-react'
// gemni workspace
// const { GoogleGenerativeAI } = require("@google/generative-ai");


const Session = () => {
  // const [questionfromspeech, setquestionfromspeech] = useState("");
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("")

  // //use ref for jodit
  // const editor = useRef(null)
  // const [content, setcontent] = useState("")

  // const genAI = new GoogleGenerativeAI("AIzaSyB--ACW_U52STPDXS - J4Oy1aRRuGFJPEnY");
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // async function GenerateAnswer() {
  //   setanswer("loading");

  //   const prompt = question

  //   const result = await model.generateContent(prompt);
  //   const response = await result.response;
  //   const text = response.text();
  //   console.log(text);
  //   setanswer(text)
  // }
  // code for text to speech
  const editor = useRef(null)
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    // Update question when transcript changes
    if (listening) {
      setquestion(transcript);
    }
  }, [transcript, listening]);  // Update question when transcript changes

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startingPrompt = "Imagine you are a highly experienced and medically qualified professional providing expert advice. Whenever a user describes their medical concerns or asks for medical advice, you should respond with detailed, evidence-based recommendations. Format your responses with clear headings and bullet points to ensure clarity.\n\n**Important Note:** The information provided is for informational purposes only. It is important for users to understand that they should use this information at their own risk. The advice given here is based on general medical knowledge and may not be tailored to individual conditions.\n\nDo not include any statements suggesting users consult a doctor. Here is the user's query: ";


  async function GenerateAnswer() {
    setanswer("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB--ACW_U52STPDXS-J4Oy1aRRuGFJPEnY",
      method: "post",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": startingPrompt + question
              }
            ]
          }
        ]
      }
    })
    // console.log(response);
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  const settingQues = (e) => setquestion(e.target.value)
  // const settingQuesfromspeech = () => {
  //   // setquestion("loading")
  //   setquestion(transcript)
  // }


  return (
    <div >
      <Navbar />
      <div className='main-session'>
        <div className='session-content1' >
          <h1>Sessions</h1>
          <div className='dictate'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start Genrating</button>
            <button onClick={SpeechRecognition.stopListening} >Stop Generating</button>
            <button onClick={resetTranscript}>Reset previous</button>
            {/* <button onClick={settingQuesfromspeech} >use this text</button> */}
            {/* <p className='content'>{transcript}</p> */}
          </div>
          <textarea value={question || transcript}
            onChange={settingQues}
            cols="60" rows="10"
            style={{}} />
          <button onClick={GenerateAnswer} style={{ backgroundColor: "grey", color: "white", borderRadius: "30px", margin: "5px", padding: "5px" }}>generate Sessions</button>
        </div>
        {/* <pre>{answer}</pre> */}
        {/* <div className='session-content2'>
        <JoditEditor ref={editor} value={answer} />
      </div> */}
        <div className="session-content3">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Session
