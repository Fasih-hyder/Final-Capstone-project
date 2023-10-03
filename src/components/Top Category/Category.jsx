import './Category.css'
import child from "./../../Assests/images/hs-4.png"
import ladies from "./../../Assests/images/hs-3.png"
import symbol2 from "./../../Assests/images/div.square--70.png"
const Category = (props) => {

    const card1 = [

        {

            immageUrl: symbol2,

            heading: "Cardiologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        },

        {

            immageUrl: symbol2,

            heading: "Orthopedic Surgeon",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        }, {

            immageUrl: symbol2,

            heading: "Neurologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        }, {

            immageUrl: symbol2,

            heading: "Pulmonologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        },

    ]
    const card2 = [

        {

            immageUrl: symbol2,

            heading: "Ophthalmologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        },

        {

            immageUrl: symbol2,

            heading: "Nephrologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        }, {

            immageUrl: symbol2,

            heading: "Gastroenterologist",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        }, {

            immageUrl: symbol2,

            heading: "Ear-Nose-Throat ",

            pera: "The wise man therefore always holds in  these matters to this principle of brand  marketing selection.",



        },

    ]

    return (

        <>

            <div className='container mt-5'>

                <div className='text-center'>

                    <span className='div-bg rounded-5  px-4 py-1 '>Top Category</span>

                    <h1 className='pt-3'>Browse By Specialist</h1>

                </div>


                <div className='row'>

                    {card1.map((item) => {

                        return (

                            <>

                                <div className='col-md-3 mt-5 pt-5'>

                                    <div className='border rounded-1 text-center p-3'>

                                        <div><img src={item.immageUrl} alt="" /></div>

                                        <div><h4 >{item.heading}</h4></div>

                                        <div>{item.pera}</div>

                                    </div>

                                </div>


                            </>

                        );


                    })}

                    {card2.map((item) => {

                        return (

                            <>

                                <div className='col-md-3 mt-5 pt-5 mb-5'>

                                    <div className='border rounded-1 text-center p-3'>

                                        <div><img src={item.immageUrl} alt="" /></div>

                                        <div><h4>{item.heading}</h4></div>

                                        <div>{item.pera}</div>

                                    </div>

                                </div>


                            </>

                        );


                    })}

                </div>
             
               
            </div>
            <hr />
            <div className='container mt-5'>
                    <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={child} alt="" />
                    </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                    <div className='col-md-6'>
                        
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src={ladies} alt="" />
                    </div>
                    </div>
                </div>
        </>

    )

}

export default Category;