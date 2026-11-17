// 맛집탐방 기록 지도 설정
// firebase 값을 채우면 Firebase 모드(Google 로그인, 모두가 함께 보는 저장소)로 동작합니다.
// 비어 있으면 시제품 모드(이름 입력, 이 브라우저에만 저장)로 열립니다.
window.MATZIP_CONFIG = {
  // Google Maps JavaScript API 키
  googleMapsApiKey: "AIzaSyDCQqNfRkRd_N00PKy_4zZOxQa9_leLsiE",

  // Firebase 콘솔 > 프로젝트 설정 > 일반 > 내 앱(웹)에서 보이는 firebaseConfig 값을 그대로 옮겨 적습니다.
  firebase: {
    apiKey: "AIzaSyBlfEl8ZrkYIQ6DF0QKlUVtjhFeGawqXzE",
    authDomain: "matzip-223a6.firebaseapp.com",
    projectId: "matzip-223a6",
    storageBucket: "matzip-223a6.firebasestorage.app",
    messagingSenderId: "876304639438",
    appId: "1:876304639438:web:ab078dc062a8b8a7a7379f"
  },

  // 아래는 회사 Microsoft 365 + SharePoint로 옮길 때만 씁니다. 지금은 비워 둡니다.
  msClientId: "",
  msTenantId: "",
  sharepointSite: "",
  sharepointList: "MatzipRecords",
  sharepointFolder: "MatzipReports",
  redirectUri: "",
  msalScriptUrl: ""
};
