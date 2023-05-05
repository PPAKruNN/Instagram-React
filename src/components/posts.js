import { useState } from "react"

const postArr = [
    {username: "9gag", img: "assets/img/9gag.svg", postImg: "assets/img/adorable_animals.svg", curtidas: 10},
    {username: "mewoed", img: "assets/img/mewoed.svg", postImg: "assets/img/bad.vibes.memes.svg", curtidas: 54358 },
    {username: "barked", img: "assets/img/barked.svg", postImg: "assets/img/adorable_animals.svg", curtidas: 7439238 },
]

export default function Posts() {
    
    return (
        <div className="posts">
            {postArr.map(curr => {
                return (
                    <Post username={curr.username} img={curr.img} postImg={curr.postImg} curtidas={curr.curtidas} >

                    </Post>
                )
            })}
        </div>
    )
}

function Post(props) {

    const [curtidas, setCurtidas] = useState(props.curtidas);
    const [isLiked, setIsLiked ] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isDoubleClick, setIsDoubleClick] = useState(false);
    // Adicione as curtidas usando esse state!!!.

    function like(val) {
        let dec;
        setIsDoubleClick(false);

        if(val === isLiked) return;

        if(!val) dec = !isLiked;
        else dec = val;

        setIsLiked(dec);
        if(dec) setCurtidas(curtidas + 1);
        if(!dec) setCurtidas(curtidas - 1);

    }

    return (
          <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.img} alt="meowed"/>
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <ion-icon name="heart" class={isDoubleClick ? "animated-heart heart-animation" : "animated-heart"} ></ion-icon>
                <img 
                data-test="post-image"
                onDoubleClick={() => {
                    like(true)
                    setIsDoubleClick(true)
                }}
                src={props.postImg} alt="gato-telefone"/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={() => like()} class={isLiked ? "liked" : "" }  name={isLiked ? "heart" : "heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline" ></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => setIsBookmarked(!isBookmarked)} name={isBookmarked ? "bookmark" : "bookmark-outline"}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai"/>
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras <span data-test="likes-number">{curtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}