use entregaMongo;

db.createCollection("campeonato");

db.campeonato.insertMany([
    {
      nome: "Worlds 2024",
      jogo: "League of Legends",
      ano: 2024,
      premiacao: 2225000,
      times_participantes: [
        {
          nome: "G2",
          regiao: "Europa"
        },
        {
          nome: "Cloud9",
          regiao: "América do Norte"
        },
        {
          nome: "Bilibili Gaming",
          regiao: "China"
        },
        {
          nome: "SKT T1",
          regiao: "Coreia"
        }
      ],
      status: "em andamento",
      vencedor: null
    },
    {
      nome: "CS:GO Major 2023",
      jogo: "CS:GO",
      ano: 2023,
      premiacao: 1500000,
      times_participantes: [
        {
          nome: "NAVI",
          regiao: "Europa"
        },
        {
          nome: "FURIA",
          regiao: "Brasil"
        },
        {
          nome: "Vitality",
          regiao: "Europa"
        },
        {
          nome: "Heroic",
          regiao: "Dinamarca"
        }
      ],
      status: "concluído",
      vencedor: "Vitality"
    },
    {
      nome: "Valorant Champions 2023",
      jogo: "Valorant",
      ano: 2023,
      premiacao: 1000000,
      times_participantes: [
        {
          nome: "LOUD",
          regiao: "Brasil"
        },
        {
          nome: "Fnatic",
          regiao: "Europa"
        },
        {
          nome: "DRX",
          regiao: "Coreia"
        },
        {
          nome: "Paper Rex",
          regiao: "Sudeste Asiático"
        }
      ],
      status: "concluído",
      vencedor: "Fnatic"
    },
    {
      nome: "MSI 2023",
      jogo: "League of Legends",
      ano: 2023,
      premiacao: 500000,
      times_participantes: [
        {
          nome: "JDG",
          regiao: "China"
        },
        {
          nome: "T1",
          regiao: "Coreia"
        },
        {
          nome: "MAD Lions",
          regiao: "Europa"
        },
        {
          nome: "Gen.G",
          regiao: "Coreia"
        }
      ],
      status: "concluído",
      vencedor: "JDG"
    },
    {
      nome: "IEM Katowice 2024",
      jogo: "CS:GO",
      ano: 2024,
      premiacao: 1000000,
      times_participantes: [
        {
          nome: "Astralis",
          regiao: "Dinamarca"
        },
        {
          nome: "G2",
          regiao: "Europa"
        },
        {
          nome: "Liquid",
          regiao: "América do Norte"
        },
        {
          nome: "FURIA",
          regiao: "Brasil"
        }
      ],
      status: "em andamento",
      vencedor: null
    },
    {
      nome: "LCS Summer 2023",
      jogo: "League of Legends",
      ano: 2023,
      premiacao: 200000,
      times_participantes: [
        {
          nome: "Cloud9",
          regiao: "América do Norte"
        },
        {
          nome: "Golden Guardians",
          regiao: "América do Norte"
        },
        {
          nome: "Evil Geniuses",
          regiao: "América do Norte"
        },
        {
          nome: "Team Liquid",
          regiao: "América do Norte"
        }
      ],
      status: "concluído",
      vencedor: "Cloud9"
    },
    {
      nome: "VCT Masters Tokyo 2023",
      jogo: "Valorant",
      ano: 2023,
      premiacao: 750000,
      times_participantes: [
        {
          nome: "LOUD",
          regiao: "Brasil"
        },
        {
          nome: "Fnatic",
          regiao: "Europa"
        },
        {
          nome: "NRG",
          regiao: "América do Norte"
        },
        {
          nome: "EDward Gaming",
          regiao: "China"
        }
      ],
      status: "concluído",
      vencedor: "Fnatic"
    },
    {
      nome: "Blast Premier Fall 2023",
      jogo: "CS:GO",
      ano: 2023,
      premiacao: 425000,
      times_participantes: [
        {
          nome: "FaZe Clan",
          regiao: "Europa"
        },
        {
          nome: "NAVI",
          regiao: "Europa"
        },
        {
          nome: "BIG",
          regiao: "Alemanha"
        },
        {
          nome: "ENCE",
          regiao: "Finlândia"
        }
      ],
      status: "em andamento",
      vencedor: null
    },
    {
      nome: "CBLOL 2024",
      jogo: "League of Legends",
      ano: 2024,
      premiacao: 300000,
      times_participantes: [
        {
          nome: "LOUD",
          regiao: "Brasil"
        },
        {
          nome: "paiN Gaming",
          regiao: "Brasil"
        },
        {
          nome: "RED Canids",
          regiao: "Brasil"
        },
        {
          nome: "INTZ",
          regiao: "Brasil"
        }
      ],
      status: "em andamento",
      vencedor: null
    },
    {
      nome: "ESL Pro League 2024",
      jogo: "CS:GO",
      ano: 2024,
      premiacao: 850000,
      times_participantes: [
        {
          nome: "Heroic",
          regiao: "Dinamarca"
        },
        {
          nome: "Vitality",
          regiao: "França"
        },
        {
          nome: "Liquid",
          regiao: "América do Norte"
        },
        {
          nome: "Astralis",
          regiao: "Dinamarca"
        }
      ],
      status: "em andamento",
      vencedor: null
    }
  ]);
  
db.createCollection("times");

