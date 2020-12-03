$(function() {
    $("#basketball").draggable();
});

function closeBasketball(){
    document.getElementById('basketball').style.display = 'none';
}

document.getElementById('close-basketball').onclick = closeBasketball;
