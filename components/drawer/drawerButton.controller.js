import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['menu', 'query'];
  static values = { index: Number };

  initialize() {
    this.showButton();
  }

  toggle() {
    if (this.indexValue === 0) {
      this.indexValue++;
    } else {
      this.indexValue--;
    }

    this.showButton();
  }

  showButton() {
    this.menuTargets.forEach((el, i) => {
      if (i !== this.indexValue) {
        el.classList.add('hidden');
      } else {
        el.classList.remove('hidden');
      }
    });
  }

  redirect(event) {
    event.preventDefault();
    window.location.replace(`/search?query=${this.queryTarget.value}`);
  }
}
