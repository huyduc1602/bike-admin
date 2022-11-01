import { Link } from 'react-router-dom';
import Table from '~/components/Table';
import { listStation } from '~/data/data';
import styles from './Station.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import IFrame from '../../components/Layout/components/Frame';

const cx = classNames.bind(styles);

function Station() {
    const [iframe, setIframe] = useState(
        '<iframe src="https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed"></iframe>',
    );
    // scrollToID function
    const scrollToID = (id) => {
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const visibleMap = (latitude, longtitude) => {
        console.log('Location: ' + latitude + ' - ' + longtitude);
        const mapEmbedUrl =
            'https://maps.google.com/maps?q=' +
            latitude +
            ',' +
            longtitude +
            '&hl=es;z=14&amp;output=embed';
        setIframe('<iframe src="' + mapEmbedUrl + '"></iframe>');
        window.location.href = '#map-view';
        scrollToID('#map-view');
    };

    return (
        <div>
            <div>Station</div>
            <Table data={listStation} station visibleMap={visibleMap}></Table>
            <div className={cx('Container')} id="map-view">
                <div className={cx('mapouter')}>
                    <div className={cx('gmap_canvas')}>
                        <IFrame iframe={iframe} />,
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Station;
