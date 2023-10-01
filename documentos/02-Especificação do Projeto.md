# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">...</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>...</td>
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
 


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |Na página inicial, o site deve permitir um cadastro de conta.|Média  | 
| RF-02 |Todos os campos no cadastro e login devem ser obrigatórios. |Baixa |
| RF-03 |No cadastro de novo usuário, o sistema deverá consultar a disponibilidade do nome de usuário desejado, para que não existam perfis com nomes de usuário repetidos. |Alta  |
| RF-04 |Na página inicial, o site deve permitir realizar o login de uma conta já existente. |Alta  |
| RF-05 |A página inicial deve ter dois banners reservados para imagens de marketing selecionadas com o perfil administrador, como apresentação do site, suas vantagens e notícias, com o efeito carrossel. |Média  |
| RF-06 |A página inicial deve ter um atalho para a tela de “Quem Somos”, que dará mais detalhes sobre o site e o grupo desenvolvedor.  |Alta  |
| RF-07 |Na página inicial, o banner de “Colecionadores da Semana” deve apresentar de cada usuário: Foto, Nome de Usuário e Principal Coleção, sendo ela a coleção que possua mais itens cadastrados, apenas 3 perfis por carrossel, conforme modelo. |Alta  |
| RF-08 |O acesso a telas de Gerenciamento de Chamados e Alteração de Banners somente o perfil administrador deve ter. |Alta  |
| RF-09 |O perfil administrador deve ter uma tela para visualizar os chamados abertos. |Alta  |
| RF-10 |A tela de chamados do perfil administrador deve possuir a opção de filtrar chamados por ordem de data de criação ou assunto. |Alta  |
| RF-11 |A tela de abertura de suporte, deve ter as opções de assunto: Desejo reportar um problema no sistema, Desejo fazer uma denúncia, Enviar uma sugestão, Outros.  |Alta  |
| RF-12 |O perfil cliente deve permissão de adicionar amigos a sua rede |Alta  |
| RF-13 |A tela de abertura de chamado deve permitir anexar uma imagem por upload |Alta  |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |A aplicação deve ser compatível a meios de compartilhamento Web. |Média | 
| RNF-02 |Aplicação deve permitir visualização em dispositivos diversos.  |Alta  |
| RNF-03 |Compatível com os principais navegadores disponível no mercado.  |Alta  |
| RNF-04 |A aplicação deve ser compatível com os navegadores O site deve ser compatível com os principais navegadores domercado: Google Chrome, Firefox e Microsoft Edge.|Alta  |
| RNF-05 |Os relatórios devem ter a opção de imprimir. |Média |
| RNF-06 |Os relatórios devem ter a opção de exportar para o Excel.|Média |
| RNF-07 |Os relatórios devem ter filtros. |Alta |

**Prioridade: Alta / Média / Baixa. 

