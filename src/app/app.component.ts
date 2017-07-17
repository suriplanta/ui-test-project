import { Component } from '@angular/core';

export class Location {
  codDepartamento: number;
  departamento: string;
  codProvincia: number;
  provincia: string;
  codDistrito: number;
  distrito: string;
}

const LOCATIONS: Location[] = [
  { 
    codDepartamento: 1, 
    departamento: 'Lima', 
    codProvincia: null, 
    provincia: null, 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 1, 
    departamento: 'Lima', 
    codProvincia: 50, 
    provincia: 'Lima', 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 1, 
    departamento: 'Lima', 
    codProvincia: 51, 
    provincia: 'Barranca', 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 1, 
    departamento: 'Lima', 
    codProvincia: 50, 
    provincia: 'Lima', 
    codDistrito: 202, 
    distrito: 'La Molina' 
  },
  { 
    codDepartamento: 1, 
    departamento: 'Lima', 
    codProvincia: 50, 
    provincia: 'Lima', 
    codDistrito: 203, 
    distrito: 'San Isidro' 
  },
  { 
    codDepartamento: 2, 
    departamento: 'Arequipa', 
    codProvincia: null, 
    provincia: null, 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 2, 
    departamento: 'Arequipa', 
    codProvincia: 63, 
    provincia: 'Arequipa', 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 2, 
    departamento: 'Arequipa', 
    codProvincia: 64, 
    provincia: 'Caylloma', 
    codDistrito: null, 
    distrito: null 
  },
  { 
    codDepartamento: 2, 
    departamento: 'Arequipa', 
    codProvincia: 63, 
    provincia: 'Arequipa', 
    codDistrito: 267, 
    distrito: 'Cercado'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ubigeos';
  category1 = 'Departamento';
  category2 = 'Provincia';
  category3 = 'Distrito';
  
  locations = LOCATIONS;
  
  private shown: string = 'DEPARTAMENTO';
  
}