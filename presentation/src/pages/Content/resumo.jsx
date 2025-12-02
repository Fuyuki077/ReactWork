import './style.css'
import gatopoligonalgirando from '../Home/gatopoligonalgirando.gif'
import maxwell from '../Home/maxwell-cat.gif'
import AnimatedContent from './animation/AnimatedContent.jsx'
import ImagemComHover from '../Home/imghover.jsx'
import 'react-window';

function Resumo() {

  return (
    <div id='0'>
      <h3 className='titulo'>O que faz um jogo de sucesso? Identificando fatores que influenciam a popularidade de jogos</h3>
      
      
        <div className='content'>
        <p>O mercado de jogos digitais movimenta bilhões de dólares anualmente, tornando-se uma das indústrias de entretenimento mais influentes da atualidade. No entanto, compreender os fatores que determinam o sucesso de um jogo ainda representa um desafio. Este projeto propõe um modelo teórico de aprendizado de máquina para análise e predição da popularidade de jogos digitais, com base em uma abordagem multimodal que integra dados textuais, visuais e numéricos. </p>
        
        <ImagemComHover />
        
        </div>
      
    </div>
    
  )
}

export default Resumo 