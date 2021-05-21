import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return [
        {
          id: 1,
          title: 'Ordem Vermelha',
          price: 40,
          description: `Você destruiria seu mundo em nome da verdade?

          a última região habitada do mundo, untherak, é povoada por humanos, anões e gigantes, sinfos, kaorshs e gnolls. Nela, a deusa una reina soberana, lembrando a todos a missão maior de suas vidas: servir a ela sem questionamentos. No entanto, um pequeno grupo de rebeldes, liderado por uma figura misteriosa, está disposto a tudo para tirá-la do trono.
          
          com essa fagulha de esperança, mais indivíduos se unem à causa e mostram a una que seus dias talvez estejam contados. Um grupo instável e heterogêneo que precisará resolver suas diferenças a fim não só de desvendar os segredos de untherak, mas também enfrentar seu mais terrível guardião, o general proghon, e preparar-se para a possibilidade de um futuro totalmente desconhecido. Se uma deusa cai, o que vem depois?`,
          cover: 'https://m.media-amazon.com/images/I/51Y+hQTWOsL.jpg',
          rating: 4,
        },
      ];
    });
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
