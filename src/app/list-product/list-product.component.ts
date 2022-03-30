import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  listProduct: Product[];
   priceMax: number =400;

  constructor() { }


  ngOnInit(): void {
    this.titleApp = 'First Angular App';
    this.listProduct = [
      {
        id: 12,
        title: "T-shirt1",
        price: 130,
        quantity: 10,
        picture: 'https://media.istockphoto.com/vectors/line-art-black-and-white-tshirt-vector-id945304302',
        like: 12,
        description: '100 % couton'
      }, {
        id: 14,
        title: "T-shirt2",
        price: 120,
        quantity: 0,
        picture: 'https://w7.pngwing.com/pngs/430/692/png-transparent-t-shirt-white-crew-neck-top-t-shirt-tshirt-blue-white.png',
        like: 10,
        description: '90 % couton'
      },

    ]
  }
  incrementLike(p: Product): void {
    let i = this.listProduct.indexOf(p);
    if (i != -1) {
      this.listProduct[i].like++;
    }

  }
  buyProduct(p: Product): void {
    let i = this.listProduct.indexOf(p);
    if (i != -1) {
      this.listProduct[i].quantity--;
    }

  }

}
