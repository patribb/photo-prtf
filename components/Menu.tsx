import { Tab } from '@headlessui/react';

const tabs = [
  {key: 'all', display: 'ALL'},
  {key: 'oceans', display: 'OCEANS'},
  {key: 'forests', display: 'FORESTS'},
]

export const Menu = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      <Tab.Group>
        <Tab.List className='flex items-center gap-12'>
        {tabs.map(tab => (
           <Tab className='px-2' key={tab.key}>{({selected}) => (<span className={selected ? 'text-white' : 'text-stone-600'}>{tab.display}</span>)}</Tab>
        ))}
        </Tab.List>
        <Tab.Panels className='h-full max-w-[900px] w-full p-2 sm:p-4 bg-stone-900 bg-opacity-80 my-6'>
          <Tab.Panel className=''>All Photos</Tab.Panel>
          <Tab.Panel>Oceans</Tab.Panel>
          <Tab.Panel>Forests</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
