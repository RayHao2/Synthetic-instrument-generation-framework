# Generated by Django 4.0.1 on 2022-03-27 01:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_rate_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rate',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2022, 3, 27, 1, 24, 35, 113506)),
        ),
    ]
