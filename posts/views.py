from django.shortcuts import render
from django.http import JsonResponse
import time

def index(request):
    return render(request, "posts/index.html")

def posts(request):
    start = int(request.GET.get("start", 0))
    end = int(request.GET.get("end", start + 10))
    
    # Simulate fetching posts
    posts = [f"Post #{i}" for i in range(start, end)]
    
    time.sleep(1)  # Simulate delay

    return JsonResponse({
        "posts": posts
    })
