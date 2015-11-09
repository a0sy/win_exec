"use strict";

var Vue = require("vue");

var vm = new Vue({
  el: '#demo',
  data: {
    command: '',
    output: ''
  },
  methods: {
    execCommand: function (){
      var exec = require('child_process').exec;

      exec(this.command, function (error, stdout, stderr) {
        if(stdout){
            vm.output = 'stdout: ' + stdout;
        }
        if(stderr){
            vm.output = 'stderr: ' + stderr;
          }
        if (error !== null) {
            vm.output = 'Exec error: ' + error;
        }
      });
    }
  }
})
