from django.http import HttpResponse
from django.shortcuts import render

# url 
def homePage(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def booking(request):
    return render(request,"booking.html")

# def contact(request):
#     return render(request,"contact.html")

def login(request):
    return render(request,"login.html")

def signup(request):
    return render(request,"signup.html")






