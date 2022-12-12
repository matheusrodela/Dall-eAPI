import './styles.css';
import { useState } from 'react';
import HashLoader  from "react-spinners/HashLoader ";
import { Link } from 'react-scroll'
import { Configuration, OpenAIApi } from "openai";


const EditImage = () => {

    const src = '../assets/holdingPhone.png'
    const mask = '../assets/maskHoldingPhone.png'
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_Open_AI_Key,
    });

    const openai = new OpenAIApi(configuration);


    const editImg = async () => {
      const res = await openai.createImageEdit(
        createReadStream(src),
        createReadStream(mask),
        {prompt},
        1,
        '1024x1024'
      )
      setResult(res.data.data[0].url);
      setLoading(true);
    }

    const loadingAnimation = () =>{
        setShowLoading(true);
        setLoading(false);
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
          editImg();
            loadingAnimation();
        }
    };

    return (
        <section className="generateImage">
            
            {/* <input type='file' accept='image/png'></input>
            <input type='file' accept='image/png'></input> */}

            <input className='appInput' id='input' placeholder='Describe the image you wish to create' onKeyDown={handleKeyDown} onChange={(e) => setPrompt(e.target.value)}/>

            <Link type='submit' spy={true} activeClass="active" to="input" smooth={true} offset={50} duration={500}>
              <button onClick={() => {editImg(); loadingAnimation()}}>Generate image</button>
            </Link>
          
            <div className='imageContainer'>
            {loading ? (<img className='resultImage' src={result} alt={result}></img>) : (<HashLoader color="#36d7b7"/>)}
            
            {showLoading ? <></> : <div className='containerOverlay'><p>Create with <br/> <strong>DALL-E 2</strong></p></div> }
            {loading ? (<p>{prompt}</p>) : <></>}
            </div>
        </section>
    )
}

export {EditImage} 