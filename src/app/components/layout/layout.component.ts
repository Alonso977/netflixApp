import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() {
  }
  //
  // config: SwiperConfigInterface  = {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 0,
  //     stretch: 0,
  //     depth: 200,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   loop: true,
  // }

  ngOnInit(): void {
  }

  toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }

}
