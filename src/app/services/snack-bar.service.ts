import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar,

  ) { }


  mostrarMensaje(mensaje: string){
    this._snackBar.open(mensaje, undefined, {
      horizontalPosition: 'center' ,
      
      duration: 1000,
      panelClass: 'center',
       
              
    });


  }
}
