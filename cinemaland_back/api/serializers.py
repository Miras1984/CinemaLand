from rest_framework import serializers

from api.models import  Category, Film, User, Moderator


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    surname = serializers.CharField()
    email = serializers.CharField()
    isLogged = serializers.BooleanField()

    def create(self, validated_data):
        user = User.objects.create(name=validated_data.get('name'),
                                   surname=validated_data.get('surname'),
                                   email=validated_data.get('email'),
                                   isLogged=validated_data.get('isLogged'))
        return user

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.surname = validated_data.get('surname')
        instance.email = validated_data.get('email')
        instance.isLogged = validated_data.get('isLogged')
        instance.save()
        return instance


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = ('id',
                  'name',
                  'description',
                  'rating',
                  'country',
                  'year',
                  'image',
                  'category',
                  'link')


class ModeratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moderator
        fields = ('id',
                  'name',
                  'surname',
                  'email',
                  'salary')
