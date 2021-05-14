import { Component, OnInit } from '@angular/core';
import { Product, ProductColors } from '../others/product.types';
import { DataService } from '../servises/data.service';
import { HttpService } from '../servises/http.service';

@Component({
  selector: 'app-admin',
  template: `


<button nz-button (click)="addRow()" nzType="primary">Add</button>
    <br />
    <br />
    <!-- [nzData]="products" -->
    <nz-table #editRowTable nzBordered >
      <thead>
        <tr>
          <th>company</th>
          <th>title</th>
          <th>price</th>
          <th>id</th>
          <th>category</th>
          <th>added</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of products$ | async" class="editable-row">
          <td>
            <div class="editable-cell" [hidden]="editId === data.id" (click)="startEdit(data.id)">
              {{ data.company }}
            </div>
            <input [hidden]="editId !== data.id" type="text" nz-input [(ngModel)]="data.company" (blur)="stopEdit()" />
          </td>
          <td>{{ data.title }}</td>
          <td>{{ data.price.value }}</td>
          <td>{{ data.id }}</td>
          <td>{{ data.category }}</td>
          <td>21/02/2021</td>
          <td>
            <a nz-popconfirm nzPopconfirmTitle="Sure to delete?" (nzOnConfirm)="deleteRow(data.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>

  `,
  styles: [`
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
  `]
})
export class AdminComponent implements OnInit {

  public products$ = this.data.getProducts()

  // public getProducts(): void {
  //   const url = '/api/others/product.data.json';
  //   this.http.get(url).then((response) => {
  //     return this.products = response;
  //   });
  // }

  constructor(private http: HttpService, private data: DataService) { }



  i = 0;
  editId: string | null = null;
  listOfData: Product[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  // addRow(): void {
  //   this.listOfData = [
  //     ...this.listOfData,
  //     {
  //       id: 1,
  //       company: 'Google',
  //       title: 'Smartphone Google Pixel 4 XL 6/128GB',
  //       image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg',
  //       category: 'smartphone',
  //       rating: {
  //         value: 5,
  //         reviews: 4
  //       },
  //       price: {
  //         value: 63000,
  //         discount: 0.17
  //       },
  //       deliveryOptions: {
  //         delivery: '21.07',
  //         postomate: true,
  //         avialable: 1
  //       },
  //       bage: {
  //         color: '#198038',
  //         text: 'выбор покупателей'
  //       },
  //       colors: {
  //         one: {
  //           color: 'black',
  //           image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg'
  //         }
  //       }
  //     },
  //   ];
  //   this.i++;
  // }

    public product =   {
      "id": 3,
      "company": "Samsung",
      "title": "Smartphone Samsung Galaxy S21 5G 8/256GB",
      "image": "https://avatars.mds.yandex.net/get-mpic/4401552/img_id6431146225573164350.jpeg/orig",
      "category": "smartphone",
      "rating": {
        "value": 3,
        "reviews": 7
      },
      "price": {
        "value": 25000,
        "discount": 0
      },
      "deliveryOptions": {
        "delivery": "21.07",
        "postomate": false,
        "avialable": 0
      },
      "bage": {
        "color": "gray",
        "text": "лучший выбор"
      },
      "colors": {
        "one": {
          "color": "silver",
          "image": "https://avatars.mds.yandex.net/get-mpic/4401552/img_id6431146225573164350.jpeg/orig"
        },
        "two": {
          "color": "pink",
          "image": "https://avatars.mds.yandex.net/get-mpic/4484220/img_id1905100450954863753.jpeg/orig"
        }
      }
    }
  response


  addRow(): void {
    const url = '/api/others/product.data.json';
    this.http.post(url, this.product).then((response) => {
      this.response = response
      console.log(this.response)
    })
  }

  deleteRow(id: string): void {
    // this.products = this.products.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    // this.getProducts();
  }
}
