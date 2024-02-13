# React Native Menu


O projeto do React Native Menu é um aplicativo móvel de entrega de alimentos desenvolvido com o objetivo de proporcionar uma experiência eficiente e intuitiva aos usuários.

## Tecnologias Utilizadas

- **Tailwind CSS com NativeWind**: Utilizado para estilização, proporcionando uma interface amigável e responsiva.
- **Fontes Personalizadas do Google Fonts**: Incorporadas ao aplicativo para uma apresentação visual atraente.
- **clsx**: Biblioteca utilizada para aplicação condicional de classes, simplificando a manipulação de estilos.
- **Zustand**: Gerenciamento de estado global, facilitando a comunicação entre os componentes da aplicação.
- **react-native-keyboard-aware-scroll-view**: Melhora a interação com campos de entrada, proporcionando uma experiência de usuário mais fluida.
- **AsyncStorage**: Garante a persistência dos dados localmente no dispositivo do usuário, mantendo a consistência das informações entre as sessões do aplicativo.

## Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o aplicativo com `npx expo start`.


### Para criar o arquivo
- npx create-expo-app --template

e selecionou a opção do Navigation ( Typescript )


### Para rodar
- npx expo start


### Uso do Tailwind CSS  -  NativeWind
- npm i nativewind@2.0.11
- npm i tailwindcss@3.3.2 --save-dev

#### Criar o arquivo de configração do tailwind
- npx tailwindcss init   / ou cria manualmente

- configurar o arquivo - tailwind.config e o babel.config

#### Instalar a font
- npx expo install expo-font @expo-google-fonts/inter

#### Conseguir aplicar as classes de forma condicional, ajuda a simplificar o código (ajudou a fazer o hover)
- npm i clsx

#### Uso do Zustand para trabalhar com estados globais - fazer a sacola de compras atualizar o numero em cima
- npm install zustand

#### Instalação da biblioteca para a vizualização do teclado do input ficar melhor
- npm i react-native-keyboard-aware-scroll-view --save

### Persistir os dados  -- Guardar os dados no celular do cliente  -- AsyncStorage
- npx expo install @react-native-async-storage/async-storage