import seacrhIcon from '../images/seacrhIcon.svg';
import addIcon from '../images/addIcon.svg';
import trashIcon from '../images/trashIcon.svg';

export default function Index() {
  return (
    <div className="text-darkPrimary px-7 py-12">
      <h1 className="text-4xl font-bold">My Notes</h1>
      <label className='relative'>
        <input type="search" className="bg-lightSecondary text-lightPlaceholder text-sm rounded-md px-5 py-3 mt-8 w-full" placeholder="Search your notes here ..."></input>
        <img src={seacrhIcon} className="absolute top-0 right-10" alt="search icon" />
      </label>
      <h2 className='text-2xl mt-6 font-semibold'>Note List</h2>
      <div className='mt-6 flex flex-col gap-5'>
        <div className='bg-lightSecondary rounded-md px-5 py-6'>
          <h3 className='text-lg font-medium'>About this day</h3>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices vehicula iaculis. Aliquam at accumsan leo. Proin in diam quam. Pellentesque habitant morbi ...</p>
        </div>
        <div className='bg-lightSecondary rounded-md px-5 py-6'>
          <h3 className='text-lg font-medium'>About this day</h3>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices vehicula iaculis. Aliquam at accumsan leo. Proin in diam quam. Pellentesque habitant morbi ...</p>
        </div>
      </div>
      <div className='fixed bottom-3 right-5 flex gap-5'>
        <button className='bg-greenAccent rounded-full p-3'><img src={addIcon} alt="add icon"/></button>
        <button className='bg-redAccent rounded-full p-3'><img src={trashIcon} alt="trash icon"/></button>
      </div>
    </div>
  );
}
