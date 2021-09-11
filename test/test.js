const estados = [];

const fetchSvg = (image) => {
    fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
            const span = document.createElement('span');
            span.innerHTML = response;
            const inlineSvg = span.getElementsByTagName('svg')[0];
            image.parentNode.replaceChild(inlineSvg, image);
            return true;
        })
        .then(() => { getActions(); });
};

const getActions = () => {
    const states = document.getElementsByClassName('estado');
    for(let i = 0; i < states.length; i++) {
        states[i].onclick = () => { stateClicked(states[i]); };
    }
    getEstados();
};

const getEstados = () => {
    fetch('mapa.json')
        .then((response) => response.text())
        .then((response) => {
            estados.push(...JSON.parse(response));
        });
};

const stateClicked = (state) => {
    const code = state.getAttribute('code');
    const uf = estados.find(estado => estado.code === code);
    if (!uf) return;
    fillContent(uf);
};

const fillContent = ({ nome, sigla, populacao, descricao }) => {
    const name = document.getElementById('stateName');
    const population = document.getElementById('statePop');
    const description = document.getElementById('stateDesc');

    name.innerText = `${nome} (${sigla})`;
    population.innerText = `População: ${populacao}`;
    description.innerText = descricao;
};