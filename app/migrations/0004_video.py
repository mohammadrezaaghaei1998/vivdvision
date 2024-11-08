# Generated by Django 5.1.2 on 2024-10-31 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_image_remove_galleryimage_category_delete_category_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('video_file', models.FileField(upload_to='videos/')),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
