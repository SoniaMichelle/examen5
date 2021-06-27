import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  /* Y estas funciones hacer referencia a la conexion de la url */
  url='http://localhost/gestor-producto/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }
/* El servidor se comunica con php a travez de las funciones creadas */
/* Todas las funciones estan referenciasdas con su archivo php */
  public mostrarTodos() {
    return this.http.get(`${this.url}recuperar.php`);
  }
  /* Se retorna los datos del http(contructor)
  El post envía una solicitud HTTP y se redirecciona a los archivso.php y se envia de forma JSON 
  JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON y lo manda al php*/
  public alta(articulo:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  public baja(codigo:number) {
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  }
  
  public seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  public modificacion(articulo:any) {
    return this.http.post(`${this.url}modificar.php`, JSON.stringify(articulo));    
  } 
}