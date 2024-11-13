# challenge-QA

Este teste faz parte do nosso processo de seleção e visa avaliar suas habilidades técnicas. A tarefa consiste em interpretar e executar as atividades descritas nos cards criados no Jira, utilizando as tecnologias listadas abaixo. Esperamos que você entregue um projeto contendo as instruções de instalação e execução dos testes automatizados, além da definição e redação dos  cenários de teste, bem como a identificação e documentação de bug já conhecido pelo cliente, mas ainda não documentado.

##Tecnologias:

# Para a escrita dos cenários: Gherkin
## Linguagem de programação: JavaScript
## Framework: Cypress
##Instruções Adicionais:

# Faça o login no Jira utilizando o e-mail que você recebeu.
Acesse o board de atividades em Jira e conclua os cards atribuídos a você.

#Entrega:

Envie um Pull Request (PR) com os códigos de automação para o repositório Git: GitHub.
Após o envio do PR, mova os cards no Jira para a coluna "Concluído".

## Detalhes do entregavel : 

```bash
https://qa-automacao.atlassian.net
```

## Geek QA Gear

Este projeto foi criado para fins de testes automatizados e utiliza Docker para simplificar o desenvolvimento e a execução.

## Requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado em sua máquina.

## Configuração do Projeto

### 1. Clonar o Repositório

Abra o terminal do VS Code (ou qualquer terminal de sua preferência) e clone o repositório:

```bash
git clone https://github.com/techops-maitha/challenge-QA.git
```
Em seguida, acesse a raiz do projeto.

### 2. Construir e Iniciar os Contêineres

No terminal do VS Code ou no Linux, execute o seguinte comando para construir e iniciar os contêineres:

```bash
docker-compose up --build
```

### 3. Acessar a Aplicação
Após os contêineres estarem em execução, você poderá acessar a aplicação em seu navegador, através do endereço:

```bash
http://localhost
```

## Estrutura Docker

#### docker-compose.yml: Arquivo de configuração do Docker Compose.
#### Dockerfile: Arquivo de configuração para a criação da imagem Docker.




