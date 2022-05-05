from api.models import Category
from api.serializers import CategorySerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class show_categoriesAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    permission_classes = (IsAuthenticated,)


class show_categoryAPIView(APIView):
    def get_category(self, pk):
        try:
            category = Category.objects.get(id=pk)
            return category
        except Category.DoesNotExist as ex:
            return Response({'message': str(ex)}, status=400)

    def get(self, request, pk=None):
        company = self.get_category(pk)
        serializer = CategorySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_category(pk)
        serializer = CategorySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        company = self.get_category(pk)
        company.delete()
        return Response({'message': 'deleted'}, status=204)



