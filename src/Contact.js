import React from 'react';
import AspectRatio from './AspectRatio';

export default () => [
    <AspectRatio
        className="image-small"
        aspectRatio="4:3"
    >
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3179.2670784266033!2d127.0828722!3d37.1701234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b470031dac0d5%3A0xffd774c65ab077bf!2zKOyjvCntk6jsspjsnbTruIzsnbQ!5e0!3m2!1sko!2skr!4v1711508628564!5m2!1sko!2skr"/>
    </AspectRatio>,

    <div className="image-small-content">
        대전KAIST연구센터 :<br/>
        34051 대전광역시 유성구 문지로 193, KAIST문지캠퍼스 부속1동 202~206호<p/>
        용인미래기술센터 :<br/>
        16950 경기도 용인시 기흥구 흥덕중앙로 120, 흥덕U타워 2302호<p/>
        본사 :<br/>
        63309 제주특별자치도 제주시 첨단로 330. 세미양빌딩 A동 3층 SL-306-02호<p/>
        Tel: 070-4739-0001  / E-Mail: fev@f-ev.co.kr 
    </div>
];