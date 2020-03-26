$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});                     

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
       // this here is not the same this above.. refers to li not span
    });
    // $(this).parent().remove();
    event.stopPropagation();
}); 

$("input[type='text']").keypress(function(event){
    if(event.which === 13)
    {
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span>X </span>"+todoText+"</li>");
      
    }
});