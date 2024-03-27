// Mostre os dados da aplicação, como apresentado na aula
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  const App = () => {

  const dados = mario;
  const totalcompras = dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))).reduce((a, b) => a + b);

    return (
    <div>
       <p>Nome: {dados.cliente}</p>
       <p>Idade: {dados.idade}</p>
       <p>Situação: <span style={dados.ativa ? {color: 'green'}  : {color: 'red'}}
       >{dados.ativa ? 'Ativo' : "Inativo"}</span>
</p>
       <p>Soma total compras:{totalcompras}</p>
       <p>{totalcompras > 10000 ? 'Você ta liso, e no caminho errado' : 'Você    está liso, mas no caminho certo'}</p>

    </div>
    );
}

export default App