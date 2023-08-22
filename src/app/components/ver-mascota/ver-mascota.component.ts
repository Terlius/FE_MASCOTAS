import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent {
  id: number;
  mascota!: Mascota;
  loading: boolean = false;

  constructor(
    private _mascotaService: MascotasService,
    private _router: ActivatedRoute,
  ) {
    this.id = Number(this._router.snapshot.params['id']);

  }

  ngOnInit(): void {

      this.obtenerMascota();


  }

  obtenerMascota() {

    this.loading = true;

    this._mascotaService.getMascota(this.id).subscribe(
      {

        next: (mascota: Mascota) => {
          this.mascota = mascota;
          this.loading = false;
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }




}
