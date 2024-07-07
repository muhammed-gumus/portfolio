# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from pymongo import MongoClient
# import feedparser
# import os
# from dotenv import load_dotenv

# # Load environment variables from .env file
# load_dotenv()

# app = FastAPI()

# # CORS settings
# origins = ["http://localhost:3000"]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class BlogPost(BaseModel):
#     title: str
#     date: str
#     description: str
#     slug: str

# # MongoDB connection details
# MONGO_DETAILS = os.getenv("MONGO_DETAILS")

# client = MongoClient(MONGO_DETAILS)
# database = client['Mami']
# collection = database['posts']

# def fetch_medium_posts():
#     feed_url = "https://medium.com/feed/@devmamidev"
#     feed = feedparser.parse(feed_url)
    
#     posts = []
#     for entry in feed.entries:
#         post = {
#             "title": entry.title,
#             "date": entry.published,
#             "description": entry.summary,
#             "slug": entry.id.split('/')[-1]
#         }
#         posts.append(post)
    
#     return posts

# @app.get("/fetch-and-get-posts/", response_model=list[BlogPost])
# def fetch_and_get_posts():
#     try:
#         medium_posts = fetch_medium_posts()
#         if medium_posts:
#             collection.delete_many({})  # Delete old posts
#             result = collection.insert_many(medium_posts)  # Insert new posts
#             print(f"Inserted posts: {result.inserted_ids}")
#         else:
#             print("No posts to insert.")
        
#         # Fetch posts from MongoDB
#         db_posts = []
#         for post in collection.find():
#             post["_id"] = str(post["_id"])
#             db_posts.append(post)
#         return db_posts
#     except Exception as e:
#         print(f"Error fetching or inserting posts: {e}")
#         raise HTTPException(status_code=500, detail=f"Error fetching or inserting posts: {e}")

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)
