import React from 'react';
import { Link } from 'react-router-dom';

import CaptainMoldie from '../assets/Captain_Moldie.webp';
import ImageTile from '../components/ImageTile/ImageTile';

function Home(): JSX.Element {
    return (
        <div>
            <div className='tileList'>
                <ImageTile
                    imageSource={CaptainMoldie}
                    title='ROSE Tools'
                    linkTo='/rose'
                    size='large'
                />
            </div>
        </div>
    );
}

export default Home;