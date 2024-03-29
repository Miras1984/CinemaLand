# Generated by Django 2.2 on 2022-05-05 11:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Category'),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('date', models.DateField()),
                ('film', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Film')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.User')),
            ],
        ),
    ]