db.equipas.insertMany([
    {
      nome: "G2 Esports",
      dono: "Carlos Rodríguez",
      jogos: [
        "League of Legends",
        "Valorant",
        "CS:GO"
      ],
      pais: "Europa",
      jogadores: [
        {
          nick: "Caps",
          nacionalidade: "Dinamarca",
          idade: 23,
          posicao: "Mid Laner",
          jogo: "League of Legends"
        },
        {
          nick: "Mixwell",
          nacionalidade: "Espanha",
          idade: 26,
          posicao: "Duelista",
          jogo: "Valorant"
        }
      ]
    },
    {
      nome: "Cloud9",
      dono: "Jack Etienne",
      jogos: [
        "League of Legends",
        "Valorant",
        "CS:GO"
      ],
      pais: "América do Norte",
      jogadores: [
        {
          nick: "Blaber",
          nacionalidade: "EUA",
          idade: 22,
          posicao: "Jungler",
          jogo: "League of Legends"
        },
        {
          nick: "leaf",
          nacionalidade: "EUA",
          idade: 21,
          posicao: "Iniciador",
          jogo: "Valorant"
        }
      ]
    },
    {
      nome: "Bilibili Gaming",
      dono: "Bilibili",
      jogos: [
        "League of Legends"
      ],
      pais: "China",
      jogadores: [
        {
          nick: "Bin",
          nacionalidade: "China",
          idade: 24,
          posicao: "Top Laner",
          jogo: "League of Legends"
        },
        {
          nick: "Elk",
          nacionalidade: "China",
          idade: 22,
          posicao: "Atirador",
          jogo: "League of Legends"
        }
      ]
    },
    {
      nome: "SKT T1",
      dono: "Joe Marsh",
      jogos: [
        "League of Legends"
      ],
      pais: "Coreia do Sul",
      jogadores: [
        {
          nick: "Faker",
          nacionalidade: "Coreia do Sul",
          idade: 27,
          posicao: "Mid Laner",
          jogo: "League of Legends"
        },
        {
          nick: "Oner",
          nacionalidade: "Coreia do Sul",
          idade: 21,
          posicao: "Jungler",
          jogo: "League of Legends"
        }
      ]
    },
    {
      nome: "LOUD",
      dono: "Bruno PlayHard",
      jogos: [
        "League of Legends",
        "Valorant"
      ],
      pais: "Brasil",
      jogadores: [
        {
          nick: "Tininho",
          nacionalidade: "Brasil",
          idade: 25,
          posicao: "Top Laner",
          jogo: "League of Legends"
        },
        {
          nick: "aspas",
          nacionalidade: "Brasil",
          idade: 20,
          posicao: "Duelista",
          jogo: "Valorant"
        }
      ]
    },
    {
      nome: "Fnatic",
      dono: "Sam Mathews",
      jogos: [
        "League of Legends",
        "Valorant",
        "CS:GO"
      ],
      pais: "Europa",
      jogadores: [
        {
          nick: "Rekkles",
          nacionalidade: "Suécia",
          idade: 27,
          posicao: "Atirador",
          jogo: "League of Legends"
        },
        {
          nick: "Boaster",
          nacionalidade: "Reino Unido",
          idade: 26,
          posicao: "Iniciador",
          jogo: "Valorant"
        }
      ]
    },
    {
      nome: "FURIA",
      dono: "Jaime Pádua",
      jogos: [
        "CS:GO",
        "Valorant"
      ],
      pais: "Brasil",
      jogadores: [
        {
          nick: "KSCERATO",
          nacionalidade: "Brasil",
          idade: 23,
          posicao: "Rifler",
          jogo: "CS:GO"
        },
        {
          nick: "qck",
          nacionalidade: "Brasil",
          idade: 22,
          posicao: "Sentinela",
          jogo: "Valorant"
        }
      ]
    },
    {
      nome: "Vitality",
      dono: "Fabien Devide",
      jogos: [
        "CS:GO",
        "League of Legends"
      ],
      pais: "França",
      jogadores: [
        {
          nick: "ZywOo",
          nacionalidade: "França",
          idade: 24,
          posicao: "AWPer",
          jogo: "CS:GO"
        },
        {
          nick: "Perkz",
          nacionalidade: "Croácia",
          idade: 25,
          posicao: "Mid Laner",
          jogo: "League of Legends"
        }
      ]
    },
    {
      nome: "Astralis",
      dono: "Anders Hørsholt",
      jogos: [
        "CS:GO"
      ],
      pais: "Dinamarca",
      jogadores: [
        {
          nick: "device",
          nacionalidade: "Dinamarca",
          idade: 28,
          posicao: "AWPer",
          jogo: "CS:GO"
        },
        {
          nick: "blameF",
          nacionalidade: "Dinamarca",
          idade: 27,
          posicao: "Rifler",
          jogo: "CS:GO"
        }
      ]
    },
    {
      nome: "paiN Gaming",
      dono: "Paulo Velloso",
      jogos: [
        "League of Legends"
      ],
      pais: "Brasil",
      jogadores: [
        {
          nick: "Robo",
          nacionalidade: "Brasil",
          idade: 24,
          posicao: "Top Laner",
          jogo: "League of Legends"
        },
        {
          nick: "Cariok",
          nacionalidade: "Brasil",
          idade: 23,
          posicao: "Jungler",
          jogo: "League of Legends"
        }
      ]
    },
    {
      nome: "100 Thieves",
      dono: "Matthew 'Nadeshot' Haag",
      jogos: [
        "League of Legends",
        "Valorant",
        "CS:GO"
      ],
      pais: "América do Norte",
      jogadores: [
        {
          nick: "Tenacity",
          nacionalidade: "Canadá",
          idade: 21,
          posicao: "Top Laner",
          jogo: "League of Legends"
        },
        {
          nick: "Asuna",
          nacionalidade: "EUA",
          idade: 20,
          posicao: "Duelista",
          jogo: "Valorant"
        }
      ]
    }
  ]);
  