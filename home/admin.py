from django.contrib import admin
from .models import instrument, audio, rate
# Register your models here.


admin.site.register(instrument)
admin.site.register(audio)
admin.site.register(rate)