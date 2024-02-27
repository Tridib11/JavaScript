function App(){

    return <div>
        <CardWrapper innerComponent={<TextComponent/>} />
    </div>
}

function CardWrapper({innerComponent}){
    return <div style={{border:"2px solid black"}}>
        {innerComponent}
    </div>

}
function TextComponent(){
    return <div>
        Hi there
    </div>
}

export default App