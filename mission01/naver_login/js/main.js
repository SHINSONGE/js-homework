const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

//  첫번째 시도 실패
/* const inputEmail = document.querySelector("#userEmail");
const inputPassword = document.getElementById("#userPassword");
const loginBtn = document.getElementById("#loginBtn");

let value = inputEmail.value;

inputEmail.addEvetListener("inputEmail", () => {
  value = inputEmail.value;
  console.log(value === "asd@naver.com");
}); */

//두번째시도 실패
/* function checkLogin() {
  const username = document.getElementById("#userEmail").value; // 아이디 입력란
  const password = document.getElementById("#userPassword").value; // 비밀번호 입력란
  const loginBtn = document.getElementById("#loginBtn");

  // 아이디와 비밀번호가 일치하는지 확인
  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    // 로그인 성공 시 보여줄 요소 표시
    // function goUrl() {
    //   const link = "welcome.html";
    //   location.href = link;
    // }
    loginBtn.addEventListener("click");
  } else {
    // 로그인 실패 시 처리할 내용
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
} */

// 세번째 시도 실패각 범쌤 죄송해여..
const id = document.getElementById("#userEmail").value; // 아이디 입력란
const password = document.getElementById("#userPassword").value; // 비밀번호 입력란
const loginBtn = document.getElementById("#loginBtn"); //로그인버튼

id.addEventListener("input", function () {
  if (emailReg(this.value)) {
    this.classList.add("is-active");
  } else {
    this.classList.remove("is-active");
  }
});

GamepadButton.addEventListener("click", () => {
  if (idpass) {
    id === emailReg ? (window.location.href = "welcome.html") : false;
  }
});

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(username) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(password) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
