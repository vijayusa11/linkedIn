import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon fontSize='small'/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
                {newsArticle('Vijay Choudhary ReactJS Dev', '· 76270')}
                {newsArticle('East Coast hit by internet outage', '· 12141')}
                {newsArticle('Here who hiring right now', '· 3625')}
                {newsArticle('Remote co-living is now a thing', '· 6769')}
                {newsArticle('Amazon is headed to Beantown', '· 73734')}
                {newsArticle('GameStop stock battle unfolds', '· 9879')}
                <div className='widgets__more'>
                    <h3>Show More</h3>
                    <ExpandMoreIcon />
                </div>
                
            </div>
            
          

            
    )




}

export default Widgets
