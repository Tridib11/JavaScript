function App(){
    return <div>
        <CardWrapper innerComponent={TextComponent}></CardWrapper>
    </div>
}
function CardWrapper({}){
    return <div style={{border:"2px solid black"}}>
        {innerComponent}
    </div>
}
function TextComponent(){
   
}



export default App