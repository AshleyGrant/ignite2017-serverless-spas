export interface Vehicle {
  id: Number,
  name: string
}

export interface ChargeDate {
  isoDate: string,
  prettyDate: string
}

export interface Charge {
  plugIn: ChargeDate,
  plugOut: ChargeDate,
  energy: string,
  chargingTime: string
}
