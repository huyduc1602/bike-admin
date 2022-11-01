import { Link } from 'react-router-dom';
import Table from '~/components/Table';
import { listStation } from '~/data/data';
import styles from './Station.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import IFrame from '../../components/Layout/components/Frame';
import { showLoading } from '../slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { stationApi } from '../../api';
// import {
//     useAppHandleMessage,
//     useAppMasterData,
//     useAppPermission,
//     useAppRoute,
//     useAppTranslation,
// } from '@/hooks';

const cx = classNames.bind(styles);

function Station() {
    const dispatch = useDispatch();
    // const { handleError, handleSuccess } = useAppHandleMessage();
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
    const fetchData = async (params) => {
        dispatch(showLoading());
        try {
            const { data } = await stationApi.list();
            console.log('data: ' + data);
        } catch (error) {
            // handleError(error);
            console.log(error);
        }
        dispatch(showLoading(false));
        // setSelectedId(null);
        // setBtnDelete(true);
    };
    useEffect(() => {
        console.log('1');
        fetchData();
    }, []);

    return (
        <div>
            <div>Station</div>
            <Table data={listStation} station visibleMap={visibleMap}></Table>
            <div className={cx('Container')} id="map-view">
                <div className={cx('mapouter')}>
                    <div className={cx('gmap_canvas')}>
                        {/* <iframe
                            width="600"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=36%20c%C3%B9%20lao,%20ph%C6%B0%E1%BB%9Dng%202%20,%20ph%C3%BA%20nhu%E1%BA%ADn,%20th%C3%A0nh%20ph%E1%BB%91%20h%E1%BB%93%20ch%C3%AD%20minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                        ></iframe>
                        <a href="https://fmovies-online.net">fmovies</a>
                        <br /> */}
                        {/* <div dangerouslySetInnerHTML={this.iframe()} /> */}
                        {/* <iframe src={mapEmbedUrl} target="_parent"></iframe> */}
                        <IFrame iframe={iframe} />,
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Station;
