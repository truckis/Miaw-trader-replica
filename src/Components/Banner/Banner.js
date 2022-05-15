import './Banner.css'


const Banner = (props) => {
    const burnedAmount = 70035938;
    const totalBurned = burnedAmount.toLocaleString();
    const convertToUst = (burnedAmount/10000).toLocaleString();
    const myMiaw = 0;
    const myName = (e) => {
        if(e === undefined){
            return " "
        }else {
            return props.miawname
        }
    }


    return (
        <>
            <div className='banner'>
                <div className='banner-control'>
                    <h4 className='red'>🔥 Total Burned : </h4>
                    <h4>{`${totalBurned} MIAW ( ${convertToUst} UST)`}</h4>
                </div>
                <div className='banner-control'>
                    <p>{`My Miaw : ${myMiaw.toLocaleString()}`}</p>
                    <p>{`My Name : ${myName(props.miawname)}`}</p>
                    <p className='orange'>* Updating name may need a few minutes</p>
                </div>
            </div>
        </>
    )
}


export default Banner;