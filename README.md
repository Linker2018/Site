# Pulsar Finance Website

Современный сайт для **Pulsar Finance** - инновационного Web3 проекта, объединяющего преимущества токенизированной экономики и NFT технологий с уникальной системой стейкинга через Telegram бота.

## 🚀 Функции

- ✅ Полностью адаптивный дизайн для всех устройств
- ✅ Металлический переливающийся фон (бронза/золото/серебро) 
- ✅ Современная компонентная архитектура React
- ✅ Интеграция социальных сетей в header
- ✅ Копирование адреса токена в буфер обмена
- ✅ Анимации и эффекты свечения
- ✅ Кастомная иконка сайта Pulsar
- ✅ Легкая настройка через config.json

## 🏗️ Архитектура

- **Frontend**: React 18 + Tailwind CSS + Custom Animations
- **Backend**: FastAPI (Python)
- **Database**: MongoDB (готов для будущих функций)
- **Деплой**: Supervisor для автозапуска сервисов

## 🎯 Основные разделы

1. **Header** - Логотип $PULS + социальные сети (Telegram группа/бот, X, Whitepaper) + кнопка Buy
2. **Hero Section** - Главный экран "PULSAR" с подзаголовком "Innovative Web3 & DeFi 2.0"
3. **Contract Section** - Адрес смарт-контракта с функцией копирования
4. **Where to Buy** - PancakeSwap + информация о presale ($0.05, 360% APY)
5. **About Section** - Подробное описание проекта + карточки возможностей
6. **Roadmap** - Q3 2025 (Presale), Q4 2025 (DEX listing), 2026 (DAO)
7. **Footer** - Социальные сети и быстрые ссылки

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
- Ссылок на социальные сети и биржи
- Контента и текстов
- Пунктов roadmap

### 2. Социальные сети
В `config.json` найдите секцию `"links"`:
```json
{
  "links": {
    "buyToken": "https://pancakeswap.finance/?outputCurrency=CONTRACT_ADDRESS",
    "telegramGroup": "https://t.me/+XOGqCwsOrK80NDM0",
    "telegramBot": "https://t.me/Pulsar_FinanceBot",
    "twitter": "https://x.com/Pulsar__Finance",
    "whitePaper": "https://pulsar-5.gitbook.io/pulsar/"
  }
}
```

### 3. Изменение roadmap
Отредактируйте массив `"roadmap"` в config.json:
```json
{
  "roadmap": [
    {
      "quarter": "🚀 Q3 2025",
      "items": [
        "Presale Launch",
        "Telegram Bot Development"
      ]
    }
  ]
}
```

### 4. Применение изменений
После редактирования config.json:
```bash
sudo supervisorctl restart frontend
```

## 🎨 Дизайн особенности

### Металлический градиентный фон
- Переливающийся фон из оттенков бронзы, золота и серебра
- Анимированные градиенты с эффектами shimmer
- Металлические hover-эффекты на кнопках и карточках

### Цвета
В `/app/frontend/tailwind.config.js`:
```javascript
metallic: {
  bronze: '#CD7F32',
  gold: '#FFD700', 
  silver: '#C0C0C0'
}
```

### Кастомная иконка
- SVG иконка Pulsar в `/app/frontend/public/favicon.svg`
- ICO версия в `/app/frontend/public/favicon.ico`

## 📂 Структура компонентов

```
/app/frontend/src/
├── components/
│   ├── Header.js           # Header с соцсетями
│   ├── HeroSection.js      # Главная секция
│   ├── ContractSection.js  # Секция с контрактом
│   ├── WhereToBuy.js       # Секция покупки
│   ├── AboutSection.js     # О проекте
│   ├── RoadmapSection.js   # Дорожная карта
│   ├── Footer.js           # Подвал
│   └── index.js           # Экспорт компонентов
├── App.js                 # Главный компонент
├── App.css               # Кастомные стили
└── index.css             # Tailwind + анимации
```

## 🔗 API Endpoints

Backend предоставляет следующие API:
- `GET /api/health` - Проверка статуса API
- `GET /api/token-info` - Информация о токене Pulsar Finance
- `GET /` - Корневой endpoint

## 📱 Адаптивность

Сайт полностью адаптивен и отлично выглядит на:
- 📱 Мобильных устройствах (социальные иконки перемещаются вниз)
- 💻 Планшетах  
- 🖥️ Десктопах (социальные иконки в header)
- 📺 Больших экранах

## ⚠️ Важные особенности

### Отличия от оригинального $PULS Token:
- ✅ Полное ребрендирование на Pulsar Finance
- ✅ Новый переливающийся металлический фон
- ✅ Компонентная архитектура вместо монолитного App.js
- ✅ Интеграция социальных сетей в header
- ✅ Кастомная иконка сайта
- ✅ Обновленная дорожная карта и контент
- ✅ Только PancakeSwap в секции покупки

### Технические улучшения:
- ✅ Модульные компоненты с централизованной конфигурацией
- ✅ Улучшенные анимации и переходы
- ✅ Металлические hover-эффекты
- ✅ Оптимизированная производительность
- ✅ SEO-оптимизация (title, meta, favicon)

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

## 🎉 Результат

Профессиональный сайт **Pulsar Finance** готов к использованию! 

**Основные достижения:**
- 🔥 Уникальный металлический переливающийся фон
- 🚀 Современная компонентная архитектура
- 📱 Полная адаптивность
- 🔗 Интеграция всех социальных сетей
- ⚡ Высокая производительность
- 🎨 Профессиональный Web3 дизайн

Просто отредактируйте `config.json` под ваши нужды и наслаждайтесь результатом!