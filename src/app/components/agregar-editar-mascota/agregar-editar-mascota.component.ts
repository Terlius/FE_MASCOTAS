import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {

  fGroup: FormGroup = new FormGroup({});
  id: number;
  operacion: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotasService,
    private _snackBar: SnackBarService,
    private router: Router,
    private aRouter: ActivatedRoute
    
  ) { 
    this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
    if(this.id !== 0){
      this.operacion = 'Editar mascota';
      this.obtenerMascota(this.id);
    }else{
      this.operacion = 'Agregar mascota';
    }
     
  }

  ngOnInit(): void {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      color: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      edad: ['', [Validators.required]],
    });

  }

  obtenerMascota(id: number){
    this.loading = true;

    this.mascotaService.getMascota(id).subscribe({

      next: (mascota: Mascota) => {
        this.fGroup.patchValue({
          nombre: mascota.nombre,
          raza: mascota.raza,
          color: mascota.color,
          peso: mascota.peso,
          edad: mascota.edad,
        });
        this.loading = false;
      },
      error: (error) => {
        return console.log(error);
      }

    });


  }

  agregarEditarMascota(){
    
    let mascota: Mascota = {
      nombre: this.fGroup.get('nombre')?.value,
      raza: this.fGroup.get('raza')?.value,
      color: this.fGroup.get('color')?.value,
      peso: this.fGroup.get('peso')?.value,
      edad: this.fGroup.value.edad

    }

    if(this.id !== 0){
      this.editarMascota(mascota);
    
    }else{
      this.agregarMascota(mascota);
    }

   

  }

  editarMascota(mascota: Mascota){
    this.loading = true;
    mascota.id = this.id;
    this.mascotaService.updateMascota(this.id, mascota).subscribe(()=>{
     
        this.loading = false;
        this._snackBar.mostrarMensaje('Mascota editada correctamente');  
        this.router.navigate(['/listado-mascotas']);
     
    });
  }



  agregarMascota(mascota: Mascota){
    this.mascotaService.createMascota(mascota).subscribe({

      next: (mascota: Mascota) => {
        this._snackBar.mostrarMensaje('Mascota agregada correctamente');
        this.router.navigate(['/listado-mascotas']);
      },
      error: (error) => {
        return console.log(error);
      }

    }

    );
  }


  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    input.value = inputValue.replace(/[^0-9]/g, '');
  }



}
