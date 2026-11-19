function economicRelease (release){
    const result = [];
    for(let i = 0; i < release.length; i++){//used coma after 0 rathe rthan ;
        if (typeof release[i].actual !== "number" || typeof release[i].forecast !== "number")
        throw new Error("Invalid value")
        const surprise = release[i].actual - release[i].forecast;
        let status;//initialy used = rather than ;
        if (release[i].actual > release[i].forecast)
            status = "Above forecast"
        else if (release[i].actual < release[i].forecast)
            status = "Below forecast"
        else
        status = "As expected"
        result.push({
            event: release[i].event,
            currency: release[i].currency,
            actual: release[i].actual,
            forecast: release[i].forecast,
            surprise: surprise,
            status: status
        });
    }
    return result;
}
const release = ([
    { event: 'CPI', currency: 'USD', actual: 3.5, forecast: 3.2 },
    { event: 'NFP', currency: 'USD', actual: 250000, forecast: 200000 },
    { event: 'GDP', currency: 'EUR', actual: 2.8, forecast: 3.0 },
    { event: 'Unemployment', currency: 'USD', actual: 4.2, forecast: 4.2},
    { event: 'PMI', currency: 'GBP', actual: 48.5, forecast: 50.0 }
])
const output = economicRelease (release)
console.log(output)
console.log(release)
