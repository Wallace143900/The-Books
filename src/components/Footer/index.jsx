import logo from "../../assets/LogoWhite.svg";
import style from "./style.module.scss";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.flexBox}>
                    <img src={logo} alt="Logo Books" />
                    <p className="paragraph white">Todos os direitos reservados - Wallace Menezes</p>
                </div>
            </div>
        </footer>
    )
}