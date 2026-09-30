from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# abilita frontend (IMPORTANTISSIMO)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# memoria temporanea
vitals = []

@app.post("/vitals")
def receive_vital(data: dict):
    """
    riceve dato dal device
    """
    vitals.append(data)
    return {"status": "ok", "received": data}

@app.get("/vitals")
def get_vitals():
    """
    frontend legge qui
    """
    if not vitals:
        return {}

    return vitals[-1]