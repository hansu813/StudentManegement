class Student {

  // static property
  static schoolName = 'KOREA IT SCHOOL';

  constructor(ssn, name, korean, english, math) {
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }

  set ssn(ssn) {
    this._ssn = ssn;
  }
  get ssn() {
    return this._ssn;
  }

  set name(name) {
    if(name === undefined) {
      throw new Error('이름을 입력해주세요.');
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set korean(korean) {
    this._korean = korean;
  }
  get korean() {
    return this._korean;
  }

  set english(english) {
    this._english = english;
  }
  get english() {
    return this._english;
  }

  set math(math) {
    this._math = math;
  }
  get math() {
    return this._math;
  }

  getSum() {
    return this.korean + this.english + this.math;
  }
  
  getAverage() {
    let average = (this.getSum() / 3).toFixed(2);
    return average;
  }
  
  toString() {
    return `${this.ssn}, ${this.name}, ${this.korean}, ${this.english}, ${this.math},  ${this.getAverage()}`;
  }
}

export {Student};