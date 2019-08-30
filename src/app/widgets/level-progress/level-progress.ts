export class LevelProgress {
  private currentLevel = 1;
  private step = 0;

  get level(): number {
    return this.currentLevel;
  }

  get progress(): number {
    return this.step * 10;
  }

  increaseXp() {
    this.step++;
    if (this.step >= 10) {
      this.currentLevel++;
      this.step = this.step - 10;
    }
  }
}
