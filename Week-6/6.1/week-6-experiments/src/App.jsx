function App(){
    return <div>
        <CardWrapper innerComponent={TextComponent}></CardWrapper>
    </div>
}

function TextComponent(){
    return <div>
        hi there
    </div>
}

function CardWrapper({}){

}

export default App