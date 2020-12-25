import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'app-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  
  identifiant:number;
  afficher:boolean =false;
  materiel:Materiel;
  router: any;

onClick(){
  this.afficher = !this.afficher;
}
  constructor(private materielService:MaterielService,
              private activatedRoute:ActivatedRoute

              // private router:Router // 
              
              ) { }

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params["id"];
    this.materiel= this.materielService.getMaterielById("2");  //this.identifiant// <== parametre     ;
  }
  
  onBackButtonClick(): void{
    this.router.navigate(['/listmateriel']);
  }
 
}
