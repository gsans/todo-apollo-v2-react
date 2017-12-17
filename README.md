# TodoApolloV2 React

<img src="https://image.ibb.co/dty5x6/ezgif_com_video_to_gif_53.gif">

## Technology stack

This application integrates the following technologies:
- [Apollo Client 2.0](http://dev.apollodata.com) to communicate with GraphQL Server
- [graphcool](http://graph.cool) providing the GraphQL Server
- [Create React App](https://github.com/facebookincubator/create-react-app)

## Usage

You can add todos and toggle their status. If you open different windows each will be updated accordingly.

## Development

If you have any questions feel free to ping me on [@gerardsans](http://twitter.com/gerardsans).

### Install

First, clone the repo via git:

```bash
$ git clone https://github.com/gsans/todo-apollo-v2-react.git
```

And then install dependencies:

```bash
$ cd todo-apollo-v2-react && npm i
```

### graphcool GraphQL Server Setup

In order to run this project you need to create the data model (schema) below using [graphcool](http://graph.cool) console online or graphcool CLI. 

## Todo App Schema

This is the schema used

```graphql
type Todo @model {
  id: ID! @isUnique
  text: String!
  complete: Boolean!
}
```

### Create a GraphQL Server using this schema and graphcool CLI. On the `todo-apollo-v2-react` folder run the following commands:

```bash
$ npm install -g graphcool
```

### Create a local service definition in a new directory called `server`
```bash
graphcool init server
```
### Open `./server/types.graphql` and add the type definitions
### Deploy the server
```bash
cd server
graphcool deploy
```

### Replace client URIs 

Edit `/src/client.js` and replace `ADD_YOUR_API_KEY_HERE` with the endpoints from the previous step.

```javascript
function setupLink() {
  const httpLink = new HttpLink({
    uri: `https://api.graph.cool/simple/v1/ADD_YOUR_API_KEY_HERE`
  });
  ...
  const wsLink = new WebSocketLink({
    uri: `wss://subscriptions.graph.cool/v1/ADD_YOUR_API_KEY_HERE`,
    options: { reconnect: true }
  });
```

### Run
```bash
$ npm start
```

Navigate to `http://localhost:3000`. The app will automatically reload if you change any of the source files.

> Note: requires a node version >=6.x

## License
MIT © [Gerard Sans](https://github.com/gsans)