const CopyRightFooter = () => {
  return (
    <div className='bg-[#00000087] flex text-gray-200 py-3 pl-20 gap-2'>
      <span className=''>&copy; Copyright {new Date().getFullYear()}</span>
      <h3 className=''>All rights reserved</h3>
    </div>
  );
};

export default CopyRightFooter;
