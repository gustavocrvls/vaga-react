import { createServer } from 'miragejs';

createServer({
  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 1,
          title: 'Ordem Vermelha',
          price: 40,
          description: `Você destruiria seu mundo em nome da verdade?
    
          a última região habitada do mundo, untherak, é povoada por humanos, anões e gigantes, sinfos, kaorshs e gnolls. Nela, a deusa una reina soberana, lembrando a todos a missão maior de suas vidas: servir a ela sem questionamentos. No entanto, um pequeno grupo de rebeldes, liderado por uma figura misteriosa, está disposto a tudo para tirá-la do trono.
          
          com essa fagulha de esperança, mais indivíduos se unem à causa e mostram a una que seus dias talvez estejam contados. Um grupo instável e heterogêneo que precisará resolver suas diferenças a fim não só de desvendar os segredos de untherak, mas também enfrentar seu mais terrível guardião, o general proghon, e preparar-se para a possibilidade de um futuro totalmente desconhecido. Se uma deusa cai, o que vem depois?`,
          cover: 'https://m.media-amazon.com/images/I/51Y+hQTWOsL.jpg',
          rating: 4.1,
        },
        {
          id: 2,
          title: 'As Crônicas de Nárnia',
          price: 120,
          description: `Viagens ao fim do mundo, criaturas fantásticas e batalhas épicas entre o bem e o mal - o que mais um leitor poderia querer de um livro? O livro que tem tudo isso é 'O leão, a feiticeira e o guarda-roupa', escrito em 1949 por Clive Staples Lewis. MasLewis não parou por aí. Seis outros livros vieram depois e, juntos, ficaram conhecidos como 'As crônicas de Nárnia'. Nos últimos cinqüenta anos, 'As crônicas de Nárnia' transcenderam o gênero da fantasia para se tornar parte do cânone da literaturaclássica. Cada um dos sete livros é uma obra-prima, atraindo o leitor para um mundo em que a magia encontra a realidade, e o resultado é um mundo ficcional que tem fascinado gerações. Esta edição apresenta todas as sete crônicas integralmente, num único volume. Os livros são apresentados de acordo com a ordem de preferência de Lewis, cada capítulo com uma ilustração do artista original, Pauline Baynes. Enganosamente simples e direta, 'As crônicas de Nárnia' continuam cativando os leitores com aventuras, personagens e fatos que falam a pessoas de todas as idades.`,
          cover:
            'https://images-na.ssl-images-amazon.com/images/I/71yJLhQekBL.jpg',
          rating: 4.9,
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/products', (schema, request) => {
      return schema.db.products;
    });

    this.get('/products/:id', (schema, request) => {
      const product = schema.db.products.find(request.params.id);

      return product;
    });
  },
});
