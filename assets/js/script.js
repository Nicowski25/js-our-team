//creiamo l'array del team
let team = [

    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Deigner',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }

]

//stampo su console le info di ogni membro del team
for (let i = 0; i < team.length; i++) {
    const person = team[i];
    console.log(person);
}

//stampare le stesse informazioni su dom sotto forma di stringhe

//funzione per stampare sulla DOM
function printToDOM(id, text) {
    let content = document.getElementById(id).innerHTML
    content += text
    document.getElementById(id).innerHTML = content
}

//prendiamo membri dalla dom
let membriDom = document.getElementById('membri')
console.log(membriDom);

//ciclo per stampare nella DOM tutti gli oggetti
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const htmlPrint =  `
    <div class='card col-4 p-0'>
        <img class='card-img' src="./img/${member.foto}">
        <h3>${member.nome}</h3>
        <h3>${member.ruolo}</h3>
    </div>
    `
    membriDom.innerHTML += htmlPrint
}