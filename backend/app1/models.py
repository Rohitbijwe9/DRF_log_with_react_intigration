from django.db import models

gen=[('male','male'),('female','female'),('other','other')]

class Student(models.Model):
    fname=models.CharField(max_length=20)
    lname=models.CharField(max_length=30)
    gender=models.CharField(choices=gen,max_length=20,null=True)
    address=models.CharField(max_length=50)
    contact=models.BigIntegerField()
    city=models.CharField(max_length=20)
    