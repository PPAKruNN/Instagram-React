const sugestArr = [
    {username: "9gag", img: "assets/img/9gag.svg" },
    {username: "mewoed", img: "assets/img/mewoed.svg" },
    {username: "barked", img: "assets/img/barked.svg" },
    {username: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
    {username: "wawawicomics", img: "assets/img/wawawicomics.svg" },
    {username: "respondeai", img: "assets/img/respondeai.svg" },
    {username: "filomoderna", img: "assets/img/filomoderna.svg" },
    {username: "memeriagourmet", img: "assets/img/memeriagourmet.svg" }
]

export default function Sidebar() {


    return (
        <div className="sidebar">
            <Usuario></Usuario>
            <Sugestoes></Sugestoes>
        </div>
    ) 
}

function Usuario(props) {
    return (
        <div class="usuario">
          <img src={props.img ? props.img : "assets/img/barked.svg"} alt="User profile"/>
          <div class="texto">
            <span>
              <strong>{props.username ? props.username : "undefined"}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}

function Sugestoes() {
    return (
       <>
        
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
            
                <div>Ver tudo</div>
            </div>

            {sugestArr.map(curr => <Sugestao username={curr.username} img={curr.img}></Sugestao>)}
        </div>

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
       </> 
    ) 
}

function Sugestao(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt="bad.vibes.memes.svg"/>
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            
            <div class="seguir">Seguir</div>
        </div>
    )
}