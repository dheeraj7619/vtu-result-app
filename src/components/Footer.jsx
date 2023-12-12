const Footer =  ()=>{
    const currentDate = new Date().getFullYear()
    return(
        <>
            <h6 className="text-center p-2" style={{backgroundColor:"rgb(198, 173, 143)"}}>
            Visvesvaraya Technological University &copy; {currentDate}</h6>
        </>
    )
}

export default Footer;