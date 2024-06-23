import styles from "./style.module.css";
import communicationImg from "../../assets/communication.png";
import fingerImg from '../../assets/finger.png';
import phoneImg from '../../assets/phone.png';
import planetImg from '../../assets/planet.png';
import documentImg from '../../assets/document.png';
import { Footer } from "../Footer";

export const BottomSide = () => {
    return (
        <div className={styles.bottomSide}>
            <div className={styles.bottomCommunication}>
                <img src={communicationImg} />
                <div className={styles.communicationTextSection}>
                    <h1>Коммуникация</h1>
                    <p>
                        Отзывы и комментарии позволят вам узнать
                        <br />
                        настоящие умения и способности работников
                    </p>
                </div>
            </div>
            <div className={styles.bottomWork}>
                <h1>Мы поможем вам работать более эффективно</h1>
                <p>
                    Мы предлагаем вашей команде полный сет инструментов<br/>
                    для создания лучших проектных решений
                </p>
                <ul className={styles.workContent}>
                    <li>
                        <img src={phoneImg} alt="phone"/>
                        <h1>Работайте на любом устройстве</h1>
                        <p>
                            Мы предлагаем вашей команде полный сет
                            инструментов для создания лучших проектных решений
                        </p>
                    </li>
                    <li>
                        <img src={fingerImg} alt="finger"/>
                        <h1>Используйте понятный интерфейс</h1>
                        <p>
                            Интерфейс GigLink адаптивный. Теперь вы можете быть
                            в курсе всех новостей по текущим проектам вне
                            зависимости от вашего местоположения.
                        </p>
                    </li>
                    <li>
                        <img src={documentImg} alt="document"/>
                        <h1>Получайте ежемесячные отчеты</h1>
                        <p>
                            Мы разработали интуитивный и простой интерфейс, к
                            которому можно легко привыкнуть за минимальное
                            количество времени.
                        </p>
                    </li>
                    <li>
                        <img src={planetImg} alt="planet"/>
                        <h1>Работайте в любой точке планеты</h1>
                        <p>
                            Ваша команда работает по всему миру? Сохраняйте
                            связь с коллегами вне зависимости от места положения
                            и коммуницируйте синхронно, не упуская деталей
                            проекта.
                        </p>
                    </li>
                </ul>
            </div>
            <div className={styles.emptyContainer}></div>
            <Footer />
        </div>
    );
};
