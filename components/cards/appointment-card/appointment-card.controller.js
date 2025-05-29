import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['selected', 'button'];

  updateLink() {
    this.buttonTarget.setAttribute(
      'href',
      this.selectedTarget.getAttribute('data-link')
    );
  }

  connect() {
    this.element[this.identifier] = this;
    this.updateLink();
  }
}
