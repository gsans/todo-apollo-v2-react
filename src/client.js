import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  link: setupLink(),
  cache: new InMemoryCache()
});

function setupLink() {
  const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/ADD_YOUR_API_KEY_HERE'
  });
  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('authtoken');
    if (token) {
      operation.setContext({
        headers: { Authorization: token }
      });
    }
    return forward(operation);
  })
  const httpSecured = authLink.concat(httpLink);

  const wsLink = new WebSocketLink({
    uri: `wss://subscriptions.graph.cool/v1/ADD_YOUR_API_KEY_HERE
    `,
    options: { reconnect: true }
  });
  const isSubscription = ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  }
  const link = split(
    isSubscription,
    /* if true use  */ wsLink,
    /* otherwise */ httpSecured,
  );
  return link;
}