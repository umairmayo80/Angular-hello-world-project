import { Injectable } from '@angular/core';

@Injectable({
  // providedIn: 'root'
  providedIn: 'any'
})
export class ConfigService {

  constructor() { 
    console.log("config-service-constructor called")
  }
}
