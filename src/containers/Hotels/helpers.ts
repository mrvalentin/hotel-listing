export const sortAlphabetically = (objArray=[],propertyName:string) => {
    objArray.sort((a:any, b:any)=> a[propertyName].toLowerCase().localeCompare(b[propertyName].toLowerCase()));
}