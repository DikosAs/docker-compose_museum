from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, reverse
from django.shortcuts import redirect


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('api/', include('api.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
