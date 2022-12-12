import './styles.css'
import IMAGEM1 from '../assets/img1.png'
import IMAGEM2 from '../assets/img2.png'
import IMAGEM3 from '../assets/img3.png'
import IMAGEM4 from '../assets/img4.png'
import IMAGEM5 from '../assets/img5.png'
import IMAGEM6 from '../assets/img6.png'
import IMAGEM7 from '../assets/img7.png'


const BackgroundImages = () => {
  return (
    <div className='backgroundImageContainer'>
      <img src={IMAGEM1} alt='dall-e generated image'/>
      <img src={IMAGEM2} alt='dall-e generated image'/>
      <img src={IMAGEM3} alt='dall-e generated image'/>
      <img src={IMAGEM4} alt='dall-e generated image'/>
      <img src={IMAGEM5} alt='dall-e generated image'/>
      <img src={IMAGEM6} alt='dall-e generated image'/>
      <img src={IMAGEM7} alt='dall-e generated image'/>
    </div>
  );
}

export {BackgroundImages} 