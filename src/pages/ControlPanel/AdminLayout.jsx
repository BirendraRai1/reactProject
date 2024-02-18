import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import LoadJS from "./Components/loadJS"

export default function AdminLayout({content}){

    const bgStyle = {
        "backgroundColor":  "#F6F8FF",
        "paddingLeft": "0px",
        "paddingRight": "0px"
    }

    
    return(
        <>
        <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar />

                        {/* <!-- Begin Page Content from here --> */}
                        <div className=" container-fluid" style={bgStyle} >

                           {content}

                        </div>
                        {/* <!-- /.end Page Content here --> */}

                    </div>
                    <Footer />
                </div>
            </div>

            {/* <!-- Scroll to Top Button--> */}
            {/* <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a> */}

            <LoadJS/>
        </>
    )
}