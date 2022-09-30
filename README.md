# Личный кабинет пользователя
### Версия node v16.13.2

Рабочую версию можно посмотреть [https://nefedov-it.ru/_sites/test_take_off_staff](https://nefedov-it.ru/_sites/test_take_off_staff)

В приложении присутствует страница регистрации и входа в личный кабинет.
В личном кабинете подгружаются контактные данные пользователей, которые можно редактировать, удалять, а так же добавлять новых пользователей. Для удобства добавлено поле для поиска контактов по имени.

Приложение выполнено на TypeScript, без использования any и
ts-ignore.

При выполнении работы использован стейт менеджер Redux.

Страница со списком контактов пользователя доступна только после авторизации.

## Доступные скрипты

В каталоге проекта вы можете запустить:

### `npm start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.
Страница перезагрузится, если вы внесете изменения.\
Вы также увидите любые ошибки lint в консоли.

### `npm run build`

Создает приложение для производства в папке `build`.\
Он правильно объединяет React в производственном режиме и оптимизирует сборку для достижения наилучшей
производительности.

Сборка минимизирована, а имена файлов включают хэши.