import { Form,Image } from 'react-bootstrap'
import { useState,useRef,useEffect } from 'react'

import styles from '../product_style.module.css'

export default function ImageForm() {

  const inputFile1 = useRef()
  const inputFile2 = useRef()

  const [photo1, setPhoto1] = useState()
  const [preview1, setPreview1] = useState()
  const [photo2, setPhoto2] = useState()
  const [preview2, setPreview2] = useState()



  const handleChange1 = (e)=>{
    if (!e.target.files || e.target.files.length === 0) {
      setPhoto1(undefined)
      return
    }
    setPhoto1(e.target.files[0])
  }

  const handleChange2 = (e)=>{
    if (!e.target.files || e.target.files.length === 0) {
      setPhoto2(undefined)
      return
    }
    setPhoto2(e.target.files[0])
  }

  useEffect(() => {
    if (!photo1) {
        setPreview1(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(photo1)
    setPreview1(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [photo1])

useEffect(() => {
  if (!photo2) {
      setPreview2(undefined)
      return
  }

  const objectUrl = URL.createObjectURL(photo2)
  setPreview2(objectUrl)

  // free memory when ever this component is unmounted
  return () => URL.revokeObjectURL(objectUrl)
}, [photo2])



  return (
    <div className={styles.image_card+" card py-4"}>
      <div className="container">
        <h6 className="font-weight-bold text-black mb-1">Upload your images</h6>
        <small>(Image description here...)</small>
      </div>
      
      {/* {photo1? {selectedFile &&  <Image src={preview} fluid rounded/> }:<div>bye</div>} */}
      <div className="container d-flex p-4">
        <div className={styles.border_box+" mx-2"} onClick={()=>inputFile1.current.click()} >
          {photo1? (<Image src={preview1} fluid rounded/> )
            :<i className="fas fa fa-3x fa-plus" aria-hidden="true"></i>
          }
        </div>
        <div className={styles.border_box+" mx-2"} onClick={()=>inputFile2.current.click()}>
          {photo2? (<Image src={preview2} fluid rounded/> )
            :<i className="fas fa fa-3x fa-plus" aria-hidden="true"></i>
          }
        </div>
      </div>
        <Form.Control type="file" name="photo1" onChange={handleChange1} ref={inputFile1} hidden  accept="image/*" />
        <Form.Control type="file" name="photo2" onChange={handleChange2} ref={inputFile2} hidden  accept="image/*" />
      
    </div>
  )
}
