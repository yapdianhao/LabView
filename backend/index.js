/* eslint-disable no-multi-str */
const express = require("express");
const db = require("./db");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// console.log(require('crypto').randomBytes(64).toString('hex'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/api/users', (req, res) => {
//     db.query('SELECT * FROM users', (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         res.send(result);
//     });
// });

app.get("/", (req, res) => {
  db.query("SHOW TABLES", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.use("/api/users", require("./routes/userRoutes"));

app.get("/api/user-list", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/assets", (req, res) => {
  db.query("SELECT \
    a.id, \
    a.brand, \
    a.model, \
    a.serial, \
    a.age, \
    a.activation_date, \
    a.asset_level, \
    a.instrument_description, \
    a.usp1058, \
    v1.name as pm_cal_oq_vendor_name, \
    v2.name as repair_vendor_name, \
    v3.name as default_vendor_name \
    FROM assets a \
    LEFT OUTER JOIN vendors v1 on v1.id = a.pm_cal_oq_vendor \
    LEFT OUTER JOIN vendors v2 on v2.id = a.repair_vendor \
    LEFT OUTER JOIN vendors v3 on v3.id = a.default_vendor", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// app.get('/api/assets', (err, res) => {
//   db.query('SELECT * FROM assets', (err, result) => {
//     if (err) console.log(err);
//     else res.send(result);
//   })
// })

app.get("/api/assets-in-use", (req, res) => {
  db.query("SELECT \
    a.id, \
    a.brand, \
    a.model, \
    a.serial, \
    a.age, \
    a.activation_date, \
    a.asset_level, \
    a.instrument_description, \
    a.usp1058, \
    v1.name as pm_cal_oq_vendor_name, \
    v2.name as repair_vendor_name, \
    v3.name as default_vendor_name \
    FROM assets a \
    INNER JOIN vendors v1 on v1.id = a.pm_cal_oq_vendor \
    INNER JOIN vendors v2 on v2.id = a.repair_vendor \
    INNER JOIN vendors v3 on v3.id = a.default_vendor \
   WHERE in_use = TRUE", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/get-asset", (req, res) => {
  const { query } = req;
  db.query("SELECT * FROM assets WHERE id = ?", [query.id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/get-vendor", (req, res) => {
  const { query } = req;
  db.query("SELECT * FROM vendors WHERE id = ?", [query.id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/frequencies", (req, res) => {
  db.query("SELECT * FROM frequencies", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/vendors", (req, res) => {
  db.query("SELECT * FROM vendors", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/repairs", (req, res) => {
  db.query(
    "SELECT r.id, \
              asset_id, \
              brand, \
              model, \
              serial, \
              problem, \
              solution, \
              reported_on, \
              recovered_on, \
              (SELECT TIMESTAMPDIFF(HOUR, reported_on, recovered_on)) AS diff, \
              v.name AS vendor_name, \
              phone_1 AS vendor_phone, \
              email_1 AS vendor_email, \
              first_visit_complete, \
              part_cost, \
              labor_cost, \
              labour_entitlement, \
              parts_entitlement, \
              (SELECT part_cost + labor_cost) AS total_cost \
              FROM repairs r \
              INNER JOIN assets a ON r.asset_id = a.id \
              INNER JOIN vendors v ON r.repair_vendor_id = v.id",
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.get("/api/get-repair", (req, res) => {
  const { query } = req;
  db.query(
    "SELECT asset_id, \
        problem, \
        solution, \
        reported_on, \
        recovered_on, \
        repair_vendor_id, \
        first_visit_complete, \
        part_cost, \
        labor_cost, \
        (SELECT TIMESTAMPDIFF(HOUR, reported_on, recovered_on)) AS diff\
        FROM repairs \
        WHERE asset_id = ?",
    [query.asset_id],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.get("/api/get-utils", (req, res) => {
  const { query } = req;
  db.query(
    "SELECT used_from, used_to, (SELECT TIMESTAMPDIFF(HOUR, used_from, used_to)) AS diff FROM utilizations WHERE asset_id = ?",
    [query.asset_id],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.post('/api/get-vendor-by-name', (req, res) => {
  const { body } = req;
  const { vendorName } = body;
  db.query('SELECT * FROM vendors WHERE name = ?', [vendorName], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post('/api/edit-vendor', (req, res) => {
  const { body } = req;
  const { vendor } = body;
  db.query('UPDATE vendors SET\
    name = ?, \
    phone_1 = ?, \
    email_1 = ?, \
    phone_2 = ?, \
    email_2 = ?, \
    remarks = ? \
    WHERE id = ?',
    [
      vendor.name,
      vendor.phone1,
      vendor.email1,
      vendor.phone2, 
      vendor.email2,
      vendor.remarks,
      vendor.id
    ], (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
});

app.post("/api/edit-asset", (req, res) => {
  const { body } = req;
  const { asset } = body;
  db.query(
    "UPDATE assets SET \
              brand = ?, \
              model = ?, \
              serial = ?, \
              age = ?, \
              activation_date = STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), \
              installation_date = STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), \
              usp1058 = ?, \
              instrument_description = ?, \
              instrument_cost = ?, \
              location = ?, \
              asset_level = ?, \
              in_use = ?, \
              pm_freq = ?, \
              cal_freq = ?, \
              oq_freq = ?, \
              contract_start_date = STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), \
              contract_end_date = STR_TO_DATE(?, '%Y-%m-%d %H:%i:%s'), \
              iso17025 = ?, \
              labour_entitlement = ?, \
              parts_entitlement = ?, \
              oq_detail = ?, \
              cal_detail = ?, \
              pm_detail = ?, \
              repair_detail = ?, \
              maintenance_cost = ?, \
              pm_cal_oq_vendor = ?, \
              repair_vendor = ? \
            WHERE id = ?",
    [
      asset.brand,
      asset.model,
      asset.serial,
      asset.age,
      new Date(asset.activation_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      new Date(asset.installation_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      asset.usp1058,
      asset.instrument_description,
      asset.instrument_cost,
      asset.location,
      asset.asset_level,
      asset.in_use,
      asset.pm_freq,
      asset.cal_freq,
      asset.oq_freq,
      new Date(asset.contract_start_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      new Date(asset.contract_end_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      asset.iso17025,
      asset.labour_entitlement,
      asset.parts_entitlement,
      asset.oq_detail,
      asset.cal_detail,
      asset.pm_detail,
      asset.repair_detail,
      asset.maintenance_cost,
      asset.pm_cal_oq_vendor,
      asset.repair_vendor,
      asset.id,
    ],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.post("/api/edit-repair", (req, res) => {
  const { body } = req;
  const { repair } = body;
  console.log(repair);
});

app.get("/api/utils", (req, res) => {
  db.query(
    "SELECT asset_id, \
              brand, \
              model, \
              serial, \
              used_from, \
            used_to, \
              (SELECT TIMESTAMPDIFF(HOUR, used_from, used_to)) AS diff \
              FROM assets a \
              INNER JOIN utilizations u ON u.asset_id = a.id \
    ",
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.get('/api/consumables', (req, res) => {
  db.query(
    "SELECT c.id,\
      asset_id, \
      brand, \
      model, \
      serial, \
      description, \
      part_number, \
      cost, \
      consumed_on \
      FROM assets a \
      INNER JOIN consumables c ON c.asset_id = a.id",
      (err, result) => {
        if (err) console.log(err);
        else res.send(result);
      }
  );
})

app.post('/api/edit-consumable', (req, res) => {
  const { body } = req;
  const { consumable } = body;
  console.log('consumable to edit', consumable);
  db.query(
    'UPDATE consumables SET \
      description = ?, \
      part_number = ?, \
      cost = ?, \
      consumed_on = CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\')\
    WHERE id = ?\
    ', 
    [
      consumable.description,
      consumable.partNumber,
      consumable.cost,
      new Date(consumable.consumedOnDate)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      consumable.id
    ],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.post('/api/add-consumable', (req, res) => {
  const { body } = req;
  const { consumable } = body;
  console.log(consumable);
  consumable.consumedDateTime = new Date(`${consumable.consumedDate} ${consumable.consumedTime}`)
  console.log(consumable.consumedDateTime);
  db.query(
    'INSERT INTO consumables(asset_id, description, cost, part_number, consumed_on)\
    VALUES(?, ?, ?, ?, CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\'))'
  , [
    consumable.assetId,
    consumable.description,
    consumable.cost, 
    consumable.partNo,
    consumable.consumedDateTime
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
  ], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.post('/api/add-pm-cal-oq', (req, res) => {
  const { body } = req;
  const { pmCalOq } = body;
  console.log('pm cal oq to submit', pmCalOq);
  pmCalOq.completeDateTime = new Date(`${pmCalOq.completeDate} ${pmCalOq.completeTime}`);
  pmCalOq.scheduledDateTime = new Date(`${pmCalOq.scheduledDate} ${pmCalOq.scheduledTime}`);
  db.query('INSERT INTO pm_cal_oq (asset_id, vendor_id, is_routine, type, remarks, scheduled_time, completed_time)\
    VALUES (?, ?, ?, ?, ?,\
      CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\'),\
      CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\'))', 
      [
        pmCalOq.assetId,
        pmCalOq.vendorId,
        pmCalOq.isRoutine,
        pmCalOq.type,
        pmCalOq.remarks ?? null,
        pmCalOq.scheduledDateTime.toISOString().slice(0, 19).replace("T", " "),
        pmCalOq.completeDateTime.toISOString().slice(0, 19).replace("T", " ")
      ], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
      })
})

app.post('/api/edit-pm-cal-oq', (req, res) => {
  const { body } = req;
  const { pmCalOq } = body;
  console.log('pm cal oq to edit', pmCalOq);
  db.query(
    'UPDATE pm_cal_oq SET\
      vendor_id = ?, \
      type = ?, \
      is_routine = ?, \
      remarks = ?, \
      scheduled_time = CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\'), \
      completed_time = CONVERT_TZ(STR_TO_DATE(?, \'%Y-%m-%d %H:%i:%s\'), \'+00:00\',\'+08:00\')\
    WHERE id = ?',
    [
      pmCalOq.pmCalOqVendorId,
      pmCalOq.type,
      pmCalOq.isRoutine,
      pmCalOq.remarks,
      new Date(pmCalOq.scheduledDateTime)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      new Date(pmCalOq.completedDateTime)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      pmCalOq.pmCalOqId
    ],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  )
})

app.get('/api/pm-cal-oq', (req, res) => {
  const { query } = req;
  const { types, shouldShowHistory} = query;
  if (shouldShowHistory) {
    db.query(
      "SELECT asset_id,\
              brand,\
              model,\
              serial,\
              type,\
              is_routine,\
              p.remarks,\
              scheduled_time,\
              completed_time,\
              v.id AS vendor_id, \
              v.name AS vendor_name, \
              phone_1 AS vendor_phone, \
              email_1 AS vendor_email, \
              p.id AS pm_cal_oq_id, \
              name FROM pm_cal_oq p\
              INNER JOIN assets a on p.asset_id = a.id\
              INNER JOIN vendors v on v.id = p.vendor_id\
              WHERE type in (?)", [types]
      , (err, result) => {
        if (err) console.log(err);
        else res.send(result)
      });
  } else {
    db.query(
      "SELECT asset_id,\
              brand,\
              model,\
              serial,\
              type,\
              is_routine,\
              remarks,\
              scheduled_time,\
              completed_time,\
              v.name AS vendor_name, \
              phone_1 AS vendor_phone, \
              email_1 AS vendor_email, \
              name FROM pm_cal_oq p\
              INNER JOIN assets a on p.asset_id = a.id\
              INNER JOIN vendors v on v.id = p.vendor_id\
              WHERE type in (?)\
              AND completed_time = NULL or completed_time >= CURRENT_TIMESTAMP", [types]
      , (err, result) => {
        if (err) console.log(err);
        else res.send(result)
      });
  }
})

app.post('/api/add-vendor', (req, res) => {
  const { body } = req;
  const { vendor } = body;
  db.query('INSERT INTO vendors (name, phone_1, email_1, phone_2, email_2, remarks) VALUES\
    (?, ?, ?, ?, ?, ?)\
  ',
  [
    vendor.name,
    vendor.phone1,
    vendor.email1,
    vendor.phone2 ?? null,
    vendor.email2 ?? null,
    vendor.remarks ?? null
  ], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
