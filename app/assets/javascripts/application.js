// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require tinymce
//= require tinymce-jquery
//= require_tree .

$(function (){
  // $('.wysihtml5').wysihtml5();
  // $('.wysihtml5').froalaEditor()
  tinyMCE.init({
    selector: 'textarea',
    toolbar: ['undo redo | styleselect | bold italic underline | alignleft aligncenter alignright', 'bullist numlist outdent indent fontsizeselect', 'forecolor'],
    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
    plugins: 'textcolor',
    menubar: false,
    statusbar: false,
    setup : function(ed) {
      ed.on('init', function() {
        this.getDoc().body.style.fontSize = '12px';
        this.getDoc().body.style.fontFamily = 'Helvetica, Arial';
      });
    }
  });
});