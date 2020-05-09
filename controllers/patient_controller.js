
//for registering patient
module.exports.registerPatient = function(req, res){
    return res.render('patientregister', {
        title: "patient_register"
    });
}

// for registering create report
module.exports.createReport = function(req, res){
    return res.render('patientcreatereport', {
        title: "createReport"
    });
}

//for all_reports
module.exports.allReports = function(req, res){
    return res.render('patient_all_reportse', {
        title: "all_reports"
    });
}