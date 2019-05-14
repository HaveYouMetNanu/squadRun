import Pipedrive from "./Pipedrive";

export default class Hello {
  constructor() {
    this.pipedrive = new Pipedrive();
  }

  searchPerson(name = "", id = "") {
    if (name.length) {
      this.pipedrive.searchPersonByName();
    } else if (id.length) {
      this.pipedrive.searchPersonById();
    }
  }

  updatePersonById(id = "", person = {}) {
    this.pipedrive.updatePerson(id, person);
  }

  addNote(note = "note") {
    this.pipedrive.addNote(note);
  }
  webHook1() {
    this.pipedrive.webHook1();
  }
}
