from fastapi import FastAPI
from sqlalchemy import create_engine, text
import os

app = FastAPI()
DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)

@app.get("/update")
def update_db():
    with engine.connect() as conn:
        conn.execute(text("CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, data TEXT);"))
        conn.execute(text("INSERT INTO test (data) VALUES ('Hello from FastAPI');"))
    return {"status": "inserted"}
