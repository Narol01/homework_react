type Props={
    title:String;
}

function Start(prop:Props){
return(
           <button>{prop.title}</button>
);
}

export default Start;