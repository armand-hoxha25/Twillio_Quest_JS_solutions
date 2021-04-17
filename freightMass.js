function calculateMass(arr){
    let masses=arr.map(element => element.length);
    let total_mass=0;

    masses.forEach((element)=>{
        total_mass=total_mass+element;
    });
    return total_mass;
}