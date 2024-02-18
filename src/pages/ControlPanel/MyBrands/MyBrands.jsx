import { Button, Image } from "react-bootstrap"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import urlConfig from "../../../../urlConfig"

import styles from './my_brands_style.module.css'



const MyBrands = () => {
    const authToken = useSelector((store)=> store.authState.userToken)
    const navigate = useNavigate()
    const [brandList,setBrandList] = useState()

    const imgStyle = {
        "height": "50px"
    }

    useEffect(()=>{
        async function getBrands(){
            const res = await axios.post(urlConfig.BRAND_LIST, {}, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            setBrandList(res.data)
        }
        getBrands()
    },[])


  return (
    <div className={styles.Container+" container-fluid px-2 px-md-5 py-2"}>
        {/* <div className="card bg-white justify-content-center align-items-center d-block">
            <h1>hello</h1>
        </div> */}
        <div className="d-flex justify-content-between px-2 mb-3">
            <h4 className="text-black font-weight-bold">My Brands</h4>
            <Link to="/vendor/add-brand"><button className={styles.btn+" btn-sm"}>Add Brand</button></Link>
        </div>

        <div className="table-responsive card mt-5">
            <table className={styles.table+" table rounded"}>
                <thead>
                    <tr>
                        <th>S.NO.</th>
                        <th>BRAND NAME</th>
                        <th>BRAND LOGO</th>
                        <th>VERIFIED</th>
                        <th>BRAND DOCUMENT</th>
                        <th>ADDED BY</th>
                        <th>VERIFIED BY</th>
                        <th>ACTION</th>
                    </tr>
                    
                </thead>
                <tbody>
                {   brandList!=undefined &&
                    brandList.map((e,i)=>
                        <tr key={i}>
                            <th>{++i}</th>
                            <th>{e.brand_name}</th>
                            <th><Image src={e.brand_logo} fluid style={imgStyle} alt="brand logo"/></th>
                            <th>{e.is_verify?'Yes':'No'}</th>
                            <th><Button className={styles.btn_view+" btn-sm"} onClick={()=>window.open(e.brand_document)}>view</Button></th>
                            <th>{e.vender_id.name}</th>
                            <th>{e.admin_id.name}</th>
                            <th><button className={styles.btn_edit+" btn-sm"} 
                                onClick={()=>{navigate(`/vendor/edit-brand`,{state:{brand_data:e}})}} >Edit</button></th>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyBrands