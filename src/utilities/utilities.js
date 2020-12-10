export const timeConverter = (n) => {
    
    var hours = (n / 3600);
    var rHours = Math.floor(hours);
    var minutes = (hours - rHours) * 60;
    var rMinutes = Math.round(minutes);
    return `${rHours}hr and ${rMinutes}min`
}

export const kelvinConverter = (T) => {
    return ((T * (9/5)) - 459.67).toFixed()
}

export const forecastDays = (currDay) => {
    
    let dayArr = [];

    switch (currDay) {
        case 1:
            dayArr = ['Tue', 'Wed', 'Thu'];
            break;
        case 2:
            dayArr = ['Wed', 'Thu', 'Fri'];
            break;
        case 3:
            dayArr = ['Thu', 'Fri', 'Sat'];
            break;
        case 4:
            dayArr = ['Fri', 'Sat', 'Sun'];
            break;
        case 5:
            dayArr = ['Sat', 'Sun', 'Mon'];
            break;
        case 6:
            dayArr = ['Sun', 'Mon', 'Tue'];
            break;
        case 7:
            dayArr = ['Mon', 'Tue', 'Wed'];
            break;                         
    }

    return dayArr;
}