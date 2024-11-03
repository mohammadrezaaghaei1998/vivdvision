from django.db import models

# Create your models here.


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    # def __str__(self):
    #     return self.name

    def __str__(self):
        return f'{self.name} - {self.email}'
     

class Image(models.Model):
    CATEGORY_CHOICES = [
        ('street', 'Street Style'),
        ('advertisement', 'Advertisement'),
        ('fashionista', 'Fashionista'),
        ('artist', 'Artist'),
    ]
    
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='gallery/')

    def __str__(self):
        return f"{self.category} - {self.image.name}"
    


class Video(models.Model):
    title = models.CharField(max_length=100)
    video_file = models.FileField(upload_to='videos/')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title
    

class Partner_Company(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='logo/')

    def __str__(self):
        return self.name
    



class Team(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=200)
    image = models.ImageField(upload_to='team_images/')

    def __str__(self):
        return self.name