import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['selected', 'options'];

  toggle(event) {
    if (event && event.target.closest('.arrow-icon')) {
      this.selectedTarget.click();
    } else {
      this.optionsTarget.classList.toggle('hidden');
      this.selectedTarget.classList.toggle('hidden');
    }
  }

  hide(event) {
    // handle click outside of select
    if (!this.element.contains(event.target)) {
      this.optionsTarget.classList.add('hidden');
      this.selectedTarget.classList.remove('hidden');
    }
  }

  choose(event) {
    let targetButton = event.target.closest('button');
    // replace text and update attributes
    this.selectedTarget.firstChild.textContent =
      targetButton.firstChild.textContent;
    this.selectedTarget.setAttribute(
      'value',
      targetButton.getAttribute('value')
    );
    this.selectedTarget.setAttribute(
      'data-link',
      targetButton.getAttribute('data-link')
    );
    this.toggle();
  }
}
