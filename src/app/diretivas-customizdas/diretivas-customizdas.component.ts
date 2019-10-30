import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizdas',
  templateUrl: './diretivas-customizdas.component.html',
  styleUrls: ['./diretivas-customizdas.component.css']
})
export class DiretivasCustomizdasComponent implements OnInit {
	mostrarCursos: Boolean = false;

  constructor() { }

  ngOnInit() {
	}
	
	onMostrarCursos(): void{
		this.mostrarCursos = !this.mostrarCursos;
	}

}
