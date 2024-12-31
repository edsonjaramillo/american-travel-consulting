import { gql } from 'graphql-request';

export class Query {
  static getSlideshowItems() {
    return gql`
      query getSlideshowImages {
        slideshowItems(orderBy: order_ASC) {
          id
          image {
            id
            url
          }
          order
          textColor
          logoColor
        }
      }
    `;
  }

  static getDestination() {
    return gql`
      query getDestination($slug: String!) {
        destination(where: { slug: $slug }) {
          id
          name
          description
          main {
            url
            width
            height
          }
          secondimage {
            url
          }
          thirdimage {
            url
          }
          fourthimage {
            url
          }
          viewport {
            latitude
            longitude
          }
          zoomlevel
          mapitems(orderBy: name_ASC) {
            id
            name
            coordinate {
              latitude
              longitude
            }
            link
          }
        }
      }
    `;
  }

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

  static getPageImage() {
    return gql`
      query getPageImage($page: String!) {
        pageImage(where: { page: $page }) {
          id
          page
          image {
            url
          }
        }
      }
    `;
  }
}
