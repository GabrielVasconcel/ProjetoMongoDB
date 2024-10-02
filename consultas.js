// Organizações que possuem time do jogo League of Legends
db.times.find({
    jogos: { $in: ['League of Legends'] }
  });

// Campeonatos de 2023 com premiação 1 milhão ou maior. Retorna nome, premiação, jogo, vencedor. 
db.campeonato.aggregate([ { $match: { ano: 2023, premiacao: { $gte: 1000000} } }, { $project: { nome: 1, premiacao: 1, jogo: 1, vencedor: 1 } }] );

// Retorna os 2 anos que tiveram as maiores somas de premiacao, ordenados decrescentemente
db.campeonato.aggregate([{$group:{_id: "$ano", somaPremiacao: {$sum: "$premiacao"}}}, {$sort: {"somaPremiacao": -1}}, {$limit: 2}]);