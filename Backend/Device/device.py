import requests
import time
import random
from datetime import datetime

URL = "http://localhost:8000/vitals"

device_id = "watch_001"

while True:
    data = {
        "device_id": device_id,
        "heart_rate": random.randint(60, 110),
        "timestamp": datetime.now().isoformat()
    }

    response = requests.post(URL, json=data)
    print("Sent:", data, "Response:", response.status_code)

    time.sleep(2)