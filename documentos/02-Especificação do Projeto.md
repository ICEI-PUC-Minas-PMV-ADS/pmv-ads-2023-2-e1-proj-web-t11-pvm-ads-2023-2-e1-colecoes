# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Administrador </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário responsável pelo gerenciamento e abastecimento do site.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Ter conhecimento sobre necessidades do site através de chamados abertos usuários no site. 

Abastecer a página inicial com informações de notícias atualizadas, verificadas e que promovam interesse pela plataforma. 

Ter acesso que favoreça autonomia de alteração manual dos usuários que constem no banner de colecionadores da semana. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Usuário que irá utilizar o conteúdo e a interface como consumidor.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Obter acesso fácil e rápido a informações sobre seus itens de coleção cadastrados. 

Catalogar os itens com informações personalizadas para preservar a integridade das suas histórias e opiniões. 

Obter contato com outros colecionadores dos mesmos interesses. 

Ter acesso para solicitar suporte, reportar problemas e sugestões sobre a plataforma quando necessário. 

Ter acesso ao seu perfil próprio, onde consiga visualizar seus catálogos, amigos, mensagens, dados pessoais e chamados abertos de forma centralizada e intuitiva.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|ADMINISTRADOR       | consultar chamados de suporte abertos. | fornecer suporte para os usuários e ter conhecimento dos problemas que estão ocorrendo com os clientes na plataforma . |
|ADMINISTRADOR.      | alterar tela principal de notícias.| manter o site atualizado com informações verificadas e atualizadas do momento  |
|ADMINISTRADOR       | fornecer imagens de itens ou analisar imagens pendentes de aprovação, sugeridas pelos usuários clientes.  | Possibilitando a opção de compra de determinado item para colecionadores  
|ADMINISTRADOR       | gerar e filtrar relatórios | ter acesso a informações sobre a movimentação do site para acompanhamento. |
|CLIENTE.            | ter uma caixa de entrada para envio e recebimento de mensagens dos amigos.|realizar interações de texto com outros usuários.  | 
|CLIENTE.            | cadastrar e excluir itens com categorizações personalizadas.|organização dos itens por categorias e armazenamento seguro dos detalhes sobre os itens.  |
|CLIENTE.            | poder alterar a privacidade das minhas coleções.|ter controle dos meus catálogos que serão públicos, privados ou somente para amigos no meu perfil.  | 
|CLIENTE.            | alterar informações de cadastro.|para atualizar dados pessoais, como nome de apresentação, nome de usuário, foto de perfil e e-mail.  |
|CLIENTE.            | visualizar como meu perfil público .| saber como o perfil é apresentado publicamente.  |
|CLIENTE.            | poder adicionar e excluir amigos .| para gerenciar minha rede de contatos.  |
|CLIENTE.            | criar e participar de fóruns .| para interação com outros usuários a respeito de temas específicos .  |
|CLIENTE.            | devo ter acesso aos chamados de suporte que já foram abertos por mim .| para consultar status e resolução dos meus chamados como cliente.  |




## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |Na página inicial, o site deve permitir um cadastro de conta.|Alta | 
| RF-02 |Na página inicial, o site deve permitir realizar o login. |Alta |
| RF-03 |A página inicial deve ter dois banners reservados para imagens de marketing selecionadas pelo perfil administrador, como apresentação do site, suas vantagens e notícias, com o efeito carrossel de movimentação de imagens. |Média  |
| RF-04 |A página inicial deve ter um botão no menu para a tela “Quem Somos”, que dará mais detalhes sobre o site e o grupo desenvolvedor.|Baixa |
| RF-05 |Na página inicial, o site deve permitir um cadastro de conta.|Alta  |
| RF-06 |Na página inicial, o banner de “Colecionadores da Semana” deve apresentar de cada usuário: Foto, Nome de Usuário e Principal Coleção, que seja o catálogo que o usuário possua mais itens cadastrados.|Média |
| RF-07 |Todos os campos no cadastro e login devem ser obrigatórios.|Alta  |
| RF-08 |O acesso a telas de Gerenciamento de Chamados e Alteração de Banners somente o perfil administrador deve ter.|Média |
| RF-09 |No Gerenciamento de Chamados, o perfil administrador deve ter um campo de resolução do chamado e de alterar status do chamado.|Alta |
| RF-10 |Na tela de Alteração de Banners, o perfil administrador deve conseguir fazer upload da imagem, escolher quantos imagens terão.|Média |
| RF-11 |Todos os campos no cadastro e login devem ser obrigatórios.|Média |
| RF-12 |A tela de abertura de chamado, deve ter um campo de Descrição e selecionar opções no campo Assunto como: Desejo reportar um problema no sistema; Desejo fazer uma denúncia; Enviar uma sugestão; Outros assuntos.|Média |
| RF-13 |Na abertura de chamado deve-se permitir anexar uma imagem.|Média |
| RF-14 |Todos os tipos de perfis após logados, na tela interna, terão um menu lateral esquerdo com as funções disponíveis. |Média |
| RF-15 |A tela Minhas Coleções deverá apresentar os botões: Filtrar Pastas por Ordem Alfabética e Criar Nova Pasta.|Baixa |
| RF-16 |A tela Meus Chamados, deve permitir consultar o status dos seus chamados.|Média |
| RF-17 |A tela Caixa de Entrada deve permitir enviar, receber e visualizar mensagens de texto.|Média |
| RF-18 |A tela de Alterar Foto deve ser apresentada ao clicar em Alterar Foto no menu esquerdo. |Baixa |
| RF-19 |A tela interna de uma pasta deve apresentar os botões: Filtrar Pastas por Ordem Alfabética e Adicionar Novo Item.|Média |
| RF-20 |O botão de Adicionar Novo Item só poderá aparecer quando o usuário estiver na tela dentro de uma pasta.|Alta |
| RF-21 |A tela Meus Chamados, deve permitir consultar o status dos seus chamados.|Alta |
| RF-22 |A tela de Adicionar Novo Item deverão ter os campos: Título do Item; Categoria; Descrição; Data de Aquisição; História da Aquisição; Avaliação Pessoal; Foto Personalizada; Origem/Autor.|Alta |
| RF-23 |Ao clicar no nome de outro usuário, a aplicação deve ser redirecionada para a tela de Perfil desse usuário.|Média |
| RF-24 |A tela Perfil será apenas para exposição, sem botões ou interações, nessa tela será apresentada somente: Nome do Usuário; Foto; Itens (separados pela categoria).  .|Baixa |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |Aplicação deve permitir visualização em dispositivos diversos. |Média | 
| RNF-02 |Aplicação deve permitir meios de compartilhamento Web.  |Alta  |
| RNF-03 |Os Gerenciamento de Chamados deve ter a opção de importar para Excel. |Alta  |
| RNF-04 |Na tela Gerenciamento de Chamados deve ter a opção de imprimir. |Média |  
| RNF-05 |A aplicação deve ser compatível com os navegadores. Deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge. |Alta |
| RNF-06 |A aplicação deve ter bom nível de contraste entre os elementos da tela.|Média |
| RNF-07 |A aplicação web deve possuir um bom desempenho de tempo. Estimativa: Processamento de telas em até 15 segundos. |Média |

**Prioridade: Alta / Média / Baixa. 

