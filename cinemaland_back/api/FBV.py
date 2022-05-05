from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Film

from api.serializers import FilmSerializer


@api_view(['GET', 'POST'])
def show_films(request):
    if request.method == 'GET':
        films = Film.objects.all()
        serializer = FilmSerializer(films, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)



@api_view(['GET', 'PUT', 'DELETE'])
def show_film(request, film_id):
    try:
        film = Film.objects.get(id=film_id)
    except Film.DoesNotExist as ex:
        return Response({'message': str(ex)}, status=400)

    if request.method == 'GET':
        serializer = FilmSerializer(film)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FilmSerializer(instance=film, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        film.delete()
        return Response({'message': 'deleted'}, status=204)


