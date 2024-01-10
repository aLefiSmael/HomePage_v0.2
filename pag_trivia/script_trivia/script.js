const radio1 = document.querySelectorAll('input[name="q1"]')
const radio2 = document.querySelectorAll('input[name="q2"]')
const radio3 = document.querySelectorAll('input[name="q3"]')
const radio4 = document.querySelectorAll('input[name="q4"]')
const radio5 = document.querySelectorAll('input[name="q5"]')
const radio6 = document.querySelectorAll('input[name="q6"]')
const radio7 = document.querySelectorAll('input[name="q7"]')
const radio8 = document.querySelectorAll('input[name="q8"]')
const radio9 = document.querySelectorAll('input[name="q9"]')
const text10 = document.getElementsByName('q10')[0]

radio1.forEach(button => {
    button.addEventListener('click', function(){
        correct1(this.value)
        })
    })

function correct1(resposta){
    var r1 = window.document.getElementById('r1')
    if(resposta == 'Realizar operações matemáticas'){
        r1.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r1.style.background = 'rgb(236, 103, 121)'
        }
    }

radio2.forEach(button => {
    button.addEventListener('click', function(){
        correct2(this.value)
        })
    })
    
function correct2(resposta){
    var r2 = window.document.getElementById('r2')
    if(resposta == 'Random Access Memory'){
        r2.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r2.style.background = 'rgb(236, 103, 121)'
        }
    }
                
radio3.forEach(button => {
    button.addEventListener('click', function(){
        correct3(this.value)
        })
    })
    
function correct3(resposta){
    var r3 = window.document.getElementById('r3')
    if(resposta == 'SSD (Unidade de Estado Sólido)'){
        r3.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r3.style.background = 'rgb(236, 103, 121)'
        }
    }

radio4.forEach(button => {
    button.addEventListener('click', function(){
        correct4(this.value)
        })
    })
    
function correct4(resposta){
    var r4 = window.document.getElementById('r4')
    if(resposta == 'Internet Protocol'){
        r4.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r4.style.background = 'rgb(236, 103, 121)'
        }
    }

radio5.forEach(button => {
    button.addEventListener('click', function(){
        correct5(this.value)
        })
    })
    
function correct5(resposta){
    var r5 = window.document.getElementById('r5')
    if(resposta == 'HyperText Markup Language'){
        r5.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r5.style.background = 'rgb(236, 103, 121)'
        }
    }

radio6.forEach(button => {
    button.addEventListener('click', function(){
        correct6(this.value)
        })
    })
    
function correct6(resposta){
    var r6 = window.document.getElementById('r6')
    if(resposta == 'Uniform Resource Locator'){
        r6.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r6.style.background = 'rgb(236, 103, 121)'
        }
    }

radio7.forEach(button => {
    button.addEventListener('click', function(){
        correct7(this.value)
        })
    })
    
function correct7(resposta){
    var r7 = window.document.getElementById('r7')
    if(resposta == 'Antivírus'){
        r7.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r7.style.background = 'rgb(236, 103, 121)'
        }
    }

radio8.forEach(button => {
    button.addEventListener('click', function(){
        correct8(this.value)
        })
    })
    
function correct8(resposta){
    var r8 = window.document.getElementById('r8')
    if(resposta == 'SMTP'){
        r8.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r8.style.background = 'rgb(236, 103, 121)'
        }
    }

radio9.forEach(button => {
    button.addEventListener('click', function(){
        correct9(this.value)
        })
    })
    
function correct9(resposta){
    var r9 = window.document.getElementById('r9')
    if(resposta == 'Um software ou hardware que monitora e controla o tráfego de rede'){
        r9.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r9.style.background = 'rgb(236, 103, 121)'
        }
    }

text10.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        correct10(this.value);
    }
});

function correct10(resposta){
    var r10 = window.document.getElementById('q10')
    if(resposta.toUpperCase() == 'CPU'){
        r10.style.background = 'rgb(53, 230, 17)'
    }
    else{
        r10.style.background = 'rgb(236, 103, 121)'
        }
    }