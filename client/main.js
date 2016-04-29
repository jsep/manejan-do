import jQuery from "jquery"
import "slick-carousel"
// Exposes jquery to global namespace
global.jQuery = jQuery;
global.$ = jQuery;

// Since jquery.tokeninput needs jQuery to be global we required it after
// making jQuery availabe to global namespace
require("../import/client/lib/jquery-tokeninput/jquery.tokeninput");