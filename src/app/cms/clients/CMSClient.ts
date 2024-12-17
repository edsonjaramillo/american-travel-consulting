import type { Destination } from '@/app/cms/types';

import { Query } from '../queries/Query';
import { GQLRequest, gqlClient } from './GQLRequest';

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

  async getDestinations() {
    const { destinations } = await this.gql.request<Res<Destination[]>>(Query.getDestinations());
    return destinations;
  }
}

export const cms = new CMSClient();
