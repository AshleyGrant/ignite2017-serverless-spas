import { Aurelia } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration();

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  const httpClient: HttpClient = aurelia.container.get(HttpClient);
  
  httpClient.configure(config => {
    config//.useStandardConfiguration()
      .withDefaults({
        headers: {
          'x-functions-key': environment.apiKey,
          'Content-Type': 'application/json'
        }
      })
      .withBaseUrl(environment.apiBaseUrl);
  });

  aurelia.use.instance(HttpClient, httpClient);

  aurelia.start().then(() => aurelia.setRoot());
}
