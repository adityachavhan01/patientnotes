import React, { useRef, useState } from 'react'
import axios from 'axios'
// import JoditEditor from 'jodit-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Session.css'
import ReactMarkdown from 'react-markdown';

// gemni workspace
// const { GoogleGenerativeAI } = require("@google/generative-ai");


const Session = () => {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("")
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
                "text": question
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
  return (
    <div>
      <Navbar />
      <div className='session-content1' >
        <h1>Sessions</h1>
        <textArea value={question} onChange={settingQues} cols="60" rows="10"
          style={{  }} />
        <button onClick={GenerateAnswer} style={{ backgroundColor: "grey", color: "white", borderRadius: "30px", margin: "5px", padding: "5px" }}>generate Sessions</button>
      </div>
      {/* <pre>{answer}</pre> */}
      {/* <div className='session-content2'>
        <JoditEditor ref={editor} value={answer} />
      </div> */}
      <div className="session-content3">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  )
}

export default Session
