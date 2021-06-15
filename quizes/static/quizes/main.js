console.log("js connected")

const modalBtns = [...document.getElementsByClassName('modal-button')]
const modalBody = document.getElementById('modal-body-confirm')
const startBtn = document.getElementById('start-btn')
const url = window.location.href

modalBtns.forEach(modalBtn =>modalBtn.addEventListener('click',()=>{
    const pk = modalBtn.getAttribute('data-pk')
    const quiz_name = modalBtn.getAttribute('data-quiz')
    const questions = modalBtn.getAttribute('data-questions')
    const passing_no = modalBtn.getAttribute('data-pass')
    const difficulty = modalBtn.getAttribute('data-difficulty')
    const time = modalBtn.getAttribute('data-time')

    modalBody.innerHTML = `
        <div class="h5 mb-3">Are you wanna begian "<b>${quiz_name}</b>"?</div>
        <div class="text-muted">
            <ul>
                <li>difficulty: <b>${difficulty}</b></li>
                <li>nof of questions: <b>${questions}</b></li>
                <li>passing no: <b>${passing_no}</b></li>
                <li>total time: <b>${time}min</b></li>
            </ul>
        </div>
    `
    startBtn.addEventListener('click',()=>{
        window.location.href = url +"quizes/"+pk
    })
}));
