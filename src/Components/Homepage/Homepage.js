import React from 'react';

import './Homepage.scss';

const Homepage = () => {
    return(
        <div className="texts">
            <h1>Lorem ipsum dolor sit <br/> amet.</h1>
            <h2>Donec interdum nulla nec nisl suscipit<br/> tristique. Vestibulum eget faucibus mauris.</h2>
            <button>
                <span>Haritaya Git</span>
                <i class="far fa-arrow-alt-circle-right"></i>
            </button>
        </div>
    )
}

export default Homepage;