import {  Button, Form, Image } from "react-bootstrap"
import axios from "axios"
import { useSelector } from "react-redux"
import { useEffect, useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import urlConfig from "../../../../urlConfig"

import styles from './my_brands_style.module.css'




const EditBrands = () => {

    const location = useLocation()
    const [selectedFile,setSelectedFile] = useState()
    const [preview,setPreview] = useState()
    const [brandRelationList,setBrandRelationList] = useState([])
    const [subCatList,setSubCatList] = useState([])
    const [formData,setFormData] = useState({brand_name:'',brand_logo:null,brand_relation:'',brand_document:null})

    const authToken = useSelector((store)=> store.authState.userToken)

    const inputFileLogo = useRef()
    const inputFileDoc = useRef()

    const photoStyle = {
        height:"150px"
    }

    useEffect(()=>{
        console.log(location.state.brand_data)
        // setFormData({...formData,...location.state.brand_data})
        setFormData(f=>{return {...f,...location.state.brand_data}})
    },[location.state.brand_data])


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

        console.log(formData)

        // const resp = await axios.post(urlConfig.BRAND, formData, {
        //     headers: {
        //       "content-type": "multipart/form-data",
        //       Authorization: `Bearer ${authToken}`,
        //     },
        //   });
        
        //   console.log(resp)
    }


    return (
        <div className={styles.Container+" container-flex py-2 px-3 px-md-5"}>
            {/* <div className="card bg-white justify-content-center align-items-center d-block">
                <h1>hello</h1>
            </div> */}

            <h4 className="text-black font-weight-bold">Edit Brand</h4>
            <span>Edit brand details</span>

            <div className={styles.form+" my-4 px-2 px-md-4 py-4 bg-white rounded"}>
                <Form onSubmit={handleSubmit}  className="row">
                    <div className="col-md-4">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Name</Form.Label>
                            <Form.Control type="text" name="brand_name" value={formData.brand_name} onChange={handleOnChange} required/>
                        </Form.Group>
                    </div>
                    <div className="col-md-4">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Category</Form.Label>
                            {console.log(formData.subcategory_id )}
                            <Form.Select name="subcategory_id" defaultValue={formData.subcategory_id} onChange={handleOnChange} required>
                                <option value="">Select Category</option>
                                {   subCatList.length>0 &&
                                    subCatList.map((data)=><option key={data._id} value={data._id}>{data.sub_category_type}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-md-4">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Relation</Form.Label>
                            {console.log(formData.brand_relation.name)}
                            <Form.Select name="brand_relation" onChange={handleOnChange} required>
                                <option>Select</option>
                                {   brandRelationList.length>0 &&
                                    brandRelationList.map((data)=><option key={data._id} selected={formData.brand_relation.name==data.name?true:false}  value={data._id}>{data.name}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Document</Form.Label><br/>
                            <div className="border p-2 text-center mb-3"><small>Current Document: <Link to={formData.brand_document}>Click to preview</Link></small></div>
                            <Button className="btn-sm btn-light border-dark" onClick={()=>inputFileDoc.current.click()}>Change Document</Button>
                            <Form.Control ref={inputFileDoc} type="file" name="brand_document" onChange={handleOnChange} accept="image/jpeg,image/gif,image/png,application/pdf" hidden/>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="my-2">
                            <Form.Label>Brand Logo</Form.Label>
                            <div className="border p-2 text-center mb-3"><Image src={formData.brand_logo} alt="brand_logo" fluid style={photoStyle}/></div>
                            <Button className="btn-sm btn-light border-secondary" onClick={()=>inputFileLogo.current.click()}>Change logo</Button>
                            <Form.Control type="file" ref={inputFileLogo} name="brand_logo" onChange={handleLogoSelect} accept="image/*" hidden/>
                        </Form.Group>     
                    </div>
                    <div className="text-right my-3 pt-5 pr-3">
                        <Button className="btn-secondary mr-3" type="reset">Reset</Button>
                        <Button type="submit">Submit</Button>
                    </div>
                    
                </Form>
            </div>

        </div>
      )
}

export default EditBrands