const $ = require( "jquery" );
const fs = require('fs');

let langJson;

async function loadLang(langAbr) {
    await fs.readFile('lang/' + langAbr + '.json', (err, data) => {
        if (err) alert(err);
        langJson = JSON.parse(data);
        console.log(langJson);
    });
}