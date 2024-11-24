// 중식 음식점 데이터
const restaurants = [
    { name: "미식성", type: "중식", open: [11, 21], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+미식성" },
    { name: "더원", type: "중식", open: [11, 22], closedDays: [3], searchLink: "https://www.google.com/search?q=광운대+더원" },
    { name: "진짜루", type: "중식", open: [11, 21], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+진짜루" },
    { name: "신연 마라탕", type: "중식", open: [11, 21.5], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+신연+마라탕" },
    { name: "짜장마당 석계역점", type: "중식", open: [11, 20.5], closedDays: [1], searchLink: "https://www.google.com/search?q=광운대+짜장마당+석계역점" },
    { name: "짜짜루", type: "중식", open: [11, 21], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+짜짜루" },
    { name: "한스친친", type: "중식", open: [[11, 15], [16.5, 22]], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+한스친친" },
    { name: "향원", type: "중식", open: [10, 20.5], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+향원" },
    { name: "서향", type: "중식", open: [10.5, 21], closedDays: [], searchLink: "https://www.google.com/search?q=광운대+서향" },
];

// 현재 시간을 가져오는 함수
function getCurrentHour() {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60; // 소수점으로 시간 반환
}

// 현재 요일 가져오기 (0=일요일, 1=월요일, ..., 6=토요일)
function getCurrentDay() {
    return new Date().getDay();
}

// 랜덤 음식점 추천 함수
function getRandomRestaurant() {
    const foodType = document.querySelector('input[name="foodType"]:checked').value;
    const currentHour = getCurrentHour();
    const currentDay = getCurrentDay();

    // 선택된 음식 종류에 따라 필터링
    const filteredRestaurants = restaurants.filter(restaurant => {
        const isClosedToday = restaurant.closedDays.includes(currentDay);

        if (isClosedToday) return false;

        if (Array.isArray(restaurant.open[0])) {
            // 여러 시간대 (ex: 한스친친)
            return restaurant.open.some(([start, end]) => currentHour >= start && currentHour < end);
        } else {
            // 단일 시간대
            const [open, close] = restaurant.open;
            return currentHour >= open && currentHour < close;
        }
    });

    // 결과 출력
    const resultBox = document.getElementById("result");
    if (filteredRestaurants.length === 0) {
        resultBox.innerText = "현재 영업 중인 음식점이 없습니다.";
    } else {
        const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
        const selectedRestaurant = filteredRestaurants[randomIndex];

        // 결과 HTML 생성
        resultBox.innerHTML = `
            <p class="restaurant-name">${selectedRestaurant.name}</p>
            <p><strong>영업시간:</strong> ${
                Array.isArray(selectedRestaurant.open[0])
                    ? selectedRestaurant.open.map(([start, end]) => `${start}:00~${Math.floor(end)}:${(end % 1) * 60 || "00"}`).join(", ")
                    : `${selectedRestaurant.open[0]}:00~${Math.floor(selectedRestaurant.open[1])}:${(selectedRestaurant.open[1] % 1) * 60 || "00"}`
            }</p>
            <p><a href="${selectedRestaurant.searchLink}" target="_blank">Google에서 ${selectedRestaurant.name} 검색하기</a></p>
        `;
    }
}
