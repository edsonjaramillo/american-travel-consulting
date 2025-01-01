import type { Destination, Employee, PageImage, SlideshowImage, Testimonial } from '@/cms/types';

import { GQLRequest, gqlClient } from '@/cms/clients/GQLRequest';
import { Query } from '@/cms/queries/Query';

// create a generic that allows me to destructure the response based on the type
type Res<T> = {
  [key: string]: T;
};

class CMSClient {
  gql: GQLRequest;
  constructor() {
    this.gql = gqlClient;
  }

  async getSlideshowImages() {
    const { slideshowItems } = await this.gql.request<Res<SlideshowImage[]>>(
      Query.getSlideshowItems(),
    );
    return slideshowItems;
  }

  async getDestination(slug: string) {
    const { destination } = await this.gql.request<Res<Destination>>(Query.getDestination(), {
      variables: { slug },
    });
    return destination;
  }

  async getDestinations() {
    const { destinations } = await this.gql.request<Res<Destination[]>>(Query.getDestinations());
    return destinations;
  }

  async getFeaturedestinations() {
    const { destinations } = await this.gql.request<Res<Destination[]>>(
      Query.getFeaturedestinations(),
      { cache: 'force-cache' },
    );
    return destinations;
  }

  async getTestimonials() {
    const { testimonials } = await this.gql.request<Res<Testimonial[]>>(Query.getTestimonials());
    return testimonials;
  }

  async getEmployees() {
    const { employees } = await this.gql.request<Res<Employee[]>>(Query.getEmployees());
    return employees;
  }

  async getPageImage(page: string) {
    const { pageImage } = await this.gql.request<Res<PageImage>>(Query.getPageImage(), {
      variables: { page },
    });
    return pageImage;
  }
}

export const cms = new CMSClient();
