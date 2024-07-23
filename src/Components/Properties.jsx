import {useState} from 'react';
import Property from './PropertyCard';
import house1 from '../assets/house.svg';
import house2 from '../assets/haven.svg';
import house3 from '../assets/palatial.svg';
import house4 from '../assets/Harmony.svg';
import house5 from '../assets/real vi.svg';
import house6 from '../assets/real ajah.svg';
import house7 from '../assets/bliss enugu.svg';
import house8 from '../assets/luxury owerri.svg';
import house9 from '../assets/ikejA luxury.svg';
import Pagination from '../Layout/Pagination';

const propertyList = [
  {
    image: house1,
    title: 'Real House Luxury Villa',
    location: 'Victoria Island, Lagos',
    price: '#3,340,000,000',
    description: 'A beautiful family house with a large garden and modern amenities.',
    bedrooms: 6,
    toilets: 5
  },
  {
    image: house2,
    title: 'Exquisite Haven Villa',
    location: 'Festac, Lagos',
    price: '#4,000,000/year',
    description: 'A modern apartment located in the heart of the city.',
    bedrooms: 3,
    toilets: 2
  },
  {
    image: house3,
    title: 'Luxe Palatial Villa',
    location: 'Gbagada, Lagos',
    price: '#5,350,000,000',
    description: 'Charming family home in Ikeja with four bedrooms with a pool',
    bedrooms: 4,
    toilets: 4
  },
  {
    image: house4,
    title: 'Harmony Luxury Villa',
    location: 'Mushin, Lagos',
    price: '#4,000,000/year',
    description: 'Elegant villa with spacious living areas and modern amenities.',
    bedrooms: 5,
    toilets: 3
  },
 {
  image: house5,
  title: 'Real House Luxury Villa',
  location: 'Victoria Island, Lagos',
  price: '#350,000,000',
  description: 'Luxury villa with premium features and elegant design.',
  bedrooms: 6,
  toilets: 4
 },
 {
  image: house6,
  title:'Real House Luxury Villa',
  location: 'Lekki-Ajah, Lagos',
  price: '#4,200,000/1 Year',
  description: 'Stylish villa in Lekki with modern amenities and ample space.',
  bedrooms: 5,
  toilets: 3
 },
 {
  image: house7,
  title: 'Infinite Bliss Villa',
  location: 'Ishiagu, Enugu',
  price: '#2,350,000,000',
  description: 'Elegant villa with five bedrooms and three bathrooms.' ,
  bedrooms:5,
  toilets:3
 },
 {
  image: house8,
  title: 'Real House Luxury Villa',
  location: 'Works Layout, Owerri',
  price: '#3, 350,000/1 Year',
  description: 'Spacious villa with eight bedrooms and six bathrooms.',
  bedrooms:8,
  toilets:6
 },
 {
  image: house9,
  title: 'Real House Luxury Villa',
  location: 'Ikeja, Lagos',
  price: '#600,000,000',
  description: 'Luxury villa in Ikeja with six bedrooms and six bathrooms.',
  bedrooms:6,
  toilets:6 
 }
];

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 4;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  return (
    <div className="container">
      <div className="row">
        {propertyList.map((property, index) => (
          <Property key={index} properties={property} />
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageClick}/>
    </div>
  );
};

export default Properties;