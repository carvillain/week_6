const form = document.querySelector('#testDataForm')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = document.querySelector('#season');
    let round = document.querySelector('#round');

    let jsonData = racer_data(season, round);

    load_data(jsonData);
})

const racer_data = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season.value}/${round.value}/driverStandings.json`)

    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0,7)
}

const DOM_Elements = {
    racer_list: '.racer-list'
}

const create_list = ( position, name, nationality, constructorId, points ) => {
    //let name = `${givenName} ${lastName}`;
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${position}"> ${position} ${name} ${nationality} ${constructorId} ${points} </a>`;
    document.querySelector(DOM_Elements.racer_list).insertAdjacentHTML('beforeend', html)
}

const load_data = async (jsonData) => {

    const racers = await jsonData;
    racers.forEach( racer => create_list( racer.position, racer.Driver.givenName + ' ' + racer.Driver.familyName, racer.Driver.nationality, racer.Constructors[0].name, racer.points))

}

const clear_data = () => {
    document.querySelector(DOM_Elements.racer_list).innerHTML = '';
}