

//Passing event as Props from parent to child function  
export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey ${user}`);
    }
    const HandelHover = () => {
        alert(`Hey thanks For Hovering Me`);
    }
    return (
        <>
            <WelcomeUser onclicksubmit={() => HandleWelcomeUser("Krish")} OnmouseHover={HandelHover} />
        </>
    )
}

const WelcomeUser = (props) => {

    const HandelGreeting = () => {
        console.log("Greetings");
        props.onclicksubmit();
    }
    return (
        <>
            <button onClick={props.onclicksubmit}>Click Me</button>
            <button onMouseEnter={props.OnmouseHover}>Hover Me </button>
            <button onClick={HandelGreeting}>Greeting</button>
        </>
    )
}