import { ICarouselItem } from './../../shared/components/carousel/icarousel-item.metadata';


export const CAROUSEL_DATA_ITEMS : ICarouselItem[] = [
  {
    id:1,
    title: {
      first: 'Joyería',
      second: 'Artesanal'
    },
    subtitle: 'Más información aquí...',
    link: '/products',
    image:'assets/images/slide1.JPG'
  },
  {
    id:2,
    title: {
      first: 'DECO',
      second: 'Hogar'
    },
    subtitle: 'Más información aquí...',
    link: '/products',
    image:'assets/images/slide2.jpg'
  },
  {
    id:3,
    title: {
      first: 'Delivery',
      second: ' Gratis'
    },
    subtitle: 'Más información aquí...',
    link: '/products',
    image:'assets/images/slide3.JPG'
  },
]
