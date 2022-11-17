import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/Models/solicitud';
import { SolicitudService } from 'src/app/Service/solicitud.service';

@Component({
  selector: 'app-solicitudregistro',
  templateUrl: './solicitudregistro.component.html',
  styleUrls: ['./solicitudregistro.component.css']
})
export class SolicitudregistroComponent implements OnInit {

  solicitudes: solicitud[]= [];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.solicitudService.getSolicitudes()
    .subscribe(response => this.solicitudes = response);
  }

}
