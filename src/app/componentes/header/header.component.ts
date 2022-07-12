import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/sevicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public usuario: Usuario | undefined;
  
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

}
