'use strict';
$(document).ready(function(){
    $('nav').slideToggle(1000);
    console.log('test')
    loadAnimation();
    burgerMenu();
    scrollToSection();
    formValidation();
    
})

function loadAnimation(){
    $('body').css('opacity','0');
    $(document).ready(function(){
    $('body').animate({opacity: "1"},1400);
})}

function burgerMenu(){
        
       $('nav').slideToggle(1000); $('#burgerMenu').on('click',function(){
        $('nav').slideToggle(1000);
    })
}

function scrollToSection(){  
    $("a[href^='#']").on("click", function(e){
        var target = $( $(this).attr("href") );
        if(target.length){
            e.preventDefault();
            $("html").animate({
                scrollTop: target.offset().top - 40
            }, 1000); 
        } 
    }); 
}

function formValidation(){
    var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    $('input:nth-of-type(1)').on('click',function(){
        $('input:nth-of-type(1)').removeAttr('value');
    })
    $('input:nth-of-type(1)').on('keyup',function(){
        
                    
        if(regExp.test($('input:nth-of-type(1)').val())==true){
             $('input[type=text]').css('border-color','#aaa')
            $('input[type=submit]').removeAttr('disabled').css('background-color','gray');
        }
        if(regExp.test($('input:nth-of-type(1)').val())==false){
           
            $('input[type=text]').css('border-color','#ef7070');
             $('input[type=submit]').attr('disabled').css('background-color','#aaa');
        }
    })
}
