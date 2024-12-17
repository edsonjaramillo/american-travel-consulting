import { gql } from 'graphql-request';

export class Query {
  static getDestinations() {
    return gql`
      query getDestinations {
        destinations(orderBy: name_ASC) {
          id
          name
          description
          slug
          main {
            id
            url
          }
          mainalt
        }
      }
    `;
  }
}
