

//Practice Props Passing Jsx and Accessing children property (using children can access html present inside child component)
export function Profile(){
    return (
        <div>
            <h1>ProfiI Card Challengeq</h1>
            <ProfileCard
                name="Krish"
                age={30}
                greeting={
                    <div>
                        <strong>Hi Alice,have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                    <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Op"
                age={23}
                greeting={
                    <div>
                        <strong>Hi op,have a wonderful day!</strong>
                    </div>
                }
            >
                <p>Hobbies: Reading, Hiking</p>
                    <button>Contact</button>
            </ProfileCard>


        </div>
    );
}

function ProfileCard(props){
 return(
    <>
    <h2>Name:{props.name}</h2>
    <p>Age:{props.age}</p>
    <p>{props.greeting}</p>
    <div>
        {props.children}
    </div>
    </>
 );
}