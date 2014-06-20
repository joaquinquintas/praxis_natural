import os
import sys

sys.stdout = sys.stderr

os.environ['DJANGO_SETTINGS_MODULE'] = 'praxis.settings'
os.environ['PYTHON_EGG_CACHE'] = '/tmp'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()

sys.path.append('/home/ubuntu/praxis_natural')

print >> sys.stderr, sys.path 