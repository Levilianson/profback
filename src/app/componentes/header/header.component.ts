import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/sevicios/autenticacion.service';
import { HeaderService } from 'src/app/sevicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  /*public usuario: Usuario | undefined;
  
  public editUsario : Usuario | undefined;
  constructor(private HeaderService : HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.HeaderService.getUser().subscribe({
      next: (Response: Usuario) =>{
      this.usuario=Response;
      },
      error:(error:HttpErrorResponse)=>{ alert(error.message);}
    })
  }
}*/
usuario:any;
aut:any;
usua:any;
constructor(private headerService: HeaderService, private autenticacionServicio:AutenticacionService ){}


ngOnInit(): void {
    this.headerService.getUser().subscribe(data=>{
      console.log ("usuariowe"+ JSON.stringify(data));
      this.usuario=data;
    })
    this.aut=this.autenticacionServicio.UsuarioAutenticado;
  }
  
}
