import CloseButton from 'react-bootstrap/CloseButton';

function BasicExample() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-3 border">
        <span>Conteúdo qualquer</span>
        <CloseButton />
      </div>
      
      {/* Exemplo com comportamento de fechar */}
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Atenção!</strong> Esta é uma mensagem importante.
        <CloseButton onClick={() => console.log('Fechar clicado')} />
      </div>
    </div>
  );
}

export default BasicExample;