const list = [ 
    { country: 'USA', city: 'New York' }, 
    { country: 'India', city: 'Mumbai' }, 
    { country: 'India', city: 'Kolkata' },
     { country: 'USA', city: 'Vegas' }
    ]
//Expected object: { USA: [ 'New York', 'Vegas'], India: [ 'Mumbai', 'Kolkata']

let countryMap = new Map();

list.forEach(item => {
    console.log(item)
    if(countryMap.has(item.country))
    {
        let cityArray = countryMap.get(item.country)
        cityArray.push(item.city)
        countryMap.set(item.country, cityArray)
    }
    else
    {
        countryMap.set(item.country, new Array(item.city));
    }
}
);
console.log('countryMap', countryMap);