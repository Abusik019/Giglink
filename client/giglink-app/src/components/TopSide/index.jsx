import React from 'react'
import styles from './style.module.css'
import logo from '../../assets/giglink.png'
import Possbilities from '../../assets/Possbilities.png'
import catalog from '../../assets/Catalog.png'
import time from '../../assets/Time.png'

function TopSide() {
  return (
    <div>
        <header>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li className={styles.dropdown}>
              <a href="#design">Дизайн</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Логотип и брендинг</a></li>
                <li><a href="#">Инфографика</a></li>
                <li><a href="#">Презентации</a></li>
                <li><a href="#">Арт и Иллюстрации</a></li>
                <li><a href="#">Веб и Мобильный Дизайн</a></li>
                <li><a href="#">Маркетплейсы и Социальные Сети</a></li>
                <li><a href="#">Интерьер и Экстерьер</a></li>
                <li><a href="#">Полиграфия</a></li>
                <li><a href="#">Наружная Реклама</a></li>
                <li><a href="#">Промышленный Дизайн</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#it">IT</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Доработка и Настройка Сайта</a></li>
                <li><a href="#">Создание Сайтов</a></li>
                <li><a href="#">Вёрстка</a></li>
                <li><a href="#">Десктоп программирвоание</a></li>
                <li><a href="#">Скрипты и Боты</a></li>
                <li><a href="#">Мобильные Приложения</a></li>
                <li><a href="#">Игры</a></li>
                <li><a href="#">Сервера и Хостинг</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#text">Работа с текстом</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Тексты и Наполнение Сайта</a></li>
                <li><a href="#">Переводы</a></li>
                <li><a href="#">Набор Текста</a></li>
                <li><a href="#">Резюме и Вакансии</a></li>
                <li><a href="#">Продающие Тексты</a></li>
                <li><a href="#">Рефераты</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#smm">Реклама и SMM</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Контекстная Реклама</a></li>
                <li><a href="#">Социальные Сети и SMM</a></li>
                <li><a href="#">Базы данных и Клиентов</a></li>
                <li><a href="#">Рассылки</a></li>
                <li><a href="#">Маркетплейсы и Доски Объявлений</a></li>
                <li><a href="#">Реклама и PR</a></li>
              </ul>
            </li>
            <li className={styles.logo}>
              <a href="#"><img src={logo} alt="Логотип" /></a>
            </li>
            <li className={styles.dropdown}>
              <a href="#seo">SEO</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">SEO</a></li>
                <li><a href="#">Трафик</a></li>
                <li><a href="#">Статистика и Анализ</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#audio-video">Аудио и Видео</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Аудиозапись и Озвучка</a></li>
                <li><a href="#">Музыка и Песни</a></li>
                <li><a href="#">Редактирование Аудио</a></li>
                <li><a href="#">Интро</a></li>
                <li><a href="#">Анимация Логотипа</a></li>
                <li><a href="#">Видеоролики</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#business">Бизнес</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Персональный Помощник</a></li>
                <li><a href="#">Бухгалтерия и Налоги</a></li>
                <li><a href="#">Обзвоны и Продажи</a></li>
                <li><a href="#">Юридическая Помощь</a></li>
                <li><a href="#">HR-поддержка</a></li>
                <li><a href="#">Обучение и Консалтинг</a></li>
                <li><a href="#">Стройка и Ремонт</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <a href="#account">Аккаунт</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="#">Личные данные</a></li>
                <li><a href="#">Настройки</a></li>
                <li><a href="#">Помощь</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.possibilities}>
          <div className={styles.possibilitiesTextSection}>
            <p className={styles.possibilitiesMainText}>
              <strong>Откройте мир возможностей с<br />GigLink: где каждый проект - <br />это история успеха</strong>
            </p>
            <p className={styles.possibilitiesSubText}>
              Данная платформа предлагает возможность для потребителей<br />товаров размещать заказы различных видов и найти специалистов <br />для выполнения работ.<br /><br />
            </p>
            <button className={styles.registrationBtn} onClick={() => window.location.href = 'Registration.html'}>Регистрация</button>
          </div>
          <div className={styles.possibilitiesImageSection}>
            <img src={Possbilities} className={styles.possibilitiesContentImage} />
          </div>
        </div>
        <div className={styles.catalog}>
          <div className={styles.catalogImageSection}>
            <img src={catalog} className={styles.catalogContentImage} />
          </div>
          <div className={styles.catalogTextSection}>
            <p className={styles.catalogMainText}><strong>Выбор каталога</strong></p>
            <p className={styles.catalogSubText}>Выбор каталога <br />Используйте каталоги и фильтры для удобного поиска<br /> подходящих задач. Добавляйте задачи, решайте<br /> задачи, набирайте популярность среди<br /> профессианалов.</p>
          </div>
        </div>
        <div className={styles.time}>
          <div className={styles.timeTextSection}>
            <p className={styles.timeMainText}><strong>Управление временем</strong></p>
            <p className={styles.timeSubText}>Следите за задачами, над которыми вы ежедневно<br />работаете и анализируйте, сколько времени вы<br />потратили на каждый проект. Вы можете использовать<br />автоматический таймер или управлять им вручную.</p>
          </div>
          <div className={styles.timeImageSection}>
            <img src={time} className={styles.timeImageContent} />
          </div>
        </div>
        </main>
    </div>
  )
}

export default TopSide