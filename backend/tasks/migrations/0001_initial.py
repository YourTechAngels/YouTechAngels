# Generated by Django 3.1.4 on 2021-01-29 10:35

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskType',
            fields=[
                ('task_type', models.CharField(choices=[('GRO', 'Groceries'), ('PHA', 'Pharmacy'), ('DOG', 'Dog Walk'), ('HOS', 'Hospital Appointment'), ('CHAT', 'Phone Chat'), ('ANY', 'Other')], max_length=5, primary_key=True, serialize=False)),
                ('min_duration', models.IntegerField(default=30)),
                ('dbs_required', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True, default='')),
                ('dbs_required', models.BooleanField(default=False)),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('min_duration', models.DurationField(default=datetime.timedelta(seconds=1800))),
                ('status', models.CharField(choices=[('OP', 'Open'), ('EXP', 'Expired'), ('AS', 'Assigned'), ('CL', 'Canceled'), ('DN', 'Completed')], default='OP', max_length=5)),
                ('requested_vol', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='requested_volunteer', to=settings.AUTH_USER_MODEL)),
                ('requestee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requestee', to=settings.AUTH_USER_MODEL)),
                ('task_type', models.ForeignKey(choices=[('GRO', 'Groceries'), ('PHA', 'Pharmacy'), ('DOG', 'Dog Walk'), ('HOS', 'Hospital Appointment'), ('CHAT', 'Phone Chat'), ('ANY', 'Other')], on_delete=django.db.models.deletion.CASCADE, to='tasks.tasktype')),
                ('volunteer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='volunteer', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['start_time'],
            },
        ),
    ]
