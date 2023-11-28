exports.seed = async function (knex) {
  await knex("movies").del();
  await knex("movies").insert([
    {
      id: "a549c80f-72d1-4ad5-a394-89ce054af8d5",
      title: "O Poderoso Chefão",
      rating: 5,
      plot: "Michael Corleone, filho mais novo de Vito Corleone, tenta afastar-se dos negócios da família, mas é atraído de volta quando seu pai é ferido. Ele é envolvido em uma teia de traição, poder e vingança, assumindo o controle da família Corleone e tornando-se parte do submundo do crime.",
      genre: "crime",
    },
    {
      id: "41b5e045-6d37-45a7-9c56-446e255b4a6f",
      title: "Matrix",
      rating: 4,
      plot: 'Thomas Anderson, programador de computadores, descobre uma verdade chocante sobre a realidade: o mundo que ele conhece é uma simulação de computador. Com a ajuda de Morpheus, ele embarca em uma jornada para entender e desafiar a Matrix, enfrentando desafios e descobrindo seu destino como "O Escolhido".',
      genre: "ficção",
    },
    {
      id: "7aa9fcfd-366f-4a8e-862c-29a0778ec414",
      title: "Titanic",
      rating: 3,
      plot: "Em sua viagem inaugural, o luxuoso navio Titanic enfrenta um destino trágico quando colide com um iceberg. Enquanto a tragédia se desenrola, um romance proibido floresce entre Jack Dawson, um artista sem recursos, e Rose DeWitt Bukater, uma passageira de primeira classe, desafiando as barreiras sociais.",
      genre: "drama",
    },
    {
      id: "134e042d-9df0-4b48-9c4b-47d4a9d6c491",
      title: "O Senhor dos Anéis: A Sociedade do Anel",
      rating: 4,
      plot: "Frodo Baggins, um hobbit, recebe a tarefa de destruir um anel poderoso antes que caia nas mãos do malévolo Sauron. Ele forma a Sociedade do Anel, uma irmandade diversificada, para ajudá-lo em sua perigosa jornada pela Terra-média, enfrentando criaturas terríveis e desafios inimagináveis.",
      genre: "ficção",
    },
    {
      id: "2a592e9e-d554-4a1a-9a84-bf33159f0a11",
      title: "Pulp Fiction",
      rating: 4,
      plot: "Pulp Fiction entrelaça várias histórias de Los Angeles, envolvendo gangsters, boxeadores, gângsteres e uma misteriosa maleta. O filme explora temas de violência, redenção e moralidade de maneira não linear e estilizada, tornando-se um clássico cult com seu diálogo afiado e personagens memoráveis.",
      genre: "crime",
    },
  ]);
};
