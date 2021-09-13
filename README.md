# Pegasus

Grupo Petrópolis + SoulCode + Pegasus Squad

Web site do Projeto e Plataforma de Atividades

Elaborado por: Elis Marcela, Felipe Gonçalves, Luiza Gontijo, Pamela Oliveira e Tomé Luan

Link: https://pegasus--squad.herokuapp.com/inicial

Desafio 
O desafio proposto pelo Grupo Petrópolis em parceria com a Soul Code é promover uma experiência de união e aprendizado junto aos seus alunos e ex-alunos, com o desenvolvimento de um projeto para solução web ou app relacionado aos temas de ESG, , sigla que, em inglês, significa Environmental, Social and corporate Governance, algo como melhores práticas ambientais, sociais e de governança em português.

Objetivo
O projeto tem a proposta de desenvolver um website com informações sobre uma ação a ser realizada pelo Grupo Petrópolis juntamente com as Secretarias de Educações dos Estados brasileiros e uma plataforma para cadastro de escolas e atualizações sobre as atividades planejadas.

Dinâmica do Projeto
O representante cadastrado pela escola vai receber um kit de boas vindas contendo um jogo de tabuleiro e figurinhas numeradas que deverão ser coladas nesse tabuleiro de acordo com os códigos recebidos. Esses códigos serão enviados à medida que o representante for realizando acumulando pontos através de coleta de lixo, realização de atividades e engajamento em redes sociais. 
No final do tempo determinado, as escolas com maior pontuação são premiadas.
A proposto inicial de duração é de aproximadamente um mês, mas podem haver divisões para que o projeto seja aplicado em diferentes datas em diferentes regiões.

Requisitos do desafio
- Adequação ao desafio proposto e aos temas de ESG,
sustentabilidade, governança e transformação social;
- Aplicabilidade do sistema para solucionar os problemas
atinentes ao tema;
- Qualidade e avanço no desenvolvimento do protótipo
conceitual;
- Criatividade
- Disrupção da solução;
- Uso adequado das tecnologias (web, mobile, analise de
dados).


Desenvolvimento 
- Aplicativo Mobile ou; 
- Aplicação Web ou; 
- Análise de Dados ou; 
- Junção de todas as aplicações

Tecnologias utilizada
Planejamento e Organização
Trello
Versionamento
Github
Banco de Dados
MongoDB
Programação
NodeJS, ejs, Express, Mongoose, Bootstrap, JQuery, JavaScript, CSS, HTML

Fluxo comum
Usuário não cadastrado (acesso apenas ao site)
Página inicial
Sobré nós
Regulamento
Cronograma
Dúvidas 
Participantes
Entrar (não pode)
Cadastre-se (não consegue)
Página de redes social
Termos de Uso
Grupo Petrópolis

Fluxo Cadastro
Usuário com possibilidade de se cadastrar
O usuário selecionado pela escola como representante poderá se cadastrar para ter acesso à Plataforma de realização do projeto, para isso, além dos fluxos comuns, ele poderá realizar o cadastro pelo link CADASTRE-SE apresentado no menu superior. Com cadastro realizado ele segue para a plataforma, onde poderá ver as atividades propostas.

Fluxo Participante
Usuário já cadastrado 
O usuário que já tiver realizados eu cadastro poderá acessar a plataforma novamente através de usuário e senha escolhidos pelo próprio na realização do login.

Plataforma
A plataforma de atividades contém a área de vídeos didáticos que deverão ser assistidos pelo representante da escola. Nesse vídeos haverão informações sobre reciclagem, sustentabilidade, meio ambiente e outros temas pertinentes ao projeto, além de dicas para aplicação do conhecimento com os alunos da escola.
Também serão disponibilizados links para envio de certificados de envio de lixo reciclável para as cooperativas parceiras e de fotos e vídeos comprovando a realização das atividades propostas com os alunos da escola.
A integração com a plataforma já existente do grupo Petrópolis para atividades com crianças será para que a pontuação gerada nela também contabilize pontos para a escola.
Outra forma de pontuação será através de software para monitoramento de redes sociais, que vão trazer pro projeto pontos específicos para publicação e compartilhamento de atividades sobre a escola e o projeto Recicla+.

Banco de Dados
O banco de dados foi criado em modelo não relacional, com a tecnologia do MongoDB. Os campos do banco são:
    nome: String, nome do representante da escola
    cpf: String, cpf do representante da escola
    email: String, e-mail do representante da escola
    telefone: String, telephone do representante da escola
    nomeU: String, nome de usuário escolhido pelo representante da escola
    senha: String, senha escolhida pelo representante da escola
    escola: String, nome da escola
    alunos: String, quantidade de alunos na escola
    codigo: String, código da escola
    cidade: String, cidade da escola
    estado: String, estado da escola
    envioColeta: String, campo para salvar o envio de certificado de coleta
    pontoColeta: String, campo para salvar os pontos recebidos por certificado de coleta
    envioAtividade: String, campo para salvar o envio de fotos e vídeos das atividades
    pontoAtividade: String, campo para salvar os pontos recebidos por atividades desenvolvidas
    pontoOnline: String, campo para salvar os pontos recebidos pelas atividades online
    pontoEngajamento: String, campo para salvar os pontos recebidos por engajamento em redes sociais



Equipe:
Elis – Desenvolvedora Full Stack
Felipe – Desenvolvedor Mobile
Luiza – Desenvolvedora Full Stack e Mentora
Pamela – Desenvolvedora Full Stack
Tomé – Desenvolvedor Full Stack 
