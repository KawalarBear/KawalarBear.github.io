from googleapiclient.discovery import build
rickterm = ["RICK","ROLL","rick","rickroll","Rick Astley","Official Rick Astley"]
api_key = 'AIzaSyBYAhniPs7Y-_lbJkrJUs0QM4sMcYPxEN4'
fullurl = str(input("Enter the URL of the video you want to check: "))
link = fullurl.replace("https://www.youtube.com/watch?v=", "")
youtube = build('youtube', 'v3', developerKey=api_key)

request = youtube.videos().list(
        part='snippet',
        id = (link)
    )

response = (str(request.execute()))

print (response)

if any(x in response for x in rickterm):
	print("RickRoll Detected - DO NOT CLICK")
else:
	print("No RickRoll Detected, ur good m8")
