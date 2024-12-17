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

  static getFeaturedestinations() {
    return gql`
      query getFeaturedDestinations {
        destinations(where: { featured: true }, orderBy: featuredsort_ASC) {
          id
          name
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

  static getTestimonials() {
    return gql`
      query getTestimonials {
        testimonials(orderBy: order_ASC) {
          id
          quote
          name
          organization
        }
      }
    `;
  }
}
