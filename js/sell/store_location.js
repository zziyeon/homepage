// 지도 띄우기!!
//지도를 담을 영역의 DOM 레퍼런스
const container = document.getElementById('map');
const $store_location = new kakao.maps.LatLng(35.5351, 129.3108);
//↑ 위에 가게별 위도 경도 넣으면 됨.


const options = { //지도를 생성할 때 필요한 기본 옵션
    center: $store_location, //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

//지도 생성 및 객체 리턴
const map = new kakao.maps.Map(container, options);

// 마커가 표시될 위치입니다 
const markerPosition = $store_location;

// 마커를 생성합니다
const marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//인포창 렌더링
const renderInfowindow = data => {
    return `<div class='infowindow'>
        <p class = 'infowindow_title'>${data.title}</p>
        <p class = 'infowindow_addr'>${data.addr}</p>
    </div>`;
}

//data 각각 가지고와서 info창
const infowindows = data.map((ele, idx, arr) => {
    return new naver.maps.InfoWindow({
        content: renderInfowindow(ele),
        disableAnchor: true
    });
});

//마커 클릭시 info창 띄우기
markers.forEach((ele, idx, arr) => {
    naver.maps.Event.addListener(ele, 'click', () => {
        //infowindow가 있으면 닫고 없으면 infowindow 보여주기
        if (infowindows[idx].getMap()) {
            infowindows[idx].close();
        } else {
            infowindows[idx].open(map, ele);
        }
    });
});

//지도 클릭시 info창 닫기
naver.maps.Event.addListener(map, 'click', () => {
    markers.forEach((ele, idx) => {
        infowindows[idx].close();
    });
});

function panTo() {
    const moveLatLon = $store_location;

    map.panTo(moveLatLon);
}