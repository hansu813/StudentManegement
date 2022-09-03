import { Student } from "./Student.js";
import { StudentManeger } from "./StudentManeger.js";
/* 
  애플리케이션 엔트리 포인트
*/
let students = new StudentManeger();

// 조회 버튼 이벤트 처리
document.querySelector("#findNum").addEventListener("click",findNum);

// 삭제 버튼 이벤트 처리
document.querySelector("#deleteNum").addEventListener("click", deleteNum);

// 검색 버튼 이벤트 처리
document.querySelector("#searchName").addEventListener("click", searchName);

// 등록 버튼 이벤트 처리
document.querySelector("#addStudent").addEventListener("click", addStudent);

// 전체 검색 버튼 이벤트 처리
document.querySelector("#listSearch").addEventListener("click", listSearch);

// Table 추가 메소드
function addTable(student) {
  let table = document.querySelector("#resultTable");
  let newRow = table.insertRow();
  let newCell1 = newRow.insertCell(0);
  let newCell2 = newRow.insertCell(1);
  let newCell3 = newRow.insertCell(2);
  let newCell4 = newRow.insertCell(3);
  let newCell5 = newRow.insertCell(4);
  let newCell6 = newRow.insertCell(5);
  let newCell7 = newRow.insertCell(6);
  newCell1.innerText = student.ssn * 1;
  newCell2.innerText = student.name;
  newCell3.innerText = student.korean;
  newCell4.innerText = student.english;
  newCell5.innerText = student.math;
  newCell6.innerText = student.getSum();
  newCell7.innerText = student.getAverage();
}

// Table 비우기
function deleteTable() {
  let table = document.querySelector("#resultTable");
  while(table.rows.length > 1) {
    table.deleteRow(-1);
  }
}

// 조회 버튼 이벤트 함수
function findNum() {
  deleteTable();
  let ssnText = (document.querySelector("#ssnTF").value) * 1;
  if(!ssnText) {
    alert('번호를 입력해주세요.');
  }
  addTable(students.findNum(ssnText));  
}

// 삭제 버튼 이벤트 함수
function deleteNum() {
  deleteTable();
  let ssnText = (document.querySelector("#ssnTF").value) * 1;
  students.deleteNum(ssnText);
  listSearch();
}

// 검색 버튼 이벤트 함수
function searchName() {
  deleteTable();
  let nameText = document.querySelector("#nameTF").value;
  if(!nameText) {
    alert('이름를 입력해주세요.');
  }
  let searchList = students.searchName(nameText);
  if(!searchList) {
    alert('존재하지 않는 학생입니다.');
  }
  for (const student of searchList) {
    addTable(student);
  }  
}

// 등록 버튼 이벤트 함수
function addStudent() {
  let ssnText = (document.querySelector("#ssnTF").value) * 1;
  let nameText = (document.querySelector("#nameTF").value);
  let korean = (document.querySelector("#koreanTF").value) * 1;
  let english = (document.querySelector("#englishTF").value) * 1;
  let math = (document.querySelector("#mathTF").value) * 1;
  students.addStudent(new Student(ssnText, nameText, korean, english, math))
  let target = students.findNum(ssnText);
  addTable(target);
}

// 전체 검색 버튼 이벤트 함수
function listSearch() {
  deleteTable();
  let list = students.listAll();
  for (const student of list) {
    addTable(student);
  }  
}