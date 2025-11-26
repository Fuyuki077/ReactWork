import './style.css'
import gatopoligonalgirando from './gatopoligonalgirando.gif'
import AnimatedContent from './animation/AnimatedContent.jsx'
function Resumo() {

  return (
    <div>
      <h3 className='titulo'>O que faz um jogo de sucesso? Identificando fatores que influenciam a popularidade de jogos</h3>
      
      
        <div className='content'>
        <p>O mercado de jogos digitais movimenta bilhões de dólares anualmente, tornando-se uma das indústrias de entretenimento mais influentes da atualidade. No entanto, compreender os fatores que determinam o sucesso de um jogo ainda representa um desafio. Este projeto propõe um modelo teórico de aprendizado de máquina para análise e predição da popularidade de jogos digitais, com base em uma abordagem multimodal que integra dados textuais, visuais e numéricos. </p>
        <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={0.9}
        ease="power3"
        initialOpacity={0.4}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <img src={gatopoligonalgirando} alt="Gato Poligonal Girando" />
        </AnimatedContent>
        </div>
      
    </div>
    
  )
}

export default Resumo
