# Machine Learning Models

The trained ML models (model.pkl and xgb_pipeline.pkl) are stored locally due to GitHub's 100MB file size limit.

## Model Files:
- model.pkl (245.85 MB) - Main lactose intolerance prediction model
- xgb_pipeline.pkl - XGBoost pipeline for advanced analytics

## Usage:
Models are automatically loaded by the FastAPI backend when running locally.
For deployment, upload models to cloud storage (AWS S3, Google Cloud Storage, etc.)

## Training:
Run the training scripts in /scripts/ to retrain models with new data.
