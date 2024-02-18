import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import styles from './product_style.module.css';

import CategoryForm from './StepForm/CategoryForm.jsx';
import VariantPriceForm from "./StepForm/VariantPriceForm.jsx";
import ImageForm from "./StepForm/ImageForm.jsx";
import DescriptionForm  from "./StepForm/DescriptionForm.jsx";

// const steps = [
//     { name: "Category", component: <StepOne /> },
//     { name: "Variant, Price & Stock", component: <StepTwo /> },
//     { name: "Image", component: <StepThree /> },
//     { name: "Description", component: <StepFour /> }
// ];

export default function AddProduct() {
    const [step, setStep] = useState(1);
    const [category,setCategory] = useState('');
    const [subCategory,setSubCategory] = useState('');
    const [childCategory,setChildCategory] = useState('');

    const handleNextClick = () => {
        // remove active class from current tab
        document.getElementById("fill-tab-example-tab-"+step).classList.remove('active');
        document.getElementById("fill-tab-example-tabpane-"+step).classList.remove('active');
        // add next tab active class
        setStep(step+1);
        document.getElementById("fill-tab-example-tab-"+(step+1)).classList.add('active');
        document.getElementById("fill-tab-example-tabpane-"+(step+1)).classList.add('active');
    }

    const handlePreviousClick = () => {
        // remove active class from current tab
        document.getElementById("fill-tab-example-tab-"+step).classList.remove('active');
        document.getElementById("fill-tab-example-tabpane-"+step).classList.remove('active');
        // add previous tab active class
        setStep(step-1);
        document.getElementById("fill-tab-example-tab-"+(step-1)).classList.add('active');
        document.getElementById("fill-tab-example-tabpane-"+(step-1)).classList.add('active');
    }

    const getCategoryData = (data) => {
        setCategory(data[0]);
        setSubCategory(data[1]);
        setChildCategory(data[2]);
    }

    return(
        <>
            <Form>
                <div className='px-5 mx-2'>
                    <Tabs defaultActiveKey="1" transition={false} id="fill-tab-example" className="mb-3" fill>
                        <Tab eventKey="1" title="Select Category" disabled>
                            <CategoryForm onClick={getCategoryData}/>
                            <div className={styles.btn_group +' d-flex'}>                                
                                <Button type='button' variant='primary' onClick={handleNextClick} className=' btn btn-lg' disabled={childCategory == '' ? true : false}>Next</Button>
                            </div>
                        </Tab>
                        <Tab eventKey="2" title="Details & Variants" disabled>
                            <VariantPriceForm />
                            <div className={styles.btn_group +' d-flex'}>
                                <Button type='button' variant='primary' onClick={handlePreviousClick} className='btn btn-lg'>previous</Button>
                                <Button type='button' variant='primary' onClick={handleNextClick} className='btn btn-lg mx-2'>Next</Button>
                            </div>                            
                        </Tab>
                        <Tab eventKey="3" title="Images" disabled>
                            <ImageForm />
                            <div className={styles.btn_group +' d-flex'}>
                                <Button type='button' variant='primary' onClick={handlePreviousClick} className='btn btn-lg'>previous</Button>
                                <Button type='button' variant='primary' onClick={handleNextClick} className='btn btn-lg mx-2'>Next</Button>
                            </div>  
                        </Tab>
                        <Tab eventKey="4" title="Description" disabled>
                            <DescriptionForm />
                            <div className={styles.btn_group +' d-flex'}>
                                <Button type='button' variant='primary' onClick={handlePreviousClick} className='btn btn-lg'>previous</Button>
                                <Button type='submit' variant='primary' className='btn btn-lg mx-2'>Submit</Button>
                            </div>  
                        </Tab>
                    </Tabs>
                </div>
                
            </Form>
        </>
    );
}