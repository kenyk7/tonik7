import $ from 'jquery';
import Vue from 'vue';
import mod1 from './modules/module';

$(document).ready(function() {
  mod1.init({selector: 'set var selector'});
});

const app = new Vue({
  el: '#app',
  mounted () {
    console.log('mounted vue');
  }
});
