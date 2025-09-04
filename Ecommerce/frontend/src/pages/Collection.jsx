import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const {products,search,showSearch} =  useContext(ShopContext)
  const[showFilter,setShowFilter] = useState(false)
  const [filteredProduct, setFilteredProduct] = useState([]);
  const[category,setCategory] = useState([]);
  const[subCategory,setSubCategory] =useState([]);
const[sortType,setSortType]=useState('relavent');
const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item => item != e.target.value))
  }
  else{
    setCategory(prev=>[...prev,e.target.value])
  }
}
const toggleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item => item != e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev,e.target.value])
  }
}

  useEffect(()=>{
  setFilteredProduct(products);
  },[])
  useEffect(()=>{
    sortProduct()  },[sortType])
const applyFilter = ()=>{
  let productCopy =products.slice();

  if(search && showSearch){
    productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length>0){
    productCopy = productCopy.filter(item=>category.includes(item.category))
  }
  if (subCategory.length > 0) {
    productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory));
  }
setFilteredProduct(productCopy);
}

const sortProduct = () =>{
  let fpCopy = filteredProduct.slice();
  switch(sortType){
    case 'low-high':
      setFilteredProduct(fpCopy.sort((a,b)=>(a.price-b.price)))
      break;
    case 'high-low':
      setFilteredProduct(fpCopy.sort((a,b)=>(b.price-a.price)));
      break;
default:
  applyFilter()
  break;
  }

}

useEffect(()=>{
applyFilter();
},[category,subCategory,search,showSearch])
useEffect(()=>{
setFilteredProduct(products);
},[])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
        <img 
  className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
  src={assets.dropdown_icon}
  alt="" 
/>
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-lighttext-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}></input>
              Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}></input>
              Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}></input>
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-lighttext-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}></input>
              TopWear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}></input>
              BottomWear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}></input>
              WinterWear
            </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2 ={'COLLECTIONS'}/>
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
          <option value="relavent">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to low</option>
</select>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
           filteredProduct.map((item,index) => (
            <ProductItem 
            key ={index}
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))
        }
    </div>
      </div>      
    </div>  )
}

export default Collection
