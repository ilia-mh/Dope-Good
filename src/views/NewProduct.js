// import React, { useState } from 'react'

// import './newProduct.scss';

// import Input from '../components/Input/Input'
// import MultiInput from '../components/Input/MultiInput'
// import { post } from '../utils/fetch';
// import { toast } from 'react-toastify';

// const apiUrl = process.env.REACT_APP_API_URL;

// export default function NewProduct() {

//   const [name,setName] = useState('')
//   const [nameErr,setNameErr] = useState('')

//   const [sku,setSku] = useState('')
//   const [skuErr,setSkuErr] = useState('')

//   const [cat,setCat] = useState('')
//   const [catErr,setCatErr] = useState('')

//   const [subCat,setSubCat] = useState('')
//   const [subCatErr,setSubCatErr] = useState('')
  
//   const [price,setPrice] = useState(0)
//   const [priceErr,setPriceErr] = useState('')

//   const [stock,setStock] = useState(0)
//   const [stockErr,setStockErr] = useState('')

//   const [shipping,setShipping] = useState('')
//   const [shippingErr,setShippingErr] = useState('')

//   const [returnPol,setReturnPol] = useState('')
//   const [returnPolErr,setReturnPolErr] = useState('')

//   const [infoGuide,setInfoGuide] = useState('')
//   const [infoGuideErr,setInfoGuideErr] = useState('')

//   const [desc,setDesc] = useState('')
//   const [descErr,setDescErr] = useState('')

//   const [additionalInfo,setAdditionalInfo] = useState('')
//   const [additionalInfoErr,setAdditionalInfoErr] = useState('')


//   const [colors,setColors] = useState([])
//   const [colorsErr,setColorsErr] = useState('')

//   const [sizes,setSizes] = useState([])
//   const [sizesErr,setSizesErr] = useState('')


//   const [introDesc,setIntroDesc] = useState('')
//   const [introDescErr,setIntroDescErr] = useState('')

//   const [introColor,setIntroColor] = useState('')
//   const [introColorErr,setIntroColorErr] = useState('')
  
//   const [introMaterial,setIntroMaterial] = useState([])
//   const [introMaterialErr,setIntroMaterialErr] = useState('')

//   const [photos,setPhotos] = useState([])
//   const [photosErr,setPhotosErr] = useState('')

//   const [sizeProp,setSizeProp] = useState([])
//   const [sizePropErr,setSizePropErr] = useState('')

//   const reqsAndErr = {
//     errs: [
//       setNameErr,setSkuErr,setCatErr,setPriceErr,setStockErr,setShippingErr,
//       setReturnPolErr,setInfoGuideErr,setDescErr,setAdditionalInfoErr,setColorsErr,setSizesErr,
//       setIntroDescErr,setIntroColorErr,setIntroMaterialErr,setPhotosErr,setSizePropErr
//     ],
//     inputs: [
//       name,sku,cat,price,stock,shipping,returnPol,infoGuide,
//       desc,additionalInfo,colors,sizes,introDesc,introColor,
//       introMaterial,photos,sizeProp
//     ],
//     setters: [
//       setName,setSku,setCat,setPrice,setStock,setShipping,setReturnPol,setInfoGuide,
//       setDesc,setAdditionalInfo,setColors,setSizes,setIntroDesc,setIntroColor,setIntroMaterial,setPhotos,setSizeProp    ]
//   }
  
//   const createProduct = async () => {

//     if( !validateInputs() ) {
      
//       return
//     }

//     const newProduct = {
//       name,
//       photos,
//       mainImage: 0,
//       shipping,
//       return: returnPol,
//       infoGuide,
//       price: Number(price),
//       options: {
//         color: colors,
//         size: sizes
//       },
//       description: desc,
//       properties: [
//         {
//           title: 'SIZE & FIT',
//           items: sizeProp
//         }
//       ],
//       stock: Number(stock),
//       sku,
//       category: [cat],
//       subCategory: [subCat],
//       intro: {
//         desc: introDesc,
//         color: introColor,
//         material: introMaterial
//       },
//       additionalInfo,
//       secret: ''
//     }

