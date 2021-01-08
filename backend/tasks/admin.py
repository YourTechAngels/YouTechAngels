from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ("task_type", "description", "dbs_needed", "start_time",
                    "end_time", "min_duration", "status")
    search_fields = ("task_type", "description")

admin.site.register(Task, TaskAdmin)