FROM python:3.12.2-slim
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /var/www/app.backend
COPY ./museum-backend .
RUN apt update
RUN apt install python3-dev default-libmysqlclient-dev build-essential pkg-config -y
RUN python -m pip install --upgrade -r requirements.txt

CMD python manage.py makemigrations
CMD python manage.py migrate