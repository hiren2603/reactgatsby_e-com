import React from 'react'
import Heading from './Heading'
import Src from './Src'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading},{img}) {
    return (
        <section className="my-4 py-4 bg-theme">
         <div className="container">
            <Heading title={heading} />
            <div className="row">
                <div className="col-8 mx-auto justify-content-center">
                    <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula eu vestibulum ultricies, tortor massa commodo est, quis porta sem mauris eu risus. Ut ultrices cursus leo in volutpat. Aliquam consequat arcu vel ex cursus, quis aliquam dolor euismod. Cras dictum et ex eget vehicula. Sed sollicitudin mi ut leo laoreet cursus. Maecenas vitae rutrum urna. Suspendisse faucibus neque at quam auctor tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula eu vestibulum ultricies, tortor massa commodo est, quis porta sem mauris eu risus. Ut ultrices cursus leo in volutpat. Aliquam consequat arcu vel ex cursus, quis aliquam dolor euismod. Cras dictum et ex eget vehicula. Sed sollicitudin mi ut leo laoreet cursus. Maecenas vitae rutrum urna. Suspendisse faucibus neque at quam auctor tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula eu vestibulum ultricies, tortor massa commodo est, quis porta sem mauris eu risus. Ut ultrices cursus leo in volutpat. Aliquam consequat arcu vel ex cursus, quis aliquam dolor euismod. Cras dictum et ex eget 
                    </p>
                </div>
                <div className="col-4">
                <div className="card bg-dark">
                        <Src image= {img}/>
                        <div className="card-body">
                            <h5 className="card-title text-white">Just Click Photos</h5>
                            <p className="card-text text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula eu vestibulum ultricies, tortor massa commodo est, quis porta sem mauris eu risus. Ut 
                            </p>
                            <Link to="/" className="btn btn-warning btn-block">{heading}</Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>   
        </section>
    )
}
