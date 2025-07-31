# $PULS Token Website

Копия сайта tutorialtoken.com с заменой логотипа на $PULS и удалением маскота.

## 🚀 Функции

- ✅ Полностью адаптивный дизайн
- ✅ Замена логотипа $TUT на $PULS  
- ✅ Удаление девочки-маскота из roadmap секции
- ✅ Легкая настройка ссылок и контента
- ✅ Современный дизайн с Tailwind CSS
- ✅ Анимации и эффекты свечения
- ✅ Копирование адреса токена в буфер обмена

## 🏗️ Архитектура

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: MongoDB (готов для будущих функций)
- **Деплой**: Supervisor для автозапуска сервисов

## 🎯 Основные разделы

1. **Hero Section** - Главный экран с названием токена и адресом контракта
2. **Exchange Listings** - Список бирж где можно купить токен  
3. **About Section** - Информация о проекте с видео
4. **Roadmap** - План развития без маскота (убран согласно требованиям)
5. **Footer** - Подвал с дополнительными ссылками

## ⚡ Быстрый старт

Сайт уже запущен и доступен по адресу: http://localhost:3000

### Проверка статуса сервисов:
```bash
sudo supervisorctl status
```

### Перезапуск сервисов:
```bash
sudo supervisorctl restart all
```

## 🔧 Настройка и кастомизация

### 1. Основная конфигурация
Отредактируйте файл `/app/config.json` для изменения:
- Информации о токене (название, символ, адрес контракта)  
- Ссылок на биржи и социальные сети
- Контента и текстов
- Пунктов roadmap

### 2. Изменение ссылок
В `config.json` найдите секцию `"links"`:
```json
{
  "links": {
    "buyToken": "https://pancakeswap.finance/?outputCurrency=YOUR_CONTRACT",
    "aiAgent": "https://x.com/your_agent", 
    "twitter": "https://x.com/your_token",
    "learningApp": "https://learn.your_domain.app/"
  }
}
```

### 3. Изменение бирж
Отредактируйте массив `"exchanges"` в config.json:
```json
{
  "exchanges": [
    {
      "name": "Новая Биржа",
      "url": "https://new-exchange.com/trade/YOUR_TOKEN"
    }
  ]
}
```

### 4. Настройка roadmap
Измените планы развития в секции `"roadmap"`:
```json
{
  "roadmap": [
    {
      "quarter": "🚀 Q1 2025",
      "items": [
        "Ваш новый пункт плана",
        "Еще один пункт"
      ]
    }
  ]
}
```

### 5. Применение изменений
После редактирования config.json:
```bash
sudo supervisorctl restart frontend
```

## 🎨 Кастомизация стилей

### Цвета
В `/app/frontend/tailwind.config.js` можно изменить цветовую схему:
```javascript
colors: {
  crypto: {
    gold: '#f59e0b',     // Основной золотой цвет
    orange: '#ea580c',   // Оранжевый акцент
    purple: '#7c3aed',   // Фиолетовый
    pink: '#ec4899'      // Розовый
  }
}
```

### Дополнительные стили
Отредактируйте `/app/frontend/src/App.css` для кастомных стилей.

## 📱 Адаптивность

Сайт полностью адаптивен и отлично выглядит на:
- 📱 Мобильных устройствах
- 💻 Планшетах  
- 🖥️ Десктопах
- 📺 Больших экранах

## 🔗 API Endpoints

Backend предоставляет следующие API:
- `GET /api/health` - Проверка статуса API
- `GET /api/token-info` - Информация о токене

## 📂 Структура проекта

```
/app/
├── backend/              # FastAPI backend
│   ├── server.py        # Основной сервер  
│   ├── requirements.txt # Python зависимости
│   └── .env            # Environment переменные
├── frontend/            # React frontend
│   ├── src/
│   │   ├── App.js      # Главный компонент
│   │   ├── App.css     # Кастомные стили
│   │   └── index.css   # Tailwind импорты
│   ├── public/         # Статические файлы
│   └── package.json    # Node.js зависимости
├── config.json         # Конфигурация сайта
└── README.md          # Эта документация
```

## ⚠️ Важные особенности

### Различия с оригиналом:
- ✅ Логотип изменен с $TUT на $PULS
- ✅ Убрана девочка-маскот из roadmap секции  
- ✅ Добавлена легкая настройка через config.json
- ✅ Улучшена структура для кастомизации

### Сохраненные элементы:
- ✅ Точная копия дизайна и структуры
- ✅ Все анимации и эффекты
- ✅ Адаптивная верстка
- ✅ Все функциональные элементы

## 🆘 Устранение неполадок

### Сайт не загружается:
```bash
sudo supervisorctl restart all
curl http://localhost:3000
```

### Ошибки в консоли:
```bash
tail -n 50 /var/log/supervisor/frontend.*.log
tail -n 50 /var/log/supervisor/backend.*.log
```

### Проблемы со стилями:
```bash
cd /app/frontend && yarn install
sudo supervisorctl restart frontend
```

## 🎉 Готово!

Ваш сайт готов к использованию! Просто отредактируйте `config.json` под ваши нужды и наслаждайтесь результатом.