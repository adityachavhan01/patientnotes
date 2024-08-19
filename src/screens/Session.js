import React, { useRef, useState } from 'react'
import axios from 'axios'
import JoditEditor from 'jodit-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Session = () => {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("")
  const editor = useRef(null)
  const [content,setcontent] = useState("")
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
                "text": content
              }
            ]
          }
        ]
      }
    })
    // console.log(response);
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  const settingQues=(e) => setquestion(e.target.value)
  return (
    <div>
      <Navbar />
      <div>
        <h1>Sessions</h1>
        <textArea value={question} onChange={settingQues} cols="30" row="10"
         />
         
         
        <button onClick={GenerateAnswer}>generate answer</button>
      </div>
      {/* <pre>{answer}</pre> */}
      <JoditEditor ref={editor}  value={answer} />
      <Footer />
    </div>
  )
}

export default Session
