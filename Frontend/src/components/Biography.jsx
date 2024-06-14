import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga cupiditate eaque numquam porro perspiciatis accusamus velit impedit cumque eveniet. Laboriosam fugit nihil maxime totam at consequatur sint explicabo iusto architecto natus unde sapiente distinctio sit ex autem, sed consectetur blanditiis pariatur ea, temporibus dolorem vero nesciunt. Alias sed expedita eum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita nostrum tempora itaque cupiditate iusto quisquam, aperiam eligendi officia consequuntur non quas natus earum modi, necessitatibus dicta labore facilis neque. Magni veritatis itaque nemo voluptates.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quas!</p>
        <p>Lorem, ipsum dolor.</p>
      </div>

    </div>
  )
}

export default Biography