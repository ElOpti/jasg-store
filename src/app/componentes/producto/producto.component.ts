import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto?: Producto;
  //productoForm = this.fb.group(
    //{
      //value: []
    //}
  //)

 // constructor(private fb: FormBuilder) {
//  }



}
