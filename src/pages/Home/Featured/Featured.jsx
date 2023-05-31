import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featued from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white mb-10 pt-10'>
            <SectionTitle
            subHeading={'Check it Out'}
            heading={'Featured Items'}
            >
            </SectionTitle>
            <div className='md:flex justify-center items-center py-20 px-36'>
                <div>
                    <img src={featued} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Fugiat explicabo adipisci corrupti cumque, itaque laboriosam minima
                         consequuntur id amet eum doloremque architecto odit neque nesciunt in,
                          et quibusdam quos dolore. Laudantium dolor, voluptatum voluptates 
                          veritatis enim molestias deserunt voluptatem rerum vero consequatur
                         earum amet odio laborum distinctio consequuntur repellat magnam.</p>
                         <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;