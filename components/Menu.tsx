import { useRef } from 'react';
import classNames from 'classnames';
import { Tab } from '@headlessui/react';
import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
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

const images = [ocean5, ocean3, ocean1, ocean2, ocean4]

export const Menu = () => {
  const lightboxRef = useRef<LightGallery | null>(null)
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
              {images.map((image, idx) =>  <Image key={image.src} onClick={() => lightboxRef.current?.openGallery(idx)} 
               src={image} alt='ocean' className='my-4 hover:opacity-70 cursor-pointer' placeholder='blur' /> )}
            </Masonry>
            <LightGalleryComponent onInit={(ref) => {
              if(ref) {
                lightboxRef.current = ref.instance
              }
            }} speed={500} plugins={[lgThumbnail, lgZoom]}
            dynamic dynamicEl={images.map(image =>({ src: image.src, thumb: image.src}))} 
             />
          </Tab.Panel>
          <Tab.Panel>Oceans</Tab.Panel>
          <Tab.Panel>Forests</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
