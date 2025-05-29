import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['query'];

  redirect(event) {
    event.preventDefault();
    window.location.replace(`/search?query=${this.queryTarget.value}`);
  }
}
