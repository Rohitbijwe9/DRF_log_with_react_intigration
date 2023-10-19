from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from.serializer import StudentSerializer
from .models import Student
from django.shortcuts import get_object_or_404
from rest_framework import viewsets

from django.http import HttpResponse
import logging

logger = logging.getLogger(__name__)

    
   


class StudentView(viewsets.ViewSet):

    def create(self,request):
        serializer=StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

    def list(self,request):
        post=Student.objects.all()
        serializer=StudentSerializer(post,many=True)
        return Response (data=serializer.data,status=status.HTTP_200_OK)
    
    def retrive(self,request,pk=None):
        post=get_object_or_404(Student,pk=pk)
        serializer=StudentSerializer(post)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def update(self,request,pk=None):
        post=get_object_or_404(Student,pk=pk)
        serializer=StudentSerializer(data=request.data,instance=post)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def partial_update(self,request,pk=None):
        post=get_object_or_404(Student,pk=pk)
        serializer=StudentSerializer(data=request.data,instance=post,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self,request,pk=None):
        post=get_object_or_404(Student,pk=pk)
        post.delete()
        return Response(data=None,status=status.HTTP_204_NO_CONTENT)
    


LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "{levelname} {asctime} {module} {process:d} {thread:d} {message}",
            "style": "{",
        },
        "simple": {
            "format": "{levelname} {message}",
            "style": "{",
        },
    },
    "filters": {
        "special": {
            "()": "project.logging.SpecialFilter",
            "foo": "bar",
        },
        "require_debug_true": {
            "()": "django.utils.log.RequireDebugTrue",
        },
    },
    "handlers": {
        "console": {
            "level": "INFO",
            "filters": ["require_debug_true"],
            "class": "logging.StreamHandler",
            "formatter": "simple",
        },
        "mail_admins": {
            "level": "ERROR",
            "class": "django.utils.log.AdminEmailHandler",
            "filters": ["special"],
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "propagate": True,
        },
        "django.request": {
            "handlers": ["mail_admins"],
            "level": "ERROR",
            "propagate": False,
        },
        "myproject.custom": {
            "handlers": ["console", "mail_admins"],
            "level": "INFO",
            "filters": ["special"],
        },
    },
}