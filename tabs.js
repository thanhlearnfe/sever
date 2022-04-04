const tabs = $$('.tab-item')
const contents = $$('.tab-content')

tabs.forEach(function(tab,index){
    const content = contents[index]
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active');
        $('.tab-content.active').classList.remove('active');

        content.classList.add('active')
        tab.classList.add('active');
    }
})


const modalnav = $('.button-modal-nav')
const modalintro = $('.button-modal-intro')
const removenav = $('.button-remove-nav')
const removeintro = $('.remove-modal-intro')



modalnav.onclick = function(){
    $('.navbar').classList.add('active');
}
removenav.onclick = function(){
    $('.navbar').classList.remove('active');

}
modalintro.onclick = function(){
    $('.introduce').classList.add('active');

}
removeintro.onclick = function(){
    $('.introduce').classList.remove('active');

}

