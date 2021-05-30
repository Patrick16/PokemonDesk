const toCapitalizeFirstLetter = (input:string):string =>{
    if (!input) return input;
    return input[0].toUpperCase() + input.substr(1).toLowerCase();
}
export default toCapitalizeFirstLetter;