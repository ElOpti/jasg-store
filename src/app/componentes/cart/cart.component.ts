import { Component, OnInit } from '@angular/core';
import { CartProducto } from '../../interfaces/cart-producto';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cart: CartProducto[] = []

  productos!: Producto[];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') as string)
  }

  getSeverity(producto: Producto) {
    switch (producto.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

calcularTotal(): number{
  return this.cart.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

}
