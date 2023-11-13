export function toogle(value: boolean){
    return value = !value;
}
export function menuChange(value: boolean){
    if(value){
        document.querySelector<HTMLDListElement>('.options')?.classList.add('active');
    }else{
        document.querySelector<HTMLDListElement>('.options')?.classList.remove('active');
    }
}
export function change(){

    document.querySelector<HTMLDivElement>('.options')?.classList.toggle('active');
}