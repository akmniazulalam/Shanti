$(function(){
    $(".businessInnovations").click(function(){
        $(".one").slideToggle(1000)
    })
    $(".technology").click(function(){
        $(".g").slideToggle(1000)
    })
    $(".solutions").click(function(){
        $(".w").slideToggle(1000)
    })
    $(".cancelAnytime").click(function(){
        $(".k").slideToggle(1000)
    })
    $(".customerservice").click(function(){
        $(".d").slideToggle(1000)
    })
})

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}