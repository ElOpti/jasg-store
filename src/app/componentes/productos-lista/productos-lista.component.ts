import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { response } from 'express';
import { CartProducto } from '../../interfaces/cart-producto';

@Component({
    selector: 'app-productos-lista',
    templateUrl: './productos-lista.component.html',
    styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent {
    @Input() producto?: Producto;
    cart: CartProducto[] = []

    add(producto: any): void{
        console.log("Estoy comprando " + producto?.nombre)
    
        //Cargar LocalStorage
        this.cart = JSON.parse(localStorage.getItem('cart') as string);
    
        // Buscar si el producto ya está en el carrito
        const existingProductIndex = this.cart.findIndex(elem => elem.id === producto?.id);
      
        if (existingProductIndex !== -1) {
          // Si el producto ya está en el carrito, aumentar la cantidad
          this.cart[existingProductIndex].cantidad += 1;
    
        }else{
          this.cart.push({
            id: producto?.id as number,
            nombre: producto?.nombre as string,
            descripcion: producto?.descripcion as string,
            precio: producto?.precio as number,
            marca: producto?.marca as string,
            cantidad: 1
          })
        }
    
    
    
      //Almacenar LocalStorage
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    
    productos: Producto[] = [];

    constructor(private productoService: ProductosService) { }

    ngOnInit() {
        this.productoService.getProductos().subscribe(
            response => {
                this.productos = response
            }
        )
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

}
