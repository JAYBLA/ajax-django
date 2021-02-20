from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Friend(models.Model):
    nick_name = models.CharField(max_length=100, unique =  True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    likes = models.CharField(max_length = 250)
    birth_date = models.DateField(auto_now=False, auto_now_add=False)
    lives_in = models.CharField(max_length=150, null = True, blank = True)

    def __str__(self):
        return self.nick_name

class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
