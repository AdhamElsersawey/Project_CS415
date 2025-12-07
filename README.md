# GWAS Multi-Disease SNP Predictor

**Short description**
A small pipeline that processes GWAS summary data, synthesizes patient SNP profiles, trains a multi-label deep neural network to predict disease risk from SNP patterns, and exposes a Flask API for predictions and testing.

---

## Problem statement

* There are millions of genetic variants in the human genome.
* It is difficult to identify which variants contribute to disease at scale.
* Manual analysis is not feasible for large datasets and population-scale screening.
* Late detection can reduce treatment effectiveness.

This project demonstrates an end-to-end prototype that: ingests GWAS records, creates synthetic patient profiles, trains a multi-label model to predict several disease risks from binary SNP presence, and serves predictions via a REST API.

---

## Repository layout

```
```


---

## Quick start (recommended order)

1. Create a Python virtual environment and install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Prepare GWAS input

* Place your `gwas_clean_data.csv` in the project root (used by `gwas_analysis.py`).
* Run the GWAS analysis to produce per-disease datasets:

```bash
python gwas_analysis.py
```

3. Create synthetic patients dataset (the script expects specific disease CSV files produced above):

```bash
python synth_generator.py
```

This creates `synthetic_patients_data.csv`.

4. Train the model:

```bash
python train_model.py
```

This script will:

* Load `synthetic_patients_data.csv`
* Train a multi-label neural network
* Save artifacts: `best_disease_model.keras`, `final_disease_model.keras`, `disease_scaler.pkl`, `model_info.pkl`

5. Run API server:

```bash
python app.py
```

Visit `http://localhost:5000/api/health` to verify the service.

--
## Model overview (high-level, not detailed)

* **Type**: Multi-label feed-forward neural network (Keras Sequential) for predicting multiple diseases simultaneously from a binary SNP presence vector.
* **Input**: Vector of length *N* (number of SNP features). Each position is 0/1 (absent/present). Optional continuous inputs are scaled with `StandardScaler`.
* **Output**: Vector of length *D* (number of target diseases). Each output node is a probability in [0,1] (sigmoid activation). The model uses binary cross-entropy loss to handle independent disease labels.
* **Architecture**: Several dense layers (1024→512→256→128) with BatchNormalization + Dropout, Adam optimizer (lr=0.0007), early stopping and checkpointing.

**Saved artifacts**

* `final_disease_model.keras` (trained Keras model)
* `best_disease_model.keras` (best checkpoint)
* `disease_scaler.pkl` (StandardScaler for input features)
* `model_info.pkl` (dict with `feature_columns`, `target_columns`, `input_shape`, `output_shape`, `threshold`)

---

## Inputs & outputs — short summary

### Training input

* `synthetic_patients_data.csv`: columns are: per-SNP binary columns (e.g. `rs12345-A`) + one-hot disease columns (target labels). The training script extracts target columns by regex and uses the rest as features.

### API inputs

1. **/api/predict/list** (POST) — provide SNP list

```json
{ "snp_list": ["rs6947395-T", "rs327636-A"], "threshold": 0.5 }
```

Response: JSON object with per-disease probabilities, `has_disease` booleans, `risk_level` strings, and a summary.

2. **/api/predict/binary** (POST) — provide binary vector

```json
{ "binary_vector": [0,1,0,0,...], "threshold": 0.5 }
```

Vector length must equal number of feature columns in `model_info.pkl`.

3. **/api/predict/batch** (POST) — batch of patients

```json
{ "patients": [ {"patient_id":"p1","snp_list":["rs...","rs..."]}, ...], "threshold": 0.5 }
```

4. **/api/model/info** (GET) — returns model metadata and example features.
5. **/api/health** (GET) — health & model-loaded status.
6. **/api/examples/snps** (GET) — returns hard-coded example SNPs for each disease.

---

## Privacy & Ethics

Predicting disease from genetic data is sensitive. This repository is intended for research and prototype use only. Do not use predictions for clinical decisions. Ensure data handling complies with applicable privacy laws (e.g., GDPR, HIPAA) when using real genotype or health data.

---