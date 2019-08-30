export class StudyHistory {

  private static readonly LEARNED_OK_THRESHOLD = 2;
  private static readonly DIFFICULT_KO_THRESHOLD = 1;

  private _comboOk = 0;
  private _maxComboOk = 0;
  private _comboKo = 0;
  private _maxComboKo = 0;

  ok() {
    this._comboOk++;
    if (this._comboOk > this._maxComboOk) {
      this._maxComboOk = this._comboOk;
    }
    this._comboKo = 0;
  }

  ko() {
    this._comboKo++;
    if (this._comboKo > this._maxComboKo) {
      this._maxComboKo = this._comboKo;
    }
    this._comboOk = 0;
  }

  isNew() {
    return this._comboOk === 0 && this._comboKo === 0 && this._maxComboOk === 0 && this._maxComboKo === 0;
  }

  isDifficult() {
    return this._maxComboKo >= StudyHistory.DIFFICULT_KO_THRESHOLD && this._comboOk === 0;
  }

  isAlmostLearned() {
    return this._maxComboOk >= StudyHistory.LEARNED_OK_THRESHOLD - 1;
  }

  isLearned() {
    return this._maxComboOk >= StudyHistory.LEARNED_OK_THRESHOLD;
  }

  get comboOk() {
    return this._comboOk;
  }

  get comboKo() {
    return this._comboKo;
  }

  get maxComboKo() {
    return this._maxComboKo;
  }

  get maxComboOk() {
    return this._maxComboOk;
  }
}
