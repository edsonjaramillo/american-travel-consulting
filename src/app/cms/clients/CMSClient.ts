import type { Destination, Testimonial } from '@/app/cms/types';

import { GQLRequest, gqlClient } from '@/app/cms/clients/GQLRequest';
import { Query } from '@/app/cms/queries/Query';

// create a generic that allows me to destructure the response based on the type
type Res<T> = {
  [key: string]: T;
};

class CMSClient {
  gql: GQLRequest;
  constructor() {
    this.gql = gqlClient;
  }

  //   async getCTA() {
  //     const id = 'clkoi4o1y1nb20bipwng0hxic';
  //     const { callToAction } = await this.gql.request<Res<CTA>>(Query.getCTA(), {
  //       variables: { id },
  //     });
  //     return callToAction;
  //   }

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
}

export const cms = new CMSClient();
