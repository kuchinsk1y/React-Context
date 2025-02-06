# React Context API Demo

Этот проект демонстрирует использование React Context API для управления глобальным состоянием без пропс-дриллинга.

## 🚀 Деплой

Проект задеплоен на Vercel:  
🔗 [Demo на Vercel](https://react-context-rhgvyiwal-tymurs-projects-289aac40.vercel.app)

## 📂 Установка и запуск локально

### 1. Клонирование репозитория

```
git clone https://github.com/ВАШ_ГИТХАБ_ЮЗЕРНЕЙМ/react-context.git
cd react-context
```

### 2. Установка зависимостей
```
npm install
```

### 3. Запуск приложения
```
npm start
```

Приложение запустится на http://localhost:3000/.

## 🛠 Используемые технологии
React
React Context API
React Hooks (useContext, useState)
Vercel (для деплоя)
📌 Функциональность
Глобальное состояние пользователя с помощью Context API
Получение и изменение данных на разных уровнях вложенности

## 📜 Структура проекта
/src
  ├── /components
  │   ├── UserProfile.js  # Компонент профиля пользователя
  │   ├── UpdateUser.js   # Кнопка изменения имени пользователя
  ├── /context
  │   ├── UserContext.js  # Контекст для хранения состояния пользователя
  ├── App.js
  ├── index.js
