// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

$( document ).on('turbolinks:load', function() {
  nestedFormLink();
});
$( document ).ready(function(){
  nestedFormLink();
})

function nestedFormLink() {
  $("[data-form-prepend]").click(function(e) {
    var obj = $($(this).attr("data-form-prepend"));
    obj.find("input, select, textarea").each(function() {
      $(this).attr("name", function() {
        return $(this)
          .attr("name")
          .replace("file", new Date().getTime());
      });
    });
    obj.insertBefore(this);
    return false;
  });

}
