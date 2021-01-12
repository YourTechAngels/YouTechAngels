# Generated by Django 3.1.4 on 2021-01-11 13:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210111_1349'),
        ('tasks', '0003_auto_20210101_1748'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_type', models.CharField(choices=[('GRO', 'Groceries'), ('PHA', 'Pharmacy'), ('DOG', 'Dog Walk'), ('HOS', 'Hospital Appointment'), ('CHAT', 'Phone Chat'), ('ANY', 'Other')], max_length=5)),
                ('min_duration', models.IntegerField()),
                ('DBS_required', models.BooleanField()),
            ],
        ),
        migrations.AlterModelOptions(
            name='task',
            options={'ordering': ['start_time']},
        ),
        migrations.AddField(
            model_name='task',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.requestee'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='task',
            name='volunteer',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.volunteer'),
            preserve_default=False,
        ),
    ]
