import './styleText.css'
import AnimatedContent from './animation/AnimatedContent.jsx'
function TrabalhosCorrelatos() {

  return (
    <div id='4'>
      <h2>4. Trabalhos Correlatos</h2>

<h3>Esta seção apresenta estudos relevantes que fundamentam a proposta, evidenciando diferentes abordagens na predição de sucesso em jogos digitais.</h3>
<div className='grid1'>
<h3 >4.1. Indie Games Popularity Prediction by Considering Multimodal Features</h3>
<div className='content1'>
  <p>Huang e Chu (2022) desenvolveram um sistema de predição de popularidade para jogos independentes utilizando características multimodais — visuais (screenshots e trailers), textuais (descrições e comentários) e metadados (gênero, preço, data de lançamento).</p>
  <p><strong>Contribuições:</strong> demonstração da eficácia da integração de dados multimodais e uso de redes neurais para classificação.</p>
  <p><strong>Relevância:</strong> fundamenta a abordagem proposta neste projeto, que também integra múltiplas modalidades de dados.</p>
</div>
</div>

<div className='grid2'>
<h3 >4.2. Predicting Success Factors of Video Game Titles and Companies</h3>
<div className='content1'>
<p>Pfau et al. (2022) analisaram 144 jogos de 76 empresas europeias, aplicando 137 variáveis com técnicas de aprendizado de máquina para prever critérios de sucesso.</p>
<p><strong>Contribuições:</strong> identificação de fatores críticos como gênero, motor gráfico e modelo de negócios.</p>
<p><strong>Relevância:</strong> orienta a seleção de variáveis técnicas e de design na construção do modelo proposto.</p>
</div>
</div>

<div className='grid3'>
<h3 >4.3. Does Streaming Affect Video Game Popularity?</h3>
<div className='content1'>
<p>Li et al. (2024) investigaram o impacto de plataformas de streaming, como Twitch e YouTube Gaming, na popularidade de jogos.</p>
<p><strong>Contribuições:</strong> quantificação do impacto do streaming por gênero de jogo e identificação de padrões de visibilidade.</p>
<p><strong>Relevância:</strong> destaca a importância de incluir métricas de engajamento social no modelo proposto.</p>
</div>
</div>

<div className='grid4'>
<h3 >4.4. The Impact of Influencers on Brand Social Network Growth</h3>
<div className='content1'>
<p>Benevento et al. (2025) analisaram milhões de tweets sobre lançamentos de videogames para entender a influência de criadores de conteúdo na visibilidade das marcas.</p>
<p><strong>Contribuições:</strong> análise quantitativa do impacto de influenciadores em eventos de lançamento.</p>
<p><strong>Relevância:</strong> reforça o papel dos influenciadores como variável preditiva no modelo.</p>
</div>
</div>

<div className='grid5'>
<h3>4.5. Flawless Victory!</h3>
<div className='content1'>
<p>Heidenreich et al. (2023) investigaram como elementos de experiência e percepção impactam o sucesso comercial de jogos.</p>
<p><strong>Contribuições:</strong> demonstraram que fatores subjetivos, como apelo visual e expectativa, influenciam a intenção de compra.</p>
<p><strong>Relevância:</strong> amplia o enfoque multimodal ao incluir aspectos emocionais e perceptivos.</p>
</div>
</div>

<h3>Síntese Comparativa:</h3>

<table class='tabelaestilizada'>
    <thead>
        <tr>
            <th>Trabalho</th>
    <th>Abordagem</th>
    <th>Dados Utilizados</th>
    <th>Técnicas de ML</th>
    <th>Foco Principal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Huang & Chu (2022)</strong></td>
            <td>Multimodal</td>
            <td>Visuais, textuais, metadados</td>
            <td>Redes Neurais</td>
            <td>Jogos indie</td>
        </tr>
        <tr>
            <td><strong>Pfau et al. (2022)</strong></td>
            <td>Quantitativa</td>
            <td>137 variáveis</td>
            <td>ML supervisionado</td>
            <td>Sucesso comercial</td>
        </tr>
        <tr>
            <td><strong>Li et al. (2024)</strong></td>
            <td>Correlacional</td>
            <td>Dados de streaming</td>
            <td>Análise quantitativa</td>
            <td>Visibilidade</td>
        </tr>
        <tr>
            <td><strong>Benevento et al. (2025)</strong></td>
            <td>Big Data</td>
            <td>Twitter</td>
            <td>Redes sociais</td>
            <td>Influência digital</td>
        </tr>
        <tr>
            <td><strong>Heidenreich et al. (2023)</strong></td>
            <td>Experimental</td>
            <td>Percepção e UX</td>
            <td>Modelos estatísticos</td>
            <td>Experiência do jogador</td>
        </tr>
        <tr>
            <td><strong>Proposta atual</strong></td>
            <td>Multimodal integrada</td>
            <td>Múltiplas plataformas</td>
            <td>Métodos de ensemble</td>
            <td>Predição holística</td>
        </tr>
    </tbody>
</table>
    </div>
    
  )
}

export default TrabalhosCorrelatos