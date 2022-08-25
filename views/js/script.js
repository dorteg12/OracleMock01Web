$(document).ready(function(){

    

    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
        $('.side-bar').addClass("sticky");
    });

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll_btn').addClass("show");
        }else{
            $('.scroll_btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll_btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

        // toggle menu/navbar script
        $('.menu_btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu_btn i').toggleClass("active");
        });

});


  




