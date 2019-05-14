import axios from axios;
export default class PipeDrive {
  constructor() {
    company_domain="squadrun-fd1c9c";
    api_token = "eea94c078a344955a482a7dc14316fd2a20ade71";
  }
  searchPersonByName(name = "") {
    return new Promise((resolve, reject) => {
      const url = 'https://' + this.company_domain + '.pipedrive.com/v1/' + "persons/" +"find?term="+name+"&start=0&api_token="+this.api_token;
      axios
        .get(url)
        .then(response => {
          return resolve(response);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
  
  updatePersonById(id = "",person={}) {
    return new Promise((resolve, reject) => {
      const url = 'https://' + this.company_domain +'.pipedrive.com/v1/' + "persons/" + `${id}`+'?api_token='+this.api_token;
      const data = {person:person};
      axios
        .put(url,data)
        .then(response => {
          return resolve(response);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
  addNote(content = "") {
    return new Promise((resolve, reject) => {
      const url = 'https://' + this.company_domain+ '.pipedrive.com/v1/'+"notes?api_token="+this.api_token;
      const data = { content: content };
      axios
        .post(url, data)
        .then(response => {
          return resolve(response);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }
}

webHook1(person={})
{

    const person = person;
    if(person.update_time === person.add_time){
        person.flag="Created";
    }else{
        person.flag="Updated";
    }
}
