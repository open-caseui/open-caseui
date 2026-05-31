from fastapi import FastAPI

app = FastAPI(title="open-caseui")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
