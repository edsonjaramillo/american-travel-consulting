type GQLOptions = {
  cache?: RequestCache;
  variables?: Record<string, unknown>;
};

export class GQLRequest {
  constructor(private readonly endpoint: string) {}
  async request<T>(query: string, opts?: GQLOptions): Promise<T> {
    const variables = opts?.variables || {};
    // const cacheOptions = opts?.cache || 'default';
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      cache: opts?.cache || 'default',
    });
    const json = await response.json();
    return json.data as T;
  }
}

const CMS_ENDPOINT = process.env.CMS_ENDPOINT as string;
export const gqlClient = new GQLRequest(CMS_ENDPOINT);
