jQuery(function($){
"use strict"
$(document).ready(function(){

$(".toogle-btn").on("click", function(){
	$("#sp-megamenu .main-menu").slideToggle();
});
let hasChildToggler = $("#sp-megamenu > nav > ul.navbar > li > .menu-togglearrow");
let hasChildTogglerIcon = $("#sp-megamenu > nav > ul.navbar > li > .menu-togglearrow > i");
let expandIcon = $("#sp-megamenu").data('expand-icon');
let collapseIcon = $("#sp-megamenu").data('collapse-icon');
hasChildTogglerIcon.addClass(expandIcon+" "+collapseIcon);
hasChildToggler.on("click", function(){
	$(this).find("i").toggleClass(collapseIcon);
	$("#sp-megamenu .main-menu ul li:hover .dropdown-inner").slideToggle();
	$("#sp-megamenu .main-menu ul li:hover").toggleClass("active");
});

});
});