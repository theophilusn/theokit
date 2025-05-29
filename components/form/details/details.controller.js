import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['summary'];

  connect() {
    if (this.summaryTargets[0].getAttribute('aria-expanded') === 'true') {
      this.summaryTargets[0].classList.add('mb-40');
    } else {
      this.summaryTargets[0].classList.remove('mb-40');
    }
  }

  toggle() {
    if (this.summaryTargets[0].getAttribute('aria-expanded') === 'false') {
      this.summaryTargets[0].classList.add('mb-40');
    } else {
      this.summaryTargets[0].classList.remove('mb-40');
    }
  }
}
