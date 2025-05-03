import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common'; 
@Component({ 
selector: 'app-factorial', 
templateUrl: './factorial.component.html', 
styleUrls: ['./factorial.component.css'], 
imports: [FormsModule,NgIf], 
}) 
export class FactorialComponent { 
numero: number | null = null; 
resultado: number | null = null; 
error: string | null = null; 
calcularFactorial(): void { 
if (this.numero === null || this.numero < 1 || this.numero > 9) { 
this.error = 'Por favor, introduce un número entre 1 y 9.'; 
this.resultado = null; 
} else { 
  this.error = null; 
  this.resultado = this.factorial(this.numero); 
} 
} 

factorial(n: number): number { 
if (n === 0 || n === 1) { 
  return 1; 
} 
return n * this.factorial(n - 1); 
} 
} 