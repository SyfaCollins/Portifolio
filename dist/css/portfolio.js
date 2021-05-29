let pop_up = document.querySelector("#pop_up")
let hire_me = document.getElementById('hire_me')

let close_button = document.getElementById('close_button')


function show(){
    pop_up.style.display = 'flex'
    console.log('i was clicked')
    pop_up.style.transition= '5s 1s cubic-bezier(1, 0, 0, 1)'


}

function hide(){
    pop_up.style.display = 'none'
    console.log('i was clicked')

}

hire_me.addEventListener('click',show)

close_button.addEventListener('click',hide)

// mentorShip Page

let mentorShip_button = document.getElementById('mentorShip');
let mentorShip_page = document.querySelector('#mentorshipPage')


function showMentorShipPage(){
    mentorShip_page.style.display = 'flex'
    console.log('i was clicked')
    // pop_up.style.transition= '5s 1s cubic-bezier(1, 0, 0, 1)'


}

mentorShip_button.addEventListener('click' , showMentorShipPage)


