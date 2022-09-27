# LabVue

## Tech Stack
- React
- Redux
- Express
- NodeJS
- MySQL (~~AWS RDS~~ GCP)

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

| Frequency | 
| --------- |
| id: INT |
| description: VARCHAR(30) |

| Assets |
| ------ |
| id: VARCHAR(100) |
| brand: VARCHAR(100) |
| model: VARCHAR(100) |
| serial: VARCHAR(100) |
| age: INT | # need to adjust if asset age < 1 year, maybe divide by 12 months
| activation_date: TIMESTAMP |
| pm_vendor: INT | # id of vendor
| calc_vendor: INT | # id of vendor
| instrument_description: VARCHAR(500) |
| usp1058: ENUM('A', 'B', 'C') |
| asset_level: ENUM('standard', 'critical', 'high-critical') |
| instrument_cost: DOUBLE |
| location: VARCHAR(100) |
| in_use: BOOLEAN |


