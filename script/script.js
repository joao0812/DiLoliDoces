const quantiBB = document.getElementById('quantiBrigadeiroBranco')
const quantiBT = document.getElementById('quantiBrigadeiroTradicional')
const quantiBeijinho = document.getElementById('quantiBeijinho')
const quantiCasadinho = document.getElementById('quantiCasadinho')

const valorBB = document.getElementById('valorBrigadeiroBranco')
const valorBT = document.getElementById('valorBrigadeiroTradicional')
const valorBeijinho = document.getElementById('valorBeijinho')
const valorCasadinho = document.getElementById('valorCasadinho')

const classico = document.getElementById('classico')
const especial = document.getElementById('especial')
const premium = document.getElementById('premium')


function chamarClassicos() {
    let listaBrigadeiros = document.getElementById('listaBrigadeiros')

    classico.classList.add('selected')
    especial.classList.remove('selected')
    premium.classList.remove('selected')

    listaBrigadeiros.innerHTML = '<div class="cardBrigadeiro">    <div class="bricadeiroImg brigadeiroBranco"></div>    <div class="brigadeiroText">        <h4>Branco</h4>        <div class="cardPreco"><h3>R$2,30</h3></div>         <button class="btWpp">            <ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span>        </button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg brigadeiroTradicional"></div>    <div class="brigadeiroText">        <h4>Tradicional</h4>        <div class="cardPreco"><h3>R$2,30</h3></div>         <button class="btWpp">            <ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span>        </button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg beijinho"></div>    <div class="brigadeiroText">        <h4>Beijinho</h4>        <div class="cardPreco"><h3>R$2,30</h3></div>         <button class="btWpp">            <ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span>        </button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg casadinho"></div>    <div class="brigadeiroText">        <h4>Casadinho</h4>        <div class="cardPreco"><h3>R$2,30</h3></div>         <button class="btWpp">            <ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span>        </button>    </div></div>'
}

function chamarEspeciais() {
    let listaBrigadeiros = document.getElementById('listaBrigadeiros')

    classico.classList.remove('selected')
    especial.classList.add('selected')
    premium.classList.remove('selected')

    listaBrigadeiros.innerHTML = '<div class="cardBrigadeiro">   <div class="bricadeiroImg churros"></div>    <div class="brigadeiroText">        <h4>Churros</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg romeuJulieta"></div>    <div class="brigadeiroText">        <h4>Romeu e Julieta</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg nuttela"></div>    <div class="brigadeiroText">        <h4>Ninho com Nuttela</h4>       <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg doceUva"></div>    <div class="brigadeiroText">        <h4>Doce de Uva</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg chokito"></div>    <div class="brigadeiroText">        <h4>Chokito</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg pacoca"></div>    <div class="brigadeiroText">        <h4>Paçoca</h4>       <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg cocoQueimado"></div>    <div class="brigadeiroText">        <h4>Coco Queimado</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg damasco"></div>    <div class="brigadeiroText">        <h4>Damasco</h4>        <div class="cardPreco"><h3>R$2,60</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div>'
}

function chamarPremium() {
    let listaBrigadeiros = document.getElementById('listaBrigadeiros')

    classico.classList.remove('selected')
    especial.classList.remove('selected')
    premium.classList.add('selected')

    listaBrigadeiros.innerHTML = '<div class="cardBrigadeiro">    <div class="bricadeiroImg morango"></div>    <div class="brigadeiroText">        <h4>Bombom de Morango</h4>        <div class="cardPreco"><h3>R$3,00</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div><div class="cardBrigadeiro">    <div class="bricadeiroImg balaBaiana"></div>    <div class="brigadeiroText">        <h4>Bala Baiana</h4>        <div class="cardPreco"><h3>R$3,00</h3></div>        <button class="btWpp"><ion-icon name="logo-whatsapp"></ion-icon><span>Pedir!</span></button>    </div></div>'
}

valorBB.innerText = `R$ ${tradicional * parseInt(quantiBB.value)}`