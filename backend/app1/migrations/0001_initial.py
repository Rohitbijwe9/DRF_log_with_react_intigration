# Generated by Django 4.2.6 on 2023-10-18 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=30)),
                ('lname', models.CharField(max_length=30)),
                ('gender', models.CharField(choices=[('male', 'male'), ('female', 'female'), ('other', 'other')], max_length=20)),
                ('address', models.CharField(max_length=50)),
                ('contact', models.BigIntegerField()),
                ('city', models.CharField(max_length=20)),
            ],
        ),
    ]