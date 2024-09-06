import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Pricing.css'

export default function Pricing() {
  return (
   <div className='pricin'>
    <h1 className='secondaryText1'>Our Recommended Products</h1>
    <h2 className='secondaryText2'>Our Beauty Recommendatons are So Good, You’ll Want to Hug Us (but please don’t).</h2>

    <div className='p-img'>
      <ImageList sx={{ width: 600, height: 400 }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
   </div>
  );
}

const itemData = [
  {
    img: './g1.jpeg',
    title: 'Bed',
  },
  {
    img:'./g31.jpeg',
    title: 'Kitchen',
  },
  {
    img: './g23.jpeg',
    title: 'Sink',
  },
  {
    img: './g25.jpeg',
    title: 'Books',
  },
  {
    img: './g26.jpeg',
    title: 'Chairs',
  },
  {
    img: './g27.jpeg',
    title: 'Candle',
  },
  {
    img: './g28.jpeg',
    title: 'Laptop',
  },
  {
    img: './g29.jpeg',
    title: 'Doors',
  },
  {
    img: './g30.jpeg',
    title: 'Coffee',
  },
  {
    img: './g2.jpeg',
    title: 'Sink',
  },
  {
    img: './g6.jpeg',
    title: 'Books',
  },
  {
    img: './g10.jpeg',
    title: 'Chairs',
  },
  {
    img: './g3.jpeg',
    title: 'Sink',
  },
  {
    img: './g13.jpeg',
    title: 'Books',
  },
  {
    img: './g16.jpeg',
    title: 'Chairs',
  },
];
