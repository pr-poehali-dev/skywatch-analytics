"""
Отправка заявки с контактной формы сайта Экспресс Молд на почту stukin1@yandex.ru
"""
import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    company = body.get('company', '').strip()
    contact = body.get('contact', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact or not message:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': {'error': 'Заполните обязательные поля'}
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'stukin1@yandex.ru'
    recipient = 'stukin1@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <h2>Новая заявка с сайта Экспресс Молд</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;font-weight:bold;width:140px">Имя:</td><td style="padding:8px">{name}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Компания:</td><td style="padding:8px">{company or '—'}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Email / телефон:</td><td style="padding:8px">{contact}</td></tr>
      <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold;vertical-align:top">Задача:</td><td style="padding:8px">{message}</td></tr>
    </table>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as smtp:
        smtp.login(sender, smtp_password)
        smtp.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': {'ok': True}
    }