from django.shortcuts import render
import time
from django.http import JsonResponse


# Create your views here.

def index(request):
    return render(request, "posts/index.html")

def posts(request):
    start = int(request.Get.get("start") or 0)
    end = int(request.Get.get("end") or (start+10))
    data = []

    for i in range(start, end+1):
        data.append(f"start #{i}")

    time.sleep(1)

    return JsonResponse({
        
        data
    })
