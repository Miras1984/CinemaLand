from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Film(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default='A good film')
    rating = models.IntegerField(default=5.0)
    country = models.CharField(max_length=100)
    year = models.IntegerField(default=0)
    image = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    link = models.CharField(max_length=300)


class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    isLogged = models.BooleanField()


class Comment(models.Model):
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    film = models.ForeignKey(Film, on_delete=models.CASCADE, null=True)
    date = models.DateField()


class Moderator(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    salary = models.IntegerField()