//     const createdProduct = await post(`${apiUrl}/api/products`, newProduct)

//     if( createdProduct.success ) {
//       toast.success('Product Created Successfully')
//       clearInputs()
//     } else {
//       toast.error(createdProduct.message)
//     }
//   }

//   const validateInputs = () => {

//     clearErrs()

//     let validationRes = true

//     reqsAndErr.inputs.forEach( (state,idx) => {

//       if( typeof state === 'string' ) {
//         if( state.length === 0 ) {
//           reqsAndErr.errs[idx]('Field Required')
//           validationRes = false
//         }
//       } else if ( Array.isArray(state) ) {

//         if( typeof state[0] === 'string' && !state[0].length ) {
//           reqsAndErr.errs[idx]('Field Required')
//           validationRes = false
//         } 
//       }
//     })

//     return validationRes
//   }

//   const clearErrs = () => {
//     reqsAndErr.errs.forEach( errSetter => {
//       errSetter('')
//     })
//   }

//   const clearInputs = () => {
//     reqsAndErr.inputs.forEach( (state,idx) => {
      
//       if( typeof state === 'string' ) {
//         reqsAndErr.setters[idx]('')
//       } else if ( Array.isArray(state) ) {
//         reqsAndErr.setters[idx]([])
//       } else if ( typeof state === 'number' )
//         reqsAndErr.setters[idx](0)

//     })
//   }


//   return (
//     <section className='new-product-wrapper'>
      
//       <div className="new-product-form">

//         <Input val={name} setter={setName} name='name' type='text' err={nameErr} />

//         <Input val={sku} setter={setSku} name='sku' type='text' err={skuErr} />

//         <Input val={cat} setter={setCat} name='category' type='text' err={catErr} />

//         <Input val={subCat} setter={setSubCat} name='subcategory' type='text' err={subCatErr} />

//         <Input val={price} setter={setPrice} name='price' type='number' err={priceErr} />

//         <Input val={stock} setter={setStock} name='stock' type='number' err={stockErr} />

//         <Input val={shipping} setter={setShipping} name='shipping' type='textarea' err={shippingErr} />

//         <Input val={returnPol} setter={setReturnPol} name='returnPolicy' type='textarea' err={returnPolErr} />

//         <Input val={infoGuide} setter={setInfoGuide} name='infoGuide' type='textarea' err={infoGuideErr} />

//         <Input val={desc} setter={setDesc} name='description' type='textarea' err={descErr} />

//         <Input val={additionalInfo} setter={setAdditionalInfo} name='additionalInfo' type='textarea' err={additionalInfoErr} />

//         <h5>Color</h5>

//         <MultiInput vals={colors} setter={setColors} name='color' type='text' err={colorsErr} isOption={true} />

//         <h5>Size</h5>

//         <MultiInput vals={sizes} setter={setSizes} name='size' type='text' err={sizesErr} isOption={true} />

//         <h5>Intro</h5>

//         <Input val={introDesc} setter={setIntroDesc} name='introDesc' type='textarea' err={introDescErr} />

//         <Input val={introColor} setter={setIntroColor} name='introColor' type='textarea' err={introColorErr} />

//         <MultiInput vals={introMaterial} setter={setIntroMaterial} name='introMaterial' type='textarea' err={introMaterialErr} />

//         <h5>Photos</h5>

//         <MultiInput vals={photos} setter={setPhotos} name='photo' type='text' err={photosErr} />

//         <h5>Properties</h5>

//         <h6>Size & Fit</h6>

//         <MultiInput vals={sizeProp} setter={setSizeProp} name='size' type='text' err={sizePropErr} />

//         <button className="create-product" onClick={createProduct}>
//           Create Product
//         </button>

//       </div>

//     </section>
//   )
// }
