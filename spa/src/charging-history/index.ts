import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

import {Charge, ChargeDate, Vehicle} from './interfaces';

@autoinject()
export class App {
  selectedVehicle: Vehicle;
  vehicles : Array<Vehicle>;
  history = [];
  constructor(private httpClient: HttpClient) { }

  async activate() {
    const response = await this.httpClient.fetch('vehicles');

    this.vehicles = await response.json();
  }

  async selectVehicle(vehicle) {
    if(vehicle) {
      this.selectedVehicle = vehicle;

      await this.fetchChargingData(this.selectedVehicle.id);
    }
  }

  async fetchChargingData(vehicleId) {
    const response = await this.httpClient.fetch(`charges/${vehicleId}`);

    this.history = await response.json();
  }
}
