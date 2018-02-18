import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


import { Product } from '../models/product.model';

import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

const productsList: Array<Product> = [
  new Product(1, 'Томат, 1кг', 'Класс 1. Сорт F-190.', 2.99, 'Турция', 'хранить при t от +1 °C до +3 °C и относительной влажности \
  воздуха 90-99 %, 29 дней с даты упаковывания.', 'Ucak Karfesler Gida Seracilik Nakliye Plastik san ve tic.ltd.sti., Tepecik Mah, \
  Kusadasi Yeiu Ozari No: 79 Safarihisar / IZMIR, Турция.', false, 1000),
  new Product(2, 'Перец красный, 1 кг.', 'Сорт Калифорния ред.', 7.85, 'Голландия', 'хранить при t от 7 °C до 9 °C и относительной \
  влажности воздуха 85-90%, 30 суток.', 'Arkadia Food International, Испания.', false, 1000),
  new Product(3, 'Капуста белокочанная 1 кг.', 'Урожай 2017 г.', 0.45, 'Беларусь', 'хранить при температуре воздуха от 0 до 1 С и \
  относительной влажности 90-95%. Срок годности 60 суток.', 'ООО "ГринОпт", 220025, г. Минск, ул. Слободская, д. 131, РБ.', false, 1000),
  new Product(4, 'Морковь свежая 1 кг.', 'Не мытая', 0.59, 'Беларусь', 'хранить при температуре от 0 °С до 1 °С и относительной влажности\
   воздуха 90- 95 %, 90 суток.', 'Заготовитель: ООО "ДаоЛогистик", 223018, Минская обл., Минский р-н, д. Тарасово, Тарасовский проезд, \
   д.1, к.22. Поставщик: ООО "ГринОпт", г. Минск, ул. Слободская, 131/27.',  false, 1000),
  new Product(5, 'Чеснок 1 кг.', 'содержание клетчатки в 100 г продукта 2.1 г.', 4.99, 'Китай', 'хранить при температуре от -1 °С \
  до +2 °С и относительной влажности воздуха 90-95 %, 180 суток.', 'Jining Haijiang Trading CO.LTD, Guanya International Mansion, \
  1601-1609, Wutaizha Rd, Jining, Shandong, Китай.', false, 1000),
  new Product(6, 'Томат «Слива» 1 кг.', 'Класс 1', 3.59, 'Украина', '', '', false, 1000),
  new Product(8, 'Капуста ранняя 1 кг.', 'Сорт Парел.', 1.09, 'Македония', 'хранить при температуре воздуха от 0 °С до 4 °С и \
  относительной влажности воздуха 95-100 %.', 'TD "ORE PROM" DOOEL, s.Prosenikovo 68, 2400 Strumica R.Macedonia, Бывшая Югославская\
   Республика Македония (Македония)', false, 1000),
  new Product(7, 'Томат черри сливка 250 г.', 'Сорт Daniela, категория 1.', 2.99, 'Марокко', 'хранить при t от +6 °C до +8 °C и \
  относительной влажности воздуха 85-90%. Срок годности 29 суток. Дата сбора указана на упаковке.', '"SAS Selectfood", \
  Марокко.', false, 1000),
  new Product(9, 'Капуста пекинская, 1 кг.', 'Сорт Билко.', 1.65, 'Польша', 'хранить при t +2 °С и относительной влажности воздуха 90-99%.\
   Срок хранения 30 суток.', 'PHU Bemo Sp Jawna. 99-100 Leczyca, Польша.', false, 1000),
  new Product(10, 'Лук репчатый, 1кг.', 'Сорт 1. Урожай: 2017 года.', 0.49, 'Беларусь', 'хранить при температуре от +10 до +14 С и\
   относительной влажности 85-90%. Срок годности с даты упакования 30 суток.', 'КСУП "Тепличное", РБ, 247007, Гомельская обл., \
   Гомельский р-н, д. Березки, п/о Улуковье.', false, 1000),
  new Product(11, 'Свекла 1 кг.', 'Урожай 2017 года.', 0.68, 'Беларусь', 'хранить при t от 0 до +10°C и относительной влажности воздуха \
  85-95 %, не более 40 дней. Дата сбора указана на упаковке.', 'Гнояник Ю.А., г. Минск, ул. Гурского, д. 35, кв 112.', false, 1000),
  new Product(12, 'Сельдерей стеблевой, 1 кг.', '1 категория.', 3.25, 'Польша', 'хранить при t от +1 до +3 °C градусов и относительной \
  влажности воздуха 90-99%, 29 суток.', 'PHU Bemo Sp Jawna, Польша.', false, 1000),
  new Product(13, 'Имбирь 1 кг.', 'Класс 1.', 6.99, 'Китай', 'хранить при температуре от 4 °С до 6°С и относительной влажности воздуха \
  85-90 %, 90 суток', 'Shandong Goodfarmer International Trading Co., LTD, West Jinshan Road, Китай', false, 1000),
  new Product(14, 'Картофель свежий, 1 кг.', 'Урожай 2017 г.', 0.79, 'Беларусь', 'хранить при t от 1°C до 3°C и относительной влажности \
  воздуха не более 90-95%. Срок годности 6 месяцев, с даты упаковывания.', 'ОАО "Комбинат "Восток" Гомельский р-н, Гомельская область, \
  п. Урицкое, РБ', false, 1000),
  new Product(15, 'Перец чили 1 кг.', '1 категория.', 10.99, 'Польша', 'хранить при t +5 °С и относительной влажности воздуха 90-99%, \
  30 суток.', 'PHU Bemo Sp Jawna 99-100 Leczyca, Польша.', false, 1000),
];

const productsListPromise = Promise.resolve(productsList);

// const productsListObservable: Observable<Array<Product>> = of(productsList);


@Injectable()
export class ProductService implements OnDestroy {
  private subscription: Subscription;
  constructor() { }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // getProduct(id: number | string): Promise<Product> {
  //   return this.getProducts()
  //     .then(tasks => tasks.find(task => task.id === +id))
  //     .catch(() => Promise.reject('Error in getTask method'));
  // }

  getProductById(id: number | string): Promise<Product> {

    return this.getProducts1()
    .then(products => products.find(product => product.id === +id))
    .catch(() => Promise.reject('Error in getTask method'));



    // return this.getProducts().then..find((i) => i.id === +id);
  }

  // getProducts(): Observable<Product[]> {
  //   return productsListObservable;
  // }

  addProduct(task: Product): void {
    productsList.push(task);
  }

  updateProduct(task: Product): void {
    let i = -1;
    productsList.forEach((item, index) => {
      if (item.id === task.id) {
        i = index;
        return false;
      }
    });
    if (i > -1) {
      productsList.splice(i, 1, task);
    }
  }

  getProducts1(): Promise<Product[]> {
    return productsListPromise;
  }
  getProducts(): Array<Product> {
    return productsList;
  }
}


