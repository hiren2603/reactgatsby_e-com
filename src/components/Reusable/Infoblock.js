import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title= {heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias suscipit labore rerum illum eum ducimus ipsum dolores! Libero dignissimos aspernatur laboriosam possimus qui architecto, maxime porro. Eos harum quae perspiciatis aliquid dignissimos autem voluptates assumenda delectus officia animi cum consequatur voluptatum veritatis asperiores commodi hic, vel quisquam atque illum numquam perferendis error minima corporis veniam? Quisquam et voluptatibus architecto eos!  
                        </p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">
                            {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
