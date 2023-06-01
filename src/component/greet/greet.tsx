type Greetprops={
    name?:string
}

export const Greet =( props:Greetprops)=>{
    return<div>Hello {props.name}</div>
}