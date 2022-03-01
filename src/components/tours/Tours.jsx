const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(Tour => {
                return(
                    <div>
                        <h3>{Tour.name}</h3>
                        <img src={Tour.image} alt=""/>
                    </div>
                )
            })
        }
        </>
    )
};
export default Tours;