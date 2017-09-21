import { autoinject, computedFrom } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject()
export class Home {
  constructor(private httpClient: HttpClient) { }

  public heading = 'Welcome to the Serverless SPA!';
  public firstName = 'John';
  public lastName = 'Doe';
  
  @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public async greet() {
    const response = await this.httpClient.fetch(`greeter/${this.fullName}`);
    const greeting = await response.json();
    alert(greeting);
  }
}
