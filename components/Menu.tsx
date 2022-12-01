import classNames from 'classnames';
import { Tab } from '@headlessui/react';
import Masonry from 'react-masonry-css'
import Image from 'next/image';
import ocean1 from '../public/ocean-1.jpg'
import ocean2 from '../public/ocean-2.jpg'
import ocean3 from '../public/ocean-3.jpg'
import ocean4 from '../public/ocean-4.jpg'
import ocean5 from '../public/ocean-5.jpg'

const tabs = [
  {key: 'all', display: 'ALL'},
  {key: 'oceans', display: 'OCEANS'},
  {key: 'forests', display: 'FORESTS'},
]

const images = [
  {id: 1, src: ocean3, alt: 'ocean'},
  {id: 2, src: ocean5, alt: 'ocean'},
  {id: 3, src: ocean2, alt: 'ocean'},
  {id: 4, src: ocean1, alt: 'ocean'},
  {id: 5, src: ocean4, alt: 'ocean'},
]

export const Menu = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      <Tab.Group>
        <Tab.List className='flex items-center gap-12'>
        {tabs.map(tab => (
           <Tab className='px-2' key={tab.key}>{({selected}) => (<span className={classNames('uppercase text-lg', selected ? 'text-white' : 'text-stone-600')}>{tab.display}</span>)}</Tab>
        ))}
        </Tab.List>
        <Tab.Panels className='h-full max-w-[900px] w-full p-2 sm:p-4 my-6 bg-stone-900 bg-opacity-80'>
          <Tab.Panel>
            <Masonry className='flex gap-4' columnClassName='' breakpointCols={2}>
              {images.map(image => <Image key={image.id} src={image.src} alt={image.alt} className='my-4' />)}
            </Masonry>
          </Tab.Panel>
          <Tab.Panel>Oceans</Tab.Panel>
          <Tab.Panel>Forests</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
