import React from 'react';
import AspectRatio from './AspectRatio';

export default () => [
    <div className="full-width">
        <AspectRatio aspectRatio="960:507">
            <iframe
                src="https://www.youtube.com/embed/QWPrS9k8Goo?rel=0&start=0&mute=1&autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </AspectRatio>
        <p/>
        (주)퓨처이브이 – 소형 전기상용차와 전기차 핵심부품 세계시장에 도전합니다.
        <p/>
        상용차는 경제활동을 위한 차량입니다. 그러나, 디젤 등 화석연료를 주로 사용하면서 환경오염 문제를 유발하고 있습니다. 퓨처이브이는 배터리관리 및 모터제어 등 전동화 핵심기술을 기반으로, 가성비 높은 전기상용차를 중소상공인들에게 제공하고, 전기차 핵심부품을 사업화 하여, 상용차의 전동화를 이끌겠습니다. 
    </div>
];