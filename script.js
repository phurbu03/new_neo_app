const restaurants = [
    // 한식
    { name: "경대컵밥", type: "분식", open: [[10, 20], [10, 15]], closedDays: [0] }, // 월~금, 토요일(10~15), 일요일 휴무
    { name: "월계숯불갈비", type: "한식", open: [0, 24], closedDays: [] }, // 24시간 영업
    { name: "이층집", type: "한식", open: [[11, 21], [11, 20]], closedDays: [0] }, // 월~금, 토요일(11~20), 일요일 휴무
    { name: "한끼철판", type: "한식", open: [[11, 21], [11, 20]], closedDays: [0] }, // 월~금, 토요일(11~20), 일요일 휴무
    { name: "학교종이땡땡땡", type: "한식", open: [10, 20], closedDays: [] }, // 매일
    { name: "광운대학교 복지관 학생식당", type: "한식", open: [11, 21.5], closedDays: [] }, // 매일
    { name: "미미식당", type: "한식", open: [11, 21.5], closedDays: [] }, // 매일
    { name: "후문식당", type: "한식", open: [10, 19], closedDays: [0] }, // 월~토, 일요일 휴무
    { name: "로스2000", type: "한식", open: [[17, 24], [0, 0.5]], closedDays: [0] }, // 월~토, 일요일 휴무
    { name: "광운양꼬치", type: "한식", open: [11, 21.5], closedDays: [] }, // 매일

    // 중식
    { name: "미식성", type: "중식", open: [11, 21], closedDays: [] }, // 매일
    { name: "더원", type: "중식", open: [11, 22], closedDays: [3] }, // 수요일 휴무
    { name: "진짜루", type: "중식", open: [11, 21], closedDays: [] }, // 매일
    { name: "신연 마라탕", type: "중식", open: [11, 21.5], closedDays: [] }, // 매일
    { name: "짜장마당 석계역점", type: "중식", open: [11, 20.5], closedDays: [1] }, // 월요일 휴무
    { name: "짜짜루", type: "중식", open: [11, 21], closedDays: [] }, // 매일
    { name: "한스친친", type: "중식", open: [[11, 15], [16.5, 22]], closedDays: [] }, // 매일
    { name: "향원", type: "중식", open: [10, 20.5], closedDays: [] }, // 매일
    { name: "서향", type: "중식", open: [10.5, 21], closedDays: [] }, // 매일

    // 일식
    { name: "푸른스시", type: "일식", open: [11, 22], closedDays: [0] }, // 월~토, 일요일 휴무
    { name: "하이레", type: "일식", open: [[11, 14.5], [16, 20]], closedDays: [6, 0] }, // 월~금, 주말 휴무
    { name: "윤스쿡", type: "일식", open: [[10, 15], [16.5, 19.5]], specialOpen: { 6: [10.5, 15] }, closedDays: [0] }, // 월~금, 토요일(10:30~15:00)
    { name: "일심텐동 광운대직영점", type: "일식", open: [10.5, 20.5], closedDays: [0] }, // 월~토, 일요일 휴무
    { name: "고씨네 광운대점", type: "일식", open: [[11, 21], [11, 20]], closedDays: [0] }, // 월~금, 토요일(11~20), 일요일 휴무

    // 분식
    { name: "싸다김밥", type: "분식", open: [10, 22.5], closedDays: [] }, // 매일
    { name: "김밥천국 광운대점", type: "분식", open: [9, 21], closedDays: [] }, // 매일
    { name: "한그릇", type: "분식", open: [11, 20], closedDays: [6, 0] }, // 월~금, 주말 및 공휴일 휴무
    { name: "마떡 다이천", type: "분식", open: [[15, 23], [13, 22]], closedDays: [0] }, // 월~금, 토요일(13~22), 일요일 휴무
    { name: "서초우동 광운대역점", type: "분식", open: [11, 21], closedDays: [0] }, // 월~토, 일요일 휴무

    // 카페
    { name: "카페 니니", type: "카페", open: [10, 23], closedDays: [1] }, // 매달 2번째 월요일 휴무
    { name: "굳잡앤오브젝트", type: "카페", open: [10, 22], closedDays: [] }, // 매일
    { name: "카페 베르데", type: "카페", open: [9, 22], closedDays: [] }, // 매일
    { name: "요거프레소 광운대점", type: "카페", open: [10, 22], closedDays: [] }, // 매일
    { name: "이디야커피 광운대점", type: "카페", open: [8, 22], closedDays: [] }, // 매일
    { name: "공차 광운대점", type: "카페", open: [10, 21], closedDays: [] }, // 매일
    { name: "스타벅스 광운대점", type: "카페", open: [7, 22], closedDays: [] }, // 매일
    { name: "카페 브라운비", type: "카페", open: [10, 22], closedDays: [] }, // 매일
    { name: "카페이공일", type: "카페", open: [9, 21], closedDays: [] }, // 매일
    { name: "카페 몰리", type: "카페", open: [10, 22], closedDays: [] }, // 매일
    { name: "알엔비스커피", type: "카페", open: [9, 21], closedDays: [] }, // 매일
    { name: "에프엠251", type: "카페", open: [10, 22], closedDays: [] }, // 매일
    { name: "카페 한나", type: "카페", open: [0, 24], closedDays: [] }, // 24시간
];

function getCurrentHour() {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60; // 현재 시간을 소수점으로 반환
}

function getCurrentDay() {
    return new Date().getDay(); // 현재 요일 (0 = 일요일)
}

function getRandomRestaurant() {
    const foodTypeElement = document.querySelector('input[name="foodType"]:checked');
    const foodType = foodTypeElement ? foodTypeElement.value : "all"; // 선택 안 함 처리
    const currentHour = getCurrentHour();
    const currentDay = getCurrentDay();

    const filtered = restaurants.filter(res => {
        // 음식 종류 필터링 (선택 안 함일 경우 무시)
        if (foodType !== "all" && res.type !== foodType) return false;

        // 휴무일 필터링
        if (res.closedDays.includes(currentDay)) return false;

        // 특별 영업 시간 처리
        if (res.specialOpen && res.specialOpen[currentDay]) {
            const [start, end] = res.specialOpen[currentDay];
            if (currentHour >= start && currentHour < end) return true;
        }

        // 일반 영업 시간 처리
        if (res.open && Array.isArray(res.open[0])) {
            // 여러 시간대 지원
            return res.open.some(([start, end]) => currentHour >= start && currentHour < end);
        } else if (res.open) {
            const [start, end] = res.open;
            return currentHour >= start && currentHour < end;
        }

        return false; // 영업 중 아님
    });

    const result = document.getElementById("result");

    if (filtered.length === 0) {
        result.innerHTML = "<p>현재 영업 중인 음식점이 없습니다.</p>";
    } else {
        const randomIndex = Math.floor(Math.random() * filtered.length);
        const restaurant = filtered[randomIndex];

        // 영업시간 포맷팅
        const formattedHours = Array.isArray(restaurant.open[0])
            ? restaurant.open.map(([start, end]) => {
                  const startHour = Math.floor(start);
                  const startMin = String(Math.round((start % 1) * 60)).padStart(2, "0");
                  const endHour = Math.floor(end);
                  const endMin = String(Math.round((end % 1) * 60)).padStart(2, "0");
                  return `${startHour}:${startMin}~${endHour}:${endMin}`;
              }).join(", ")
            : `${Math.floor(restaurant.open[0])}:${String(Math.round((restaurant.open[0] % 1) * 60)).padStart(2, "0")}~${Math.floor(restaurant.open[1])}:${String(Math.round((restaurant.open[1] % 1) * 60)).padStart(2, "0")}`;

        result.innerHTML = `
            <p class="restaurant-name" style="font-size: 24px; font-weight: bold; color: #ff6f61;">${restaurant.name}</p>
            <p><strong>영업시간:</strong> ${formattedHours}</p>
            <p><a href="https://www.google.com/search?q=${encodeURIComponent(restaurant.name)}" target="_blank">Google에서 ${restaurant.name} 검색하기</a></p>
        `;
    }
}
