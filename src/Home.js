const Home = () => {
    // a click function which can't have any arguments passed to it:
    const handleClick = () => {
        console.log("hi")
    }
    const handleClickAgain = (name) => {
        console.log("hi " + name)
    }



    return ( 
    <div className="home"> 
        <h2>Homepage <br /></h2>
        <b>These are buttons that say stuff in the console when you click them: <br/></b>
        <button onClick={handleClick}>I can't take input arguments like name</button>
        <button onClick={() => handleClickAgain("Alex")}>... but i can :)</button>
    </div> );
}
 
export default Home;