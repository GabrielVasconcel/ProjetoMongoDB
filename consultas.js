// Organizações que possuem time do jogo League of Legends
db.times.find({jogos: { $in: ['League of Legends'] } } );

// Campeonatos de 2023 com premiação 1 milhão ou maior. Retorna nome, premiação, jogo, vencedor. 
db.campeonato.aggregate([ { $match: { ano: 2023, premiacao: { $gte: 1000000} } }, { $project: { nome: 1, premiacao: 1, jogo: 1, vencedor: 1 } }] );

// Retorna os 2 anos que tiveram as maiores somas de premiacao, ordenados decrescentemente
db.campeonato.aggregate([{$group:{_id: "$ano", somaPremiacao: {$sum: "$premiacao"}}}, {$sort: {"somaPremiacao": -1}}, {$limit: 2}]);

// Retorna a média e o valor maximo de premiacao para cada jogo
db.campeonato.aggregate([{$group: {_id: "$jogo", maxPremiacao: {$max: "$premiacao"}, avgPremiacao: {$avg: "$premiacao"}, qtdCampeonatos: {$count:{}}}}])

// Retorna os times que participaram de campeonatos registrados no banco de dados
db.campeonato.aggregate([{$lookup:{from: "times", localField: "times_participantes", foreignField: "nome", as: "time_camp"}}])

// Retorna a primeira organização que tem time em 3 jogos
db.times.findOne({$expr: {$eq: [ {$size: "$jogos"}, 3]}}); 


db.times.aggregate([
    {
        $match: {
            $text: {$search: "Gaming"}
        }
    },
    {
        $project:{
            nome:1,
            jogadoresFiltrados: {
                $filter: {
                    input: "$jogadores",
                    as: "jogador",
                    cond: {$eq: [
                        "$$jogador.posicao", "Top Laner"
                    ]
                }
            }
        }
    }
}
])


//Adicionando um novo elemento no array, garantindo que não há duplicatas
db.equipas.updateOne(
  { nome: "G2 Esports" },
  { $addToSet: { jogadores: { nick: "Hans Sama", nacionalidade: "França", idade: 25, posicao: "Adc", jogo: "League of Legends" } } }
)

//Mudando o nome da coleção
db.equipas.renameCollection("equipes")
