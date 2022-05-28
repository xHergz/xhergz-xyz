import React from 'react';
import { Link } from 'react-router-dom';

import CaptainMoldie from '../assets/Captain_Moldie.webp';
import ImageTile from '../components/ImageTile/ImageTile';
import PageWrapper from '../components/PageWrapper/PageWrapper';

function Home(): JSX.Element {
    return (
        <PageWrapper>
            <div className='tileList'>
                <ImageTile
                    imageSource={CaptainMoldie}
                    title='ROSE Tools'
                    linkTo='/rose'
                    size='large'
                />
            </div>
        </PageWrapper>
    );
}

export default Home;