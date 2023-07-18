# LabVue

## Tech Stack
- React
- Redux
- Express
- NodeJS
- MySQL (AWS RDS -> GCP Cloud SQL)
- Deployment (backend): GCP Cloud Run
- Deployment (frontend): GCP App Engine

## Schemas
| Companies |
| --------- |
| id: INT  |
| name: VARCHAR(100) |

| Users |
| ----- |
| id: INT |
| first_name: VARCHAR(100) |
| last_name: VARCHAR(100) |
| title: VARCHAR(50) |
| phone: VARCHAR(50) |
| gender: ENUM('male', 'female') |
| email: VARCHAR(100) |
| access_level: ENUM('manager', 'supervisor', 'user') |
| last_login: TIMESTAMP |
| password: VARCHAR(100) |

| Vendors |
| ------ |
| id: INT |
| name: VARCHAR(100) |
| phone_1: VARCHAR(100) |
| phone_2: VARCHAR(100) |
| email_1: VARCHAR(100) |
| email_2: VARCHAR(100) |
| remarks: VARCHAR(250) |

| Frequencies | 
| --------- |
| id: INT |
| description: VARCHAR(50) |

| Assets |
| ------ |
| id: VARCHAR(100) |
| brand: VARCHAR(100) |
| model: VARCHAR(100) |
| serial: VARCHAR(100) |
| age: INT |
| activation_date: TIMESTAMP |
| installation_date: TIMESTAMP |
| pm_vendor: INT | # id of vendor
| calc_vendor: INT | # id of vendor
| instrument_description: VARCHAR(500) |
| usp1058: ENUM('A', 'B', 'C') |
| asset_level: ENUM('standard', 'critical', 'high-critical') |
| instrument_cost: DOUBLE |
| location: VARCHAR(100) |
| in_use: BOOLEAN |
| pm_freq: INT |
| cal_freq: INT |
| oq_freq: INT |
| contract_start_date: TIMESTAMP |
| contract_end_date: TIMESTAMP |
| iso17025: BOOLEAN |
| labour_entitlement: BOOLEAN |
| parts_entitlement: BOOLEAN |
| oq_detail: VARCHAR(500) |
| pm_detail: VARCHAR(500) |
| cal_detail: VARCHAR(500) |
| repair_detail: VARCHAR(500) |
| maintenance_cost: DOUBLE |


| Utilizations |
| ------------ |
| id: INT |
| asset_id: VARCHAR(100) |
| used_from: TIMESTAMP |
| used_to: TIMESTAMP |
| total_hours: INT |

| Repairs |
| ------- |
| id: INT |
| asset_id: VARCHAR(100) |
| problem: VARCHAR(250) |
| solution: VARCHAR(250) |
| reported_on: TIMESTAMP |
| recovered_on: TIMESTAMP |
| repair_vendor_id: INT |
| first_visit_complete: BOOLEAN |
| part_cost: DOUBLE |
| labor_cost: DOUBLE |

| Consumables |
| ----------- |
| id: INT |
| asset_id: VARCHAR(100) |
| description: VARCHAR(100) |
| cost: DOUBLE |
| part_number: VARCHAR(100) |
| consumed_on: TIMESTAMP |

| Pm_Cal_Oq |
| ------ |
| id: INT |
| type: ENUM('PM', 'CAL', 'OQ') |
| is_routine: BOOLEAN |
| remarks: VARCHAR(250) |
| scheduled_time: TIMESTAMP |
| completed_time: TIMESTAMP |
| vendor_id: INT |
| asset_id: INT |

