import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

	cursos: String[] = ['Angular 8'];
	mostrarCursos: Boolean = false;

  constructor() { }

  ngOnInit() {
	}

	onMostrarCursos(): void{
		this.mostrarCursos = !this.mostrarCursos;
	}
	


}
