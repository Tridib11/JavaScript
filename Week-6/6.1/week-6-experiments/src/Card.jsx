function App(){

    return <div>
        <CardWrapper>
            hi there
        </CardWrapper>
    </div>
}

function CardWrapper({children}){
    console.log(children);
    return <div style={{border:"2px solid black"}}>
        {children}
    </div>

}
function TextComponent(){
    return <div>
        Hi there
    </div>
}

export default App