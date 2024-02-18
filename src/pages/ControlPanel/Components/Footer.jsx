export default function Footer() {

    const footerStyle  = {
        "padding":"1rem",
    }
    
    return (
        <footer className="sticky-footer bg-white mt-5" style={footerStyle}>
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; HORECA ALLIANCE</span>
                </div>
            </div>
        </footer>
    );
}