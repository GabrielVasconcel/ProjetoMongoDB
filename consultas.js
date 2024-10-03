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

// Para times que tem Gaming no nome retorna o nome e os jogadores da posicao Top Laner
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

// Organizações que têm times de CS:GO e Valorant
db.times.find({
    jogos:{$all: ["CS:GO", "Valorant"]}
}).pretty()

 
// Conta quantas competições com premiacao acima de 300 mil ocorreram no ano atual e nos passados
db.campeonato.aggregate([
    {
        $match: {
            premiacao: { $gt: 300000 } 
        }
    },
    {
        $group: {
            _id: {
                $cond: {
                    if: { $lt: ["$ano", 2024] },
                    then: "Antigo",
                    else: "Atual"
                }
            },
            total: { $sum: 1 } 
        }
}
])

// Cria uma coleção para guardar a premiacao total para campeonato de CS:GO em andamento
db.campeonato.mapReduce( function () 
{if (this.status === "em andamento" && this.jogo === "CS:GO") 
    { emit(this.jogo, this.premiacao);  } }, 
    function (key, values) { return Array.sum(values);  }, 
    { out: "premiacao_total",  query: { status: "em andamento", jogo: "CS:GO" }  } );

// Tentativa de updade com upsert true
db.campeonato.updateOne(
    { nome: "Worlds 2022" },  
    { 
        $set: {
            jogo: "League of Legends",
            ano: 2022,
            premiacao: 2225000,
            times_participantes: [
                { nome: "G2", regiao: "Europa" },
                { nome: "Cloud9", regiao: "América do Norte" },
                { nome: "Bilibili Gaming", regiao: "China" },
                { nome: "SKT T1", regiao: "Coreia" }
            ],
            status: "concluído",
            vencedor: "Cloud9"
        }
    },
    { upsert: true }  
);

//atualizando o status do jogo
db.campeonato.updateOne(
    { nome: "Worlds 2024" }, 
    { 
        $set: {
    status: "concluído",
    vencedor: "G2"
}
}
);

//atualizando os status de todo os anos juntos
db.campeonato.updateMany(
    { ano: 2023 },  // Critério de busca
    { 
        $set: {
            status: "encerrado"
        }
    }
);

// Campeonatos com premiacao maior que 300 mil
db.campeonato.find({ $where: "this.premiacao > 300000" });

//Mudando o nome da coleção
db.equipas.renameCollection("equipes")// Organizações que têm times de CS:GO e Valorant

//Adicionando um novo elemento no array, garantindo que não há duplicatas
db.equipas.updateOne(
    { nome: "G2 Esports" },
    { $addToSet: { jogadores: { nick: "Hans Sama", nacionalidade: "França", idade: 25, posicao: "Adc", jogo: "League of Legends" } } }
  )