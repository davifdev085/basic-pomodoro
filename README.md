# Aplicativo Pomodoro

Bem-vindo ao Aplicativo Pomodoro! Esse aplicativo é uma ferramenta de produtividade para ajudar você a gerenciar melhor seu tempo de trabalho e descanso, com uma interface interativa que permite alternar entre sessões de trabalho e intervalos.

## Funcionalidades

- **Contagem de Tempo Pomodoro**: Ciclos de trabalho e descanso predefinidos.
- **Sessão de Trabalho, Pausa Curta e Pausa Longa**: Alterna automaticamente entre o modo de trabalho e os intervalos, com tempos ajustáveis no código.
- **Controle das Tarefas**: Adicione, complete e remova tarefas enquanto o timer está em andamento.
- **Armazenamento das Tarefas**: As tarefas são salvas no `localStorage`, então mesmo ao recarregar a página, você não perde o progresso.

## Estrutura do Projeto

Este projeto é organizado em várias pastas e arquivos, cada um desempenhando uma função específica. Abaixo está uma explicação detalhada dos principais arquivos e pastas para ajudá-lo a entender a estrutura e o propósito de cada componente.

### 1. Pasta `src/`
A pasta `src/` contém o código-fonte do aplicativo React. É onde ficam todos os componentes e o arquivo principal da aplicação.

#### - `src/components/`
Dentro da pasta `src/`, a subpasta `components/` armazena componentes independentes que compõem a interface do aplicativo.

   - **Timer.js**: Este componente é responsável por exibir o temporizador, mostrando os minutos e segundos restantes, bem como o modo atual (trabalho, pausa curta ou pausa longa).

   - **Controls.js**: Componente que contém os botões de controle do timer, permitindo ao usuário iniciar/pausar a contagem regressiva, redefinir o temporizador e alternar entre os diferentes modos (trabalho, pausa curta e pausa longa).

   - **Footer.js**: Este é o rodapé do aplicativo, onde podem ser exibidas informações adicionais ou links de crédito.

#### - `App.js`
Este é o componente principal do aplicativo e funciona como o ponto central que controla os estados, lida com as funções principais (como a contagem regressiva) e exibe todos os outros componentes (Timer, Controls, Footer, etc.). Ele também inclui o código de lógica para alternar entre os modos de trabalho e pausas e gerenciar as tarefas do usuário.

### 2. Pasta `public/`
A pasta `public/` contém arquivos estáticos que são servidos diretamente no navegador, incluindo o arquivo HTML principal.

   - **index.html**: Este é o arquivo HTML principal do aplicativo React. Quando o aplicativo é iniciado, o React injeta o código JavaScript compilado dentro deste HTML para renderizar a interface do usuário. Ele também contém as configurações básicas de layout, links para CSS externo, e outras configurações que afetam a estrutura geral da página.

### 3. Arquivo `README.md`
Este arquivo (`README.md`) é a documentação do projeto, oferecendo informações sobre o propósito, funcionalidades, instruções de uso e como configurar o aplicativo localmente. Este documento é especialmente útil para novos colaboradores ou para referência rápida.

---

Com essa estrutura, o projeto está organizado para facilitar o desenvolvimento e manutenção. Cada componente cumpre uma função específica, ajudando a manter o código limpo e modular.


## Como Usar

1. **Iniciar o Timer**: Clique no botão de "Iniciar" para começar a contagem regressiva.
2. **Parar o Timer**: Clique em "Parar" para pausar o timer.
3. **Alternar entre Modos**:
   - **Pausa Curta**: Altere para uma pausa curta (5 minutos).
   - **Pausa Longa**: Altere para uma pausa longa (15 minutos).
4. **Adicionar Tarefas**: Escreva uma tarefa e clique em "Adicionar Tarefa" para incluí-la na lista.
5. **Gerenciar Tarefas**: Conclua ou remova tarefas da lista de atividades.

## Configurações de Tempo

Os tempos padrão para cada sessão são:
- **Trabalho**: 25 minutos
- **Pausa Curta**: 5 minutos
- **Pausa Longa**: 15 minutos

Esses valores podem ser alterados diretamente no código (variáveis `WORK_TIME`, `SHORT_BREAK`, `LONG_BREAK`).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **CSS**: Estilização básica para o layout do aplicativo.



