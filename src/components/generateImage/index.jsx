import './styles.css';
import { useState } from 'react';
import HashLoader  from "react-spinners/HashLoader ";
import { Link } from 'react-scroll'
import { Configuration, OpenAIApi } from "openai";


const GenerateImage = () => {

    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_Open_AI_Key,
    });

    const openai = new OpenAIApi(configuration);

    const createImg = async () =>{
            const res = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        setResult(res.data.data[0].url);
        setLoading(true);
    }

    const loadingAnimation = () =>{
        setShowLoading(true);
        setLoading(false);
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            createImg();
            loadingAnimation();
        }
    };

    return (
        <section className="generateImage">
            
            <input className='appInput' id='input' placeholder='Describe the image you wish to create' onKeyDown={handleKeyDown} onChange={(e) => setPrompt(e.target.value)}/>

            
                <Link type='submit' spy={true} activeClass="active" to="input" smooth={true} offset={50} duration={500}>
                    <button onClick={() => {createImg(); loadingAnimation()}}>Generate image</button>
                </Link>
            

            <div className='imageContainer'>
            {loading ? (<img className='resultImage' src={result} alt={result}/>) : (<HashLoader color="#36d7b7"/>)}
            
            {showLoading ? <></> : <div className='containerOverlay'><p>Create with <br/> <strong>DALL-E 2</strong></p></div> }
            {loading ? (<p>{prompt}</p>) : <></>}
            </div>
        </section>
    )
}

export {GenerateImage} 