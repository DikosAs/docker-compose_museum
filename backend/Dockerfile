FROM python:3.12.2-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /var/www/app.backend
COPY ./museum-backend .
RUN python -m pip install --no-cache-dir -r requirements.txt

CMD python manage.py makemigrations
CMD python manage.py migrate