import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators: {
      'rango': function(value) {
        return value >= 18 && value <= 120
      },
      'no-espacios': function(value) {
        return value.indexOf(' ') < 0
      },
    }
  }

 Vue.use(VueForm, options)
  
  