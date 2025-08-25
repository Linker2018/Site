from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="$PULS Token API", description="API for $PULS Token website")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "Pulsar Finance API is running"}

@app.get("/api/token-info")
async def get_token_info():
    return {
        "name": "Pulsar Finance",
        "symbol": "$PULS",
        "description": "A promising Web3 project combining tokenized economics and NFT technologies with innovative staking via Telegram bot.",
        "contract_address": "0xCAAE2A2F939F51d97CdFa9A86e79e3F085b799f3"
    }

@app.get("/")
async def root():
    return {"message": "Welcome to Pulsar Finance API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)