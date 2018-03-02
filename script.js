var app = new Vue({
  el: '#app',
  data: {
    name: '',
    tempName: '',
    email: '',
    job: '',
    salary: '',
    notes: '',
    employees: [],
    editing: true,
    adding: true,
    header: 'Add Employee',
    about: true,
    buttonTitle: "Edit",
  },
  methods: {
    save: function(){
      if(this.name === ''){
        window.alert("You have to enter a name.");
      } else {
      this.employees.push(
        {
          name: this.name,
          email: this.email,
          job: this.job,
          salary: this.salary,
          notes: this.notes,
        });
        this.name = '';
        this.email = '';
        this.job = '';
        this.salary = '';
        this.notes = '';
      }
    },
    select: function(item){
      for(var x = 0; x < this.employees.length; x++){
        if(this.employees[x].name == item){
          this.name = this.employees[x].name;
          this.email = this.employees[x].email;
          this.job = this.employees[x].job;
          this.salary = this.employees[x].salary;
          this.notes = this.employees[x].notes;
          this.editing = false;
          this.adding = false;
          this.header = "Person Details";
          this.buttonTitle = "Edit";
        }
      }
    },
    edit: function(){
      if(this.editing){
        if(this.name === ''){
          window.alert("You have to enter a name.");
        } else {
        this.editing = false;
        for(var x = 0; x < this.employees.length; x++){
          if(this.employees[x].name == this.tempName){
            this.employees[x].name = this.name;
            this.employees[x].email = this.email;
            this.employees[x].job = this.job;
            this.employees[x].salary = this.salary;
            this.employees[x].notes = this.notes;
            this.editing = false;
            this.adding = false;
            this.header = "Person Details"
            this.buttonTitle = "Edit";
          }
        }
      }
      } else {
        this.tempName = this.name;
        this.editing = true;
        this.header = "Editing"
        this.buttonTitle = "Save"
      }
    },
    newEmployee: function(){
      this.name = '';
      this.email = '';
      this.job = '';
      this.salary = '';
      this.notes = '';
      this.editing = true;
      this.adding = true;
      this.header = "Add Employee"
    },
    setAbout: function(){
      this.about = true;
    },
    leaveAbout: function(){
      this.about = false;
    }
  }
});

Vue.config.devtools = true;
