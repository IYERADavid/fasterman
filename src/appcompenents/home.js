import Messages from "./homecomponent/messages";

function Home({user_id}){
    return (
        <>
            <Messages user_id={user_id}/>
        </>
    )
}

export default Home;