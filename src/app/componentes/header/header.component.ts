import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
public usuarios:Usuario[]=[];
public editUsuario:Usuario | undefined;
constructor(private headerService: HeaderService, private autenticacionServicio:AutenticacionService ){}


ngOnInit(): void {
    this.headerService.getUser().subscribe(data=>{
      console.log ("usuariowe"+ JSON.stringify(data));
      this.usuario=data;
    })
    this.aut=this.autenticacionServicio.UsuarioAutenticado;
  }

  public Opciones(mode:String, usuario?: Usuario):void{
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode==='edit'){
      this.editUsuario=usuario;
      button.setAttribute('data-bs-target', '#editUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }

 
  public onUpdateUsuario(usuario: Usuario){
    this.editUsuario=this.usuario;
    document.getElementById('add-usuario-form')?.click();
    this.headerService.updateUsuario(usuario).subscribe({
      next: (response:Usuario)=>{ console.log(response);
        this.headerService.getUser();
        window.location.reload()
      },
      error:(error:HttpErrorResponse)=>{ alert(error.message);        
      }     
    })
  }
 
  
}
