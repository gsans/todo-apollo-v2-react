import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjax0ur7z58e701854s05lvdv'
});

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/cjax0ur7z58e701854s05lvdv
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
  /* if false use */ httpLink,
);

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});