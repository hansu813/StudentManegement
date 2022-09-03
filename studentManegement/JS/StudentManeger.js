// 학생 관리 Array
class StudentManeger {

  constructor() {
    this.students = new Array();
  }

  // Array에 Student add 기능
  addStudent(student) {
    this.students.push(student);
  }

  // Array에 저장된 전체 학생 목록 반환
  listAll() {
    return this.students;
  }

  // 검색 기능
  searchName(name) {
    return this.students.filter(student => student.name === name);
  }

  // 학번으로 조회하기
  findNum(ssn) {
    return this.students.find(student => student.ssn === ssn);
  }

  // 학번으로 삭제하기
  deleteNum(ssn) { 
    let filtered = this.students.filter((student) => student.ssn !== ssn);
    this.students = filtered;
  }
  
}

export { StudentManeger };