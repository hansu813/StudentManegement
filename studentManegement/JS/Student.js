class Student {
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

  getAverage() {
    return ((this.korean + this.english + this.math) / 3)
  }
  getSum() {
    return (this.korean + this.english + this.math);
  }

  toString() {
    return `${this.ssn}, ${this.name}, ${this.korean}, ${this.english}, ${this.math}`;
  }
}