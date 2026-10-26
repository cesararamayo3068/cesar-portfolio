import { Component, OnInit } from '@angular/core';
@Component({selector:'app-navbar',templateUrl:'./navbar.component.html',styleUrls:['./navbar.component.css']})
export class NavbarComponent implements OnInit {
  darkMode = true;
  menuOpen = false;
  links = [{label:'Inicio',href:'#home'},{label:'Experiencia',href:'#experience'},{label:'Tecnologías',href:'#skills'},{label:'Proyectos',href:'#projects'},{label:'Formación',href:'#education'},{label:'Contacto',href:'#contact'}];
  ngOnInit():void { const saved=localStorage.getItem('portfolio-theme');this.darkMode=saved !== 'light';this.applyTheme(); }
  toggleTheme():void {this.darkMode=!this.darkMode;localStorage.setItem('portfolio-theme',this.darkMode?'dark':'light');this.applyTheme();}
  closeMenu():void{this.menuOpen=false;}
  private applyTheme():void {document.body.classList.toggle('light-mode',!this.darkMode);document.body.classList.toggle('dark-mode',this.darkMode);}
}
