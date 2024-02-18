import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import urlConfig from "../../../../../urlConfig";

import styles from "../product_style.module.css";

export default function CategoryForm(props) {
  // brand initialization
  const [brandList, setBrandList] = useState([]);
  const [selectBrand, setSelectBrand] = useState(false);
  const [selectBrandValue, setSelectBrandValue] = useState("");
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // sub-category initialization
  const [subCategoryShow, setSubCategoryShow] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  // child category initialization
  const [childCategoryShow, setChildCategoryShow] = useState(false);
  const [childCategory, setChildCategory] = useState([]);
  // selected options
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const [selectChildCategory, setSelectChildCategory] = useState("");

  const authToken = useSelector((store) => store.authState.userToken);

  useEffect(() => {
    async function getBrands() {
      const res = await axios.post(
        urlConfig.VERIFIED_BRAND_LIST,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("response inside categoryForm is", res);
      if (res.status === 200) {
        setBrandList(res.data);
      } else {
        setBrandList(res.message);
      }
    }
    getBrands();
  }, []);
  const handleSubCategoryClick = (event, i, _id) => {
    // access to e.target here
    var subcat = document.querySelectorAll(".subCategoryChange");
    [].forEach.call(subcat, function (el) {
      el.classList.remove("active");
    });
    var childcat = document.querySelectorAll(".childCategoryChange");
    [].forEach.call(childcat, function (el) {
      el.classList.remove("active");
    });

    document.getElementById("sub-category-" + i).classList.add("active");
    // setChildCategoryShow(false);
    // setSelectChildCategory('');

    setSelectSubCategory(_id);
    // setChildCategoryShow(true);
    // setChildCategory(subCategory.subCategoryData[i]);

    // const res = await axios.post(urlConfig.GET_CHILDCATEGORY_FROM_SUBCATEGORY, {}, {
    //     headers: {
    //         Authorization: `Bearer ${authToken}`,
    //     },
    // });
    // setBrandList(res.data)
  };
  console.log(selectSubCategory);

  const handleChildCategoryClick = (event, i, _id) => {
    // var childcat = document.querySelectorAll(".childCategoryChange");
    // [].forEach.call(childcat, function(el) {
    //     el.classList.remove("active");
    // });
    // document.getElementById('child-category-'+i).classList.add('active')
    // setSelectChildCategory(_id);
  };

  const handleBrandChange = (e) => {
    setSelectBrand(true);
    let brandValue = e.target.value.split(",");

    var subcat = document.querySelectorAll(".subCategoryChange");
    [].forEach.call(subcat, function (el) {
      el.classList.remove("active");
    });
    var childcat = document.querySelectorAll(".childCategoryChange");
    [].forEach.call(childcat, function (el) {
      el.classList.remove("active");
    });

    setChildCategoryShow(false);
    setSubCategoryShow(false);
    setSelectSubCategory("");
    setSelectChildCategory("");

    setSelectBrandValue(brandValue[0]);
    setSubCategory(brandList.data[brandValue[1]]);
    setSubCategoryShow(true);
  };

  // console.log(brandList);

  props.onClick([selectSubCategory, selectChildCategory]);

  return (
    <>
      <div>
        <Form.Group className={styles.formGroup}>
          <label htmlFor="brand">
            Brand <span className="text-danger">*</span>
          </label>
          <Form.Select
            name="brand"
            onChange={
              brandList.status === 200 ? (e) => handleBrandChange(e) : ""
            }
            required
          >
            <option value="" hidden={selectBrand == false ? false : true}>
              Select Brand
            </option>
            {brandList.status === 200 ? (
              brandList.map((brand, i) => (
                <option key={brand._id} value={[brand._id, i]}>
                  {brand.brand_name}
                </option>
              ))
            ) : (
              <option value="">{brandList}</option>
            )}
          </Form.Select>
        </Form.Group>
      </div>
      <div className="row my-3" hidden={selectBrand == false ? true : false}>
        {/* <div className="col-md-4">
                <Dropdown.Menu className={styles.category_div} name="category" show>
                    <Dropdown.Header>Select Category</Dropdown.Header>
                    {isLoading ? <Dropdown.Item eventKey="">Loading....</Dropdown.Item> : 
                        data.map( (item,i) => <Dropdown.Item key={i} id={'category-'+i} className='categoryChange' defaultValue={item._id}  onClick={((event) => handleCategoryClick(event,i,item._id))}  eventKey={item._id}>{item.category_type}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
                </div> */}
        <div className="col-md-6">
          {subCategoryShow === false ? null : (
            <Dropdown.Menu
              className={styles.category_div}
              name="sub_category"
              show
            >
              <Dropdown.Header>Select Sub-Category</Dropdown.Header>
              {isLoading ? (
                <Dropdown.Item eventKey="">Loading....</Dropdown.Item>
              ) : (
                subCategory.subcategory_id.map((item, i) => (
                  <Dropdown.Item
                    key={i}
                    id={"sub-category-" + i}
                    className="subCategoryChange"
                    defaultValue={item._id}
                    onClick={(event) =>
                      handleSubCategoryClick(event, i, item._id)
                    }
                    eventKey={item._id}
                  >
                    {item.sub_category_type}
                  </Dropdown.Item>
                ))
              )}
            </Dropdown.Menu>
          )}
        </div>
        <div className="col-md-6">
          {childCategoryShow === false ? null : (
            <Dropdown.Menu
              className={styles.category_div}
              name="child_category"
              show
            >
              <Dropdown.Header>Select Child-Category</Dropdown.Header>
              {isLoading ? (
                <Dropdown.Item eventKey="">Loading....</Dropdown.Item>
              ) : (
                childCategory.childCategoryData.map((item, i) => (
                  <Dropdown.Item
                    key={i}
                    id={"child-category-" + i}
                    className="childCategoryChange"
                    defaultValue={item._id}
                    onClick={(event) =>
                      handleChildCategoryClick(event, i, item._id)
                    }
                    eventKey={item._id}
                  >
                    {item.child_category_type}
                  </Dropdown.Item>
                ))
              )}
            </Dropdown.Menu>
          )}
        </div>
      </div>
      {/* <div className={styles.btn_group +' d-flex'}>                                
                <Button type='button' variant='primary' className=' btn btn-lg' disabled={ selectChildCategory != '' ? false: true }>Next</Button>
            </div> */}
    </>
  );
}
