const stories = [
    {username: "9gag", img: "assets/img/9gag.svg" },
    {username: "mewoed", img: "assets/img/mewoed.svg" },
    {username: "barked", img: "assets/img/barked.svg" },
    {username: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
    {username: "wawawicomics", img: "assets/img/wawawicomics.svg" },
    {username: "respondeai", img: "assets/img/respondeai.svg" },
    {username: "filomoderna", img: "assets/img/filomoderna.svg" },
    {username: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
]


function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
               <img src={props.img} alt="9gag"></img> 
            </div>
            <div className="usuario">
                {props.username}
            </div>
        </div>
    )
}


export default function Stories() {

    return (
        <div class="stories">
            {stories.map(curr => <Story username={curr.username} img={curr.img}></Story>)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>        
        </div>
    )
}