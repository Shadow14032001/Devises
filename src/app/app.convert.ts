import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'convert'
})

export class ConvertPipe implements PipeTransform {
    constructor(){}

    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("XAF", 1);
        devises.set("EUR", 655.957);
        devises.set("USD", 575.500);
        devises.set("JPY", 5.075);
        devises.set("GBP", 768.250);
        devises.set("CHF", 626.750);
        devises.set("CAD", 450.500);
        devises.set("CNY", 90.000);
        devises.set("AED", 156.250);

    for (const key of devises.keys()) {
        if(depart==key){
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))*val/Number(devises.get(String(arrivee)));
        }
    }
    return val;
    }
}
