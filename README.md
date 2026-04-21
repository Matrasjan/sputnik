## Запуск

1. Создай `frontend/.env.local` с содержимым:
   NEXT_PUBLIC_API_URL=http://localhost:8000

2. docker compose -f docker-compose.dev.yml up

3. docker exec -it backend alembic upgrade head

4. Открыть фронт: http://localhost:3000/test
   Открыть бэк: http://localhost:8000/docs
