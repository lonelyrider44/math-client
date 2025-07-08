import { Component } from '@angular/core';
import { Question } from '../modules/question/question';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    standalone: false
})
export class TestComponent {

  public q: Question[] = [
    // 'Izračunati površinu i zapreminu akvarijuma oblika kvadra, ako je $a=17cm$, $b=23cm$, $c=6cm$.',
    // 'Površina kocke je $P=1014cm^2$. Izračunati zapreminu kocke.',
    // 'Zapremina kocke je $512000l$. Izračunati površinu kocke.',
    // 'Površina kvadra je $596cm^2$. Izračunati zapreminu kvadra, ako je $a=12cm$ i $b=14cm$.',
    // 'Zapremina kvadra je $1440l$. Izračunati površinu kvadra, izraženu u $cm^2$, ako je $a=18dm$ i $c=8dm$.',
    // {text: '$a\\cdot a = 81$. $a=?$'},


    // {text: '$x\\cdot x = 225$. $a=?$'},
    // {text: '$x\\cdot x = 441$. $a=?$'},
    // {text: '$x\\cdot x = 625$. $a=?$'},
    // { text: 'Površina kocke je $1176m^2$. Izračunati zapreminu kocke.' },
    // { text: 'Površina kvadra je $952cm^2$. Ako je $a=19cm$, $c=12cm$, izračunati zapreminu kvadra.' },
    // '$x\\cdot x = 625$. $a=?$',

    //a=10, O=120, P=600, V=1000
    // { text: 'Zbir svih ivica kocke je $120cm$. Izračunati površinu i zapreminu kocke.' },
    { text: 'Zbir svih ivica kocke je $132cm$. Izračunati površinu i zapreminu kocke.' },
    //a=22, b=10,c=18, O=200, P=1592, V=3960
    // { text: 'Zbir svih ivica kvadra je $200cm$. Ako je $a=22cm$ i $c=18cm$, izračunati površinu i zapreminu kvadra.' },
    { text: 'Zbir svih ivica kvadra je $224cm$. Ako je $a=22cm$ i $b=29cm$, izračunati površinu i zapreminu kvadra.' },
    //a=15,b=5,c=30, O=200, P=1350,V=2250
    // { text: 'Zapremina kvadra je $2250l$. Izračunati površinu kvadra. $a=15cm, $b=5cm$.' },
    { text: 'Zapremina kvadra je $2025l$. Izračunati površinu kvadra. $a=15dm$, $c=27dm$.' },
    //a=60,O=720, P=21600,V=216000
    // { text: 'Zapremina kocke je $216000l$. Izračunati površinu kocke.' },
    { text: 'Zapremina kocke je $64000l$. Izračunati površinu kocke.' },
    //a=14,O=168, P=1176,V=2744
    // { text: 'Površina kocke je $1176cm^2$. Izračunati zapreminu kocke.' },
    { text: 'Površina kocke je $294cm^2$. Izračunati zapreminu kocke.' },
    //a=17, b=7,c=12, O=144, P=814, V=1428
    // { text: 'Površina kvadra je $814cm^2$. Izračunati zapreminu kocke, ako je $b=7cm$, $c=12cm$.' },
    { text: 'Površina kvadra je $2280cm^2$. Izračunati zapreminu kvadra, ako je $b=24cm$, $c=15cm$.' },
  ];
  public kvadar:Kvadar = new Kvadar;
  public kocka:Kocka = new Kocka;


  randomKvadar() {
    this.kvadar = new Kvadar;
  }
  randomKocka(){
    this.kocka = new Kocka;
  }
  ngOnInit(){

  }
}

class Kvadar {

  public a: number;
  public b: number;
  public c: number;

  constructor() {
    this.a = Math.floor(3 + Math.random() * 30);
    this.b = Math.floor(3 + Math.random() * 30);
    this.c = Math.floor(3 + Math.random() * 30);
  }

  o() {
    return 4 * this.a + 4 * this.b + 4 * this.c;
  }
  p() {
    return 2 * (this.a * this.b + this.a * this.c + this.b * this.c);
  }
  v() {
    return this.a * this.b * this.c;
  }
  toString(){
    return `Kvadar: $a=${this.a}cm$, $b=${this.b}cm$, $c=${this.c}cm$, $O=${this.o()}cm$, $P=${this.p()}cm^2$, $V=${this.v()}cm^3$`;
  }
}

class Kocka {

  public a: number;

  constructor() {
    this.a = Math.floor(3 + Math.random() * 30);
  }

  o() {
    return 12 * this.a;
  }
  p() {
    return 6 * this.a * this.a;
  }
  v() {
    return this.a * this.a * this.a;
  }
  toString(){
    return `Kocka: $a=${this.a}cm$, $O=${this.o()}cm$, $P=${this.p()}cm^2$, $V=${this.v()}cm^3$`;
  }
}
