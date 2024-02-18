import { Form } from "react-bootstrap";
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";       
import urlConfig from '../../../../../urlConfig';

import styles from '../product_style.module.css';

export default function VariantPriceForm() {

  const [variantList, setVariantList] = useState([]);
  const [availableVariant,setAvailableVariant] = useState(false);
  const authToken = useSelector((store)=> store.authState.userToken)
  // const [selectedBrand, setSelectedBrand] = setState('');

 
  useEffect(()=>{
      async function getVariant(){
          const res = await axios.get(urlConfig.GET_VARIANT);
          setVariantList(res.data)
      }
      getVariant()
  },[]);

  // Dropdown needs access to the DOM node in order to position the Menu
  const variantChange = (event) => {
    setAvailableVariant(event);
  }

  // console.log(variantList)

  


  // function handleBrandChange (event, i, _id){
  //   alert(true, event, i, _id);
  // }

  return (
    <>
      <div className="row px-5">
        <div className="col-md-6 mb-2">
          <Form.Group className={styles.formGroup}>
            <h5>Do you have variants? <span className="text-danger">*</span></h5>
            <div className="d-flex">              
              <Form.Check type='radio' label='No' value='No' className="mx-4" name="availableVariant" checked={availableVariant == false ? true : false} onClick={((e)=> variantChange(false))} />
              <Form.Check type='radio' label='Yes' value='Yes' className="mx-4" name="availableVariant" checked={availableVariant == false ? false : true} onClick={((e)=> variantChange(true))}  />
            </div>
          </Form.Group>
        </div>
        <div className="col-md-6 mb-2">
          <Form.Group className={styles.formGroup}>
            <label hidden={availableVariant == false ? true : false} htmlFor="variant">Variant <span className="text-danger">*</span></label>
            {/* <Form.Select name="variant" hidden={availableVariant == false ? true : false} required>
              <option value="">None Selected!</option>
                {   variantList.length>0 &&
                    variantList.map((data)=><option key={data._id} value={data._id}> <input type="text" name="variant"/> {data.name} </option>)
                }
            </Form.Select> */}
            
          </Form.Group>
        </div>
        <div className="col-md-6 my-2">
          <Form.Group className={styles.formGroup}>
            <label htmlFor="productName">Product Name <span className="text-danger">*</span></label>
            <input type="text" name="productName" placeholder="Enter Product Name" className="form-control" />
          </Form.Group>
        </div>
        <div className="col-md-6 my-2">
          {/* <Form.Group className={styles.formGroup}>
            <label htmlFor="productName">Brand <span className="text-danger">*</span></label>
            <Form.Select name="brand_relation" required>
                <option value="">Select Brand</option>
                  {   brandList.length>0 &&
                      brandList.map((data,i)=><option key={data._id} value={data._id}>{data.brand_name}</option>)
                  }
              </Form.Select>
          </Form.Group> */}
        </div>
        <div className="col-md-6 my-2"></div>
        <div className="col-md-6 my-2"></div>
      </div>
    </>
  )
}
