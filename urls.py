from django.contrib import admin
admin.autodiscover()

from django.conf import settings
from django.conf.urls import patterns, include, url
from views import *


admin.autodiscover()


urlpatterns = patterns('',
    url(r'^$', m, name='m'),
    (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
)