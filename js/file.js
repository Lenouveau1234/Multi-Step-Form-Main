$(function(){

    // ------------------------------------Star Of Step 1--------------------------------------------------

    $(".name-input").blur(function () {
        if ($(this).val() === "") {
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).css('border-color', '#f80');
        } else {
            $(this).css('border-color', 'rgb(0, 255, 76)');
            $(this).parent().find('.custom-alert').fadeOut(100);
        }
    });

    $(".email-input").blur(function () {
        if ($(this).val() === "") {
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).css('border-color', '#f80');
        } else {
            $(this).css('border-color', 'rgb(0, 255, 76)');
            $(this).parent().find('.custom-alert').fadeOut(100);
        }
    });

    $(".cellphone-input").blur(function () {
        if ($(this).val() === "") {
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).css('border-color', '#f80');
        } else {
            $(this).css('border-color', 'rgb(0, 255, 76)');
            $(this).parent().find('.custom-alert').fadeOut(100);
        }
    });

    //Next to step two
    $(".next-1 .btn").click((e) => {

        let status = true;

        // check if the inputs are empty
        if ($(".name-input").val() === ""){
            $(".name-input").parent().find('.custom-alert').fadeIn(200);
            nameStatus = false;
        }else{
            nameStatus = true;
            $(".name-input").addClass("just-val");
            console.log(nameStatus)
        }

        if (($(".email-input").val() === "")) {
            $(".email-input").parent().find('.custom-alert').fadeIn(200);
            emailStatus = false;
        } else {
            emailStatus = true;
            $(".email-input").addClass("white-yearly");
        }

        if ($(".cellphone-input").val() === "") {
           $(".cellphone-input").parent().find('.custom-alert').fadeIn(200);
            cellphoneStatus = false;
        } else {
            cellphoneStatus = true;
            console.log(cellphoneStatus)
        }

        if (cellphoneStatus === true & emailStatus === true & nameStatus === true){

            $('.step-1').addClass('display-none');
            $('.step-2').removeClass('display-none');
            $('.Sidebar .one').css('background-color', 'inherit');
            $('.Sidebar .two').css('background-color', 'hsl(228, 100%, 84%)');
            $('.back-2').css('color', 'hsl(213, 96%, 18%)');

        }  
        
        e.preventDefault();
        
        
    })
    // ------------------------------------End of step 1--------------------------------------------------


    // ------------------------------------Star of step 2--------------------------------------------------

    // Select the plan 
    $(".plan").click(function () {
        $(this).css('background-color', 'hsl(217, 100%, 97%)').siblings().css('background-color', '#fff');
    });

    let planStatus = 'monthly';

    // Yearly or Monthly
    $(".button-swich").click(()=>{

        if ($(".button-swich").hasClass("white-monthly")){

            $(".monthly").css("color", "#ddd");
            $(".yearly").css("color", "hsl(213, 96%, 18%)");
            $(".button-swich").removeClass("white-monthly");
            $(".button-swich").addClass("white-yearly");
            $('.monthly-step-2').addClass('display-none');
            $('.yearly-step-2').removeClass('display-none');
            planStatus = 'yearly';
            console.log('yearly')

        }else{

            $(".yearly").css("color", "#ddd");
            $(".monthly").css("color", "hsl(213, 96%, 18%)");
            $(".button-swich").removeClass("white-yearly");
            $(".button-swich").addClass("white-monthly");
            $('.monthly-step-2').removeClass('display-none');
            $('.yearly-step-2').addClass('display-none');
            planStatus = 'monthly';
            console.log('monthly')
            
        }

    });

    // When go back to step one
    $('.back-2').click(function (){

        $(this).css('color','#ddd')
        $('.step-1').removeClass('display-none');
        $('.step-2').addClass('display-none');
        $('.Sidebar .one').css('background-color', 'hsl(228, 100%, 84%)'); 
        $('.Sidebar .two, .Sidebar .three, .Sidebar .four').css('background-color', 'inherit');
        $(".email-input, .cellphone-input, .name-input").val('');
        $(".email-input, .cellphone-input, .name-input").css('border-color','inherit');

    });

    //when clicking next to step three
    $('.Next-2').click(function () {

        $('.step-1, .step-2').addClass('display-none');
        $('.step-3').removeClass('display-none');

        if ($(".button-swich").hasClass("white-monthly")) {
            $('.yearly').addClass('display-none');
        }else{
            $('.monthly').addClass('display-none');
        }
        $('.Sidebar .one, .Sidebar .two').css('background-color', 'inherit');
        $('.Sidebar .three').css('background-color', 'hsl(228, 100%, 84%)');
        

    });
    // ------------------------------------ End of step 2 -------------------------------------------------
    
    // ------------------------------------Star of step 3--------------------------------------------------

    //--------------- plan of month--------------------
    $('.service-monthly').click(function (){
        $('.service-monthly').css('background-color', 'hsl(217, 100%, 97%)');
        $('.storage-monthly, .Profile-monthly').css('background-color', '#fff');
        $('.checkMark1').addClass('checked');
        $('.checkMark2, .checkMark3').removeClass('checked');
    });

    $('.storage-monthly').click(function (){
        $('.service-monthly, .Profile-monthly').css('background-color', '#fff');
        $('.storage-monthly').css('background-color', 'hsl(217, 100%, 97%)');
        $('.checkMark1, .checkMark3').removeClass('checked');
        $('.checkMark2').addClass('checked');
    });

    $('.Profile-monthly').click(function (){
        $('.service-monthly, .storage-monthly').css('background-color', '#fff');
        $('.checkMark1, .checkMark2').removeClass('checked');
        $('.checkMark3').addClass('checked');
        $('.Profile-monthly').css('background-color', 'hsl(217, 100%, 97%)');
    });

    //--------------- plan of year--------------------
    $('.service-yearly').click(function () {
        $('.service-yearly').css('background-color', 'hsl(217, 100%, 97%)');
        $('.storage-yearly, .Profile-yearly').css('background-color', '#fff');
        $('.checkMark2, .checkMark3').removeClass('checked');
        $('.checkMark1').addClass('checked');
    });

    $('.storage-yearly').click(function () {
        $('.service-yearly, .Profile-yearly').css('background-color', '#fff');
        $('.checkMark1, .checkMark3').removeClass('checked');
        $('.checkMark2').addClass('checked');
        $('.storage-yearly').css('background-color', 'hsl(217, 100%, 97%)');
    });

    $('.Profile-yearly').click(function () {
        $('.service-yearly, .storage-yearly').css('background-color', '#fff');
        $('.checkMark1, .checkMark2').removeClass('checked');
        $('.checkMark3').addClass('checked');
        $('.Profile-yearly').css('background-color', 'hsl(217, 100%, 97%)');
    });

    //when clicking next to step four
    $('.Next-3').click(function () {

        $('.step-1').addClass('display-none');
        $('.step-2').addClass('display-none');
        $('.step-3').addClass('display-none');
        $('.step-4').removeClass('display-none');
        $('.Sidebar .one, .Sidebar .two, .Sidebar .three').css('background-color', 'inherit');
        $('.Sidebar .four').css('background-color', 'hsl(228, 100%, 84%)');

        if ($('.yearly').hasClass('display-none')) {

            $('.arcade-monthly').removeClass('display-none');
            $('.arcade-yearly').addClass('display-none');

        } else {

            $('.arcade-monthly').addClass('display-none');
            $('.arcade-yearly').removeClass('display-none');

        }

    });

    //when go back to step two
    $('.back-3').click(function () {

        $(this).css('color', '#ddd')
        $('.step-1').addClass('display-none');
        $('.step-3').addClass('display-none');
        $('.step-2').removeClass('display-none');
        $('.Sidebar .one').css('background-color', 'inherit');
        $('.Sidebar .two').css('background-color', 'hsl(228, 100%, 84%)');
        $('.Sidebar .three').css('background-color', 'inherit');
        $('.Sidebar .four').css('background-color', 'inherit');
        $('.monthly').removeClass('display-none');
        $('.yearly').removeClass('display-none');

    });
    // ------------------------------------ End of step 3 --------------------------------------------------

    // ------------------------------------ Star of step 4 --------------------------------------------------

    //change to other offer
    $('.arcade-monthly .arcade a, .arcade-yearly .arcade a').click(()=>{

        if ($('.arcade-monthly').hasClass('display-none')) {

            $('.arcade-monthly').removeClass('display-none');
            $('.arcade-yearly').addClass('display-none');
            
        }else{

            $('.arcade-monthly').addClass('display-none');
            $('.arcade-yearly').removeClass('display-none');

        }

    });

    //when go back to step three
    $('.back-4').click(function () {

        $(this).css('color', '#ddd')
        $('.step-1').addClass('display-none');
        $('.step-2').addClass('display-none');
        $('.step-3').removeClass('display-none');
        $('.step-4').addClass('display-none');
        $('.Sidebar .one').css('background-color', 'inherit');
        $('.Sidebar .two').css('background-color', 'inherit');
        $('.Sidebar .three').css('background-color', 'hsl(228, 100%, 84%)');
        $('.Sidebar .four').css('background-color', 'inherit');

        if ($('.yearly').hasClass('display-none')) {

            $('.monthly').removeClass('display-none');
            $('.yearly').addClass('display-none');

        }else{

            $('.yearly').removeClass('display-none');
            $('.monthly').addClass('display-none');

        }

    });

    //when clicking confirm
    $('.confirm').click(function () {

        $('.step-1').addClass('display-none');
        $('.step-2').addClass('display-none');
        $('.step-3').addClass('display-none');
        $('.step-4').addClass('display-none');
        $('.step-5').removeClass('display-none');
        $('.Sidebar .one, .Sidebar .two, .Sidebar .three').css('background-color', 'inherit');
        $('.Sidebar .four').css('background-color', 'hsl(228, 100%, 84%)');

    });

    
});
    // ------------------------------------ End of step 4 --------------------------------------------------
