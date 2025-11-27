import './styleText.css'

function Metodologia() {
  return (
<div>

<h2>5. Metodologia</h2>

    <h3 >A metodologia proposta foi elaborada com o objetivo de estruturar uma investigação sistemática, replicável e orientada à construção de um modelo teórico de predição de popularidade de jogos digitais. Adota-se uma abordagem exploratória, descritiva e aplicada, com ênfase quantitativa e suporte em técnicas de aprendizado de máquina. A pesquisa não busca a implementação prática neste estágio, mas sim o delineamento conceitual de um modelo que possa ser futuramente validado com dados reais.</h3>

<div className='content1'>
<h3>Etapa 1 — Revisão Bibliográfica</h3>
    <p>Fundamentar teoricamente a pesquisa, identificar lacunas de conhecimento e consolidar o estado da arte sobre predição de sucesso em jogos digitais.</p>
    <p><strong>Procedimentos:</strong></p>
    <div className='lista'>
    <ul className='lista-minimalista'>
        <li>Busca estruturada em bases científicas reconhecidas (IEEE Xplore, ACM Digital Library, SpringerLink, ScienceDirect e Scopus).</li>
        <li>Utilização de palavras-chave combinadas: "game popularity prediction", "video game success factors", "multimodal analysis" e "machine learning in games".</li>
        <li>Aplicação de critérios de inclusão (publicações entre 2015 e 2025, estudos empíricos e revisões sistemáticas) e de exclusão (trabalhos puramente teóricos, duplicados ou sem validação).</li>
        <li>Registro e categorização dos artigos segundo quatro eixos temáticos: predição de sucesso, engajamento de jogadores, análise multimodal e impacto do streaming.</li>
    </ul>
    <p><strong>Resultados esperados:</strong> um panorama crítico que oriente a definição das variáveis, das técnicas de análise e do desenho conceitual do modelo proposto.</p>
    </div>
    
</div>


<div className='content1'>
<h3>Etapa 2 — Definição das Variáveis e Fontes de Dados</h3>
    <p>Identificar e organizar as variáveis mais relevantes para a análise da popularidade dos jogos digitais, a partir da literatura e de bases de dados públicas.</p>
    <p><strong>Categorias de variáveis propostas:</strong></p>
    <div className='lista'>
    <ol className='lista-minimalistaOl'>
        <li><strong>Técnicas:</strong> motor gráfico, plataforma, gênero, requisitos mínimos e tamanho do jogo.</li>
        <li><strong>Design e conteúdo:</strong> qualidade gráfica, duração média, presença de multiplayer, modelo de monetização e atualização pós-lançamento.</li>
        <li><strong>Marketing e visibilidade:</strong> número de trailers, visualizações, orçamento promocional, data de lançamento e presença em eventos.</li>
        <li><strong>Engajamento social:</strong> número de streamers ativos, visualizações em plataformas de streaming, menções em redes sociais e engajamento de influenciadores.</li>
        <li><strong>Avaliação e reputação:</strong> notas em agregadores como Metacritic e OpenCritic, prêmios recebidos e sentimentos expressos em comentários.</li>
        <li><strong>Estúdio:</strong> porte da empresa, histórico de lançamentos e taxa de sucesso anterior.</li>
        <li><strong>Fontes de dados:</strong> APIs públicas (Steam, Twitch, Twitter, IGDB), web scraping (Metacritic, SteamDB) e repositórios acadêmicos (Newzoo, Kaggle).</li>
    </ol>
    </div>
    <p><strong>Justificativa:</strong> Essa etapa assegura a consistência e abrangência dos dados, permitindo o cruzamento entre dimensões técnicas, mercadológicas e sociais — o que é essencial para uma análise multimodal.</p>

</div>

<h3>Etapa 3 — Coleta e Organização dos Dados</h3>
    <p>Definir o processo teórico de extração, armazenamento e tratamento de dados provenientes das fontes selecionadas.</p>
    <p><strong>Procedimentos:</strong></p>
    <ul>
        <li>Armazenamento em banco de dados relacional (PostgreSQL) ou orientado a documentos (MongoDB), conforme o tipo e a estrutura dos dados.</li>
        <li>Organização dos registros em intervalos temporais (pré-lançamento, lançamento e pós-lançamento) para permitir análise longitudinal.</li>
    </ul>
    <p><strong>Resultados esperados:</strong> um banco conceitual padronizado e modular, preparado para futuras implementações empíricas.</p>

<h3>Etapa 4 — Modelagem Conceitual e Arquitetura do Sistema</h3>
    <p>Propor a arquitetura teórica do modelo de aprendizado de máquina que integre informações de múltiplas modalidades de dados.</p>
    <p><strong>Descrição da arquitetura proposta:</strong></p>
    <ol>
        <li><strong>Módulo de Entrada Multimodal:</strong> recebe dados textuais, visuais e numéricos.</li>
        <li><strong>Módulo de Fusão de Features:</strong> combina as saídas de diferentes modalidades, utilizando técnicas de redução de dimensionalidade (PCA, LASSO, t-SNE).</li>
        <li><strong>Módulo de Predição:</strong> integra algoritmos como Random Forest, Gradient Boosting (XGBoost, LightGBM) e Redes Neurais Multicamadas (MLP).</li>
        <li><strong>Módulo de Interpretação:</strong> emprega métodos de interpretabilidade (SHAP e LIME) para identificar os fatores mais influentes no sucesso dos jogos.</li>
    </ol>
</div>

)
}
export default Metodologia
    