
from django.template import RequestContext
from django.shortcuts import render_to_response


def m(request):
    return render_to_response('index.html',{},
                                  RequestContext(request))
 