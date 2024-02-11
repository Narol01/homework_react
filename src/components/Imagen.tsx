type Props={
    title:string;
}

function Imagen(prop:Props){

return(
    <div>
    <img src={prop.title} alt="img"/>
    </div>
);
}
export default Imagen;