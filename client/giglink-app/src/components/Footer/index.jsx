import styles from './style.module.css';
import gigLinkImg from '../../assets/giglink.png';
import vkImg from '../../assets/vk.png';
import twitterImg from '../../assets/twitter.png';
import telegramImg from '../../assets/tele.png';


export const Footer = () => {
  return (
    <ul className={styles.footer}>
        <li>
            <img src={gigLinkImg} alt='GigLink logo'/>
            <div className={styles.contacts}>
                <a href='#'><img src={vkImg} alt='vk'/></a>
                <a href='#'><img src={telegramImg} alt='telegram'/></a>
                <a href='#'><img src={twitterImg} alt='twitter'/></a>
            </div>
        </li>
        <li>
            <h1>Продукт</h1>
            <a href='#'>Домашняя страница</a>
            <a href='#'>Отзывы</a>
            <a href='#'>Тарифы</a>
        </li>
        <li>
            <h1>GigLink</h1>
            <a href='#'>Компания</a>
            <a href='#'>Вакансии</a>
            <a href='#'>Инвестирование</a>
        </li>
        <li>
            <h1>Помощь</h1>
            <a href='#'>Фрилансеру</a>
            <a href='#'>Работодателю</a>
            <a href='#'>Видео туториалы</a>
        </li>
    </ul>
  )
}
