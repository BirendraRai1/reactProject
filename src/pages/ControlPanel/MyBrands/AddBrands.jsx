import {  Button, Form, Image } from "react-bootstrap"
import axios from "axios"
import { useSelector } from "react-redux"

import urlConfig from "../../../../urlConfig"

import styles from './my_brands_style.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { element } from "prop-types"



const AddBrands = () => {

    const [selectedFile,setSelectedFile] = useState()
    const [preview,setPreview] = useState()
    const [brandRelationList,setBrandRelationList] = useState([])
    const [subCatList,setSubCatList] = useState([])
    const [formData,setFormData] = useState({brand_name:'',brand_logo:null,brand_relation:'',brand_document:null,brand_cat:''})

    const authToken = useSelector((store)=> store.authState.userToken)

    const navigate = useNavigate()

    useEffect( () => {
        async function fetch(){
            const [firstRes, secondRes] = await Promise.all([
                axios.get(urlConfig.BRAND_RELATION_URL),
                axios.get(urlConfig.GET_SUBCAT)
              ]);

            setBrandRelationList(firstRes.data)
            setSubCatList(secondRes.data)
        }
        fetch()
    },[])

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const handleLogoSelect = (e)=>{
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])

        setFormData({...formData,[e.target.name]:e.target.files[0]})
    }

    const handleOnChange= (e)=>{
        if(e.target.type=='file'){
            if(e.target.files.length>0){
                setFormData({...formData,[e.target.name]:e.target.files[0]})
            }else{
                console.log('Something went wrong. Please try again')
            }
        }else{
            // console.log(e.target.value)
            setFormData({...formData,[e.target.name]:e.target.value})
        }

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        // console.log(formData)

        // const data = new FormData()
        const resp = await axios.post(urlConfig.BRAND, formData, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${authToken}`,
            },
          });
        
        //   console.log(resp)
          if(resp.status==201){
            navigate('/vendor/my-brands')
          }
    }


    return (
        <div className={styles.Container+" container-flex py-2 px-3 px-md-5"}>
            {/* <div className="card bg-white justify-content-center align-items-center d-block">
                <h1>hello</h1>
            </div> */}

            <h4 className="text-black font-weight-bold">Add Brand</h4>
            <span>Add new brand here</span>

            <div className={styles.form+" my-4 px-2 px-md-4 py-4 bg-white rounded"}>
                <Form onSubmit={handleSubmit}  className="row">
                    <div className="col-md-6">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" name="brand_name" onChange={handleOnChange} required/>
                        </Form.Group>
                        <Form.Group className="my-2">
                            <Form.Label>Brand Relation</Form.Label>
                            {console.log(formData.brand_relation)}
                            <Form.Select name="brand_relation" value={formData.brand_relation.name} onChange={handleOnChange} required>
                                <option value="">Select Relation</option>
                                {   brandRelationList.length>0 &&
                                    brandRelationList.map((data)=><option key={data._id} value={data._id}>{data.name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="my-2">
                            <Form.Label>Category</Form.Label>
                            <Form.Select name="subcategory_id" onChange={handleOnChange} required>
                                <option value="">Select Category</option>
                                {   subCatList.length>0 &&
                                    subCatList.map((data)=><option key={data._id} value={data._id}>{data.sub_category_type}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="my-2">
                            <Form.Label>Brand Document</Form.Label>
                            <Form.Control type="file" name="brand_document" onChange={handleOnChange}  accept="image/jpeg,image/gif,image/png,application/pdf" required/>
                        </Form.Group>
                        
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Logo</Form.Label>
                            <Form.Control type="file" name="brand_logo" onChange={handleLogoSelect} accept="image/*" required/>
                        </Form.Group>
                        <div className={styles.imgContainer}>
                            <Form.Label>Preview:</Form.Label><br/>
                            {selectedFile &&  <Image src={preview} fluid rounded/> }
                        </div>      
                    </div>
                    <div className="text-center my-3 pt-5">
                        <Button type="submit">Submit</Button>
                    </div>
                    
                    
                </Form>
            </div>

        </div>
      )
}

export default AddBrands