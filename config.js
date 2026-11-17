// 맛집탐방 기록 지도 설정
// firebase 값을 채우면 Firebase 모드(Google 로그인, 모두가 함께 보는 저장소)로 동작합니다.
// 비어 있으면 시제품 모드(이름 입력, 이 브라우저에만 저장)로 열립니다.
window.MATZIP_CONFIG = {
  // Google Maps JavaScript API 키
  googleMapsApiKey: "AIzaSyDCQqNfRkRd_N00PKy_4zZOxQa9_leLsiE",

  // Firebase 콘솔 > 프로젝트 설정 > 일반 > 내 앱(웹)에서 보이는 firebaseConfig 값을 그대로 옮겨 적습니다.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
