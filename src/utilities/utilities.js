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