import Heart from '@/components/icons/Heart'
import WhiteArrow from '@/components/icons/WhiteArrow'
import Image from 'next/image'
import React from 'react'

const UsersPage = () => {
  return (
    <div className='w-full h-fit flex flex-col pt-22'>
        <div className='flex justify-center relative w-full'>
     
     
     

        <div className='h-83 rounded-2xl w-[98%] bg-[#d2ecf0] relative overflow-hidden'>
          

          <Image 
            src="/blob.png"
            width={250}
            height={100}
            alt='blob'
          />

          <Image
          src="/shape-bg.png"
          height={100}
          width={300}
          alt='Ball-shape' 
          className='absolute right-5 bottom-0'
          />
          

          <p className='text-black bg-transparent absolute left-10 top-24 text-4xl'>Find it. Buy it.</p>
          <p className='text-black bg-transparent absolute top-37 left-10 w-90 '>Promote sustainable buying, connect directly with trusted sellers, and find unique items that tell a story.</p>
        </div>
      </div>

      <div className='flex justify-center w-full'>
        <div className='h-65 rounded-2xl w-[98%] bg-white mt-10'>
          

          <div className='flex justify-between'>
            <span className='font-medium text-2xl text-gray-600 p-10'>Categories</span>

            <span className='p-10 text-blue-500 font-medium'>See All</span>
          </div>
           

            <div id='images-categories' className='flex items-center justify-between'>

              <div className='mt-[-45px]'>
                <Image 
                  src="/left-arrow.png"
                  width={40}
                  height={25}
                  alt='arrow'
                />
              </div>
            <div id='mobile' className='flex flex-col items-center'>
              <div className='bg-[#D7FFEE] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/mobile-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Mobile</span>
              </div>

              <div id='property' className='flex flex-col items-center'>
              <div className='bg-[#EAFFD5] w-19 h-19 rounded-[50%] flex items-center justify-center'>
                  <Image 
                    src="/property-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Property</span>
              </div>

              <div id='Electronics' className='flex flex-col items-center'>
              <div className='bg-[#FFE9D3] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/electronics-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Electronics</span>
              </div>

              <div id='Furniture' className='flex flex-col items-center'>
              <div className='bg-[#FEE2EC] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/furniture-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Furniture</span>
              </div>

              <div id='jewellery' className='flex flex-col items-center'>
              <div className='bg-[#E6EBFE] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/jewellery-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Jewellery</span>
              </div>

              <div id='Car-rent' className='flex flex-col items-center'>
              <div className='bg-[#D7FFEE] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/mobile-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500 '>Car Rent</span>
              </div>

              <div id='No-liability' className='flex flex-col items-center'>
              <div className='bg-[#FFE9D3] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/no-liability-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>No Liability</span>
              </div>

              <div id='Offline' className='flex flex-col items-center'>
              <div className='bg-[#FEE2EC] w-19 h-19 flex items-center justify-center rounded-[50%]'>
                  <Image 
                    src="/furniture-category.png"
                    width={40}
                    height={25}
                    alt=''
                    
                    />
              </div>

              <span className='text-center p-3 text-gray-500'>Offline</span>
              </div>
              <div className='mt-[-45px]'>
                <Image 
                  src="/right-arrow.png"
                  width={40}
                  height={25}
                  alt='Arrow'
                />
              </div>

            </div>
        </div>

        </div>
       
       
        <div className='flex justify-center w-full mt-18'>
        <div className='h-83 rounded-2xl w-[47%] bg-white '>
          <div id='Iphone'>
              <div className='flex flex-col gap-3'>
                  <span className='font-medium text-2xl text-gray-600'>Iphone 6s, 10/10 condition..</span>
                  <span className='text-[9px] w-58 text-gray-500'>Lorem ipsum dolor sit amThis device is pre-owned and fully functional, with minor signs of use (if any). Available in multiple storage options and colors ...</span>


                  <div className='flex items-center gap-2 bg-[#3F175F] w-33 h-9 text-white font-medium rounded-[8px]'>
                    <Image
                      src="/hathora.png"
                      width={30}
                      height={30}
                      alt=''
                      className='pl-2'
                    />
                    <span className='text-[10px]'>Place your Bid</span>

                    <WhiteArrow />

                  </div>
              </div>
              <div className='flex flex-col mt-7 gap-3'>
                <span className=' text-[#484848] font-medium'>Auction Ending In</span>
                <div className='flex gap-3'>
                  <div className=' flex flex-col items-center'>
                    <div className='bg-[#25A5B433] size-10 flex items-center justify-center rounded-[6px]'>
                      <span className=' text-[#25A5B4] font-medium'>04</span>
                      
                  </div>
                  <span className='text-sm'>Hr</span>
                  </div>
                  
                  <div className=' flex flex-col items-center'>
                    <div className='bg-[#25A5B433] size-10 flex items-center justify-center rounded-[6px]'>
                      <span className=' text-[#25A5B4] font-medium'>21</span>
                  </div>
                  <span className='text-sm'>Mins</span>
                  </div>

                  <div className=' flex flex-col items-center'>
                    <div className='bg-[#25A5B433] size-10 flex items-center justify-center rounded-[6px]'>
                      <span className=' text-[#25A5B4] font-medium'>04</span>
                  </div>
                  <span className='text-sm'>Sec</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='pr-24 flex items-center gap-10 mt-[-50px]'>
          <Image 
            src="/mubleyl.jpg"
            width={450}
            height={100}
            alt=''
            className='rounded-2xl'
          />
             <div className=' h-[220px] w-16 flex flex-col gap-8 mb-15'>
  
  <Image src="/mubleyl.jpg" width={100} height={60} alt="img2" className='rounded-md' />
  <Image src="/mubleyl.jpg" width={100} height={60} alt="img3" className='rounded-md' />
  <Image src="/mubleyl.jpg" width={100} height={60} alt="img4" className='rounded-md' />
  <Image src="/mubleyl.jpg" width={100} height={60} alt="img5" className='rounded-md' />
</div>
        </div>
       

        </div>


             <div className='flex justify-center w-full bg-gray-100'>
        <div className='h-fit rounded-2xl w-[88%] mt-1 flex flex-col'>
        <div className='flex justify-between'>
          <span className='text-2xl font-medium text-gray-600 '>Recommended For You</span>
          <span className='text-blue-700'>See All</span>
        </div>

        <div className='flex gap-4 justify-between mt-5'>
        <div id='item-1' className='w-fit h-fit bg-white p-3 shadow-2xl relative rounded-xl'>
            <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-1.jpg"
              width={180}
              height={100}
              alt=''
              />
              </div>
            <div className='text-red-500'>

            <Heart />
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>

         <div id='item-2' className='w-50 h-fit bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-2.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>
         <div id='item-3' className='w-50 h-fit bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-3.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>
         <div id='item-4' className='w-50 h-full bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-4.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>

        

        
        </div>

         <div className='flex justify-between mt-10'>
          <span className='text-2xl font-medium text-gray-600 '>Furniture</span>
          <span className='text-blue-700'>See All</span>
        </div>

        <div className='flex gap-4 justify-between mt-5'>
        <div id='item-1' className='w-50 h-fit bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-2-1.png"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-red-500'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>

        <div id='item-2' className='w-50 h-fit bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-2-2.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>

        <div id='item-3' className='w-50 h-fit bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/mubleyl.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>

        <div id='item-4' className='w-50 h-full bg-white p-3  shadow-2xl relative rounded-xl'>

          <div className='w-fit h-40 overflow-hidden'>
            <Image 
              src="/item-2-4.jpg"
              width={180}
              height={100}
              alt=''
              className='h-full object-cover'
              />
              </div>

            <div className='text-white'>

            <Heart />
             
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>$500.00</span>
              <span className='text-[12px] text-gray-400'>1hr ago</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[13px] font-medium'>Iphone 6s, 10/10 condition...</span>
              <span className='text-gray-400 text-[12px] font-medium'>College Road, Islamabad</span>
            </div>
        </div>
       
       
       
        </div>




        </div>


        </div>
        </div>
        
     
  )
}

export default UsersPage