import Vue from 'vue'


Vue.filter('primerLetraMayus', function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
})


