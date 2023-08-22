import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent  {
  loading: boolean = false;

  displayedColumns: string[] = [ 'name', 'color', 'raza', 'edad', 'peso', 'acciones'];
  
  dataSource = new MatTableDataSource<Mascota>();

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _mascotas: MascotasService) { }

  ngOnInit(){
    this.obtenerMascotas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarMascota(id: number){
    this.loading = true;
  
    this._mascotas.deleteMascota(id).subscribe( {
      next: () => {
        this.obtenerMascotas();
        this.mostrarMensajeEliminacion();
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
      }

        
    });
      


     
   

    
  }

  mostrarMensajeEliminacion(){
    this._snackBar.open('La mascota ha sido eliminada', undefined, {
      horizontalPosition: 'center' ,
      
      duration: 1000,
      panelClass: 'center',
       
              
    });
  }



  obtenerMascotas(){
    this.loading = true;
    this._mascotas.getMascotas().subscribe({
      next: (mascotas) => {
        this.dataSource.data = mascotas;
        this.loading = false;
      }
      , error: (error) => {
        console.log(error);
      }
    }
      
    );

  }
}
