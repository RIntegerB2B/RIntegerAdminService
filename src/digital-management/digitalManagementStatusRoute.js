var digitalManagementStatusMgr = require('./digitalManagementStatusMgr');

module.exports = function (app) {



    app.route('/addmonth')
        .post(digitalManagementStatusMgr.addMonth);

        app.route('/bookingid/:id/month/:month/year/:year/monthlyplan')  // view monthly plan
        .get(digitalManagementStatusMgr.viewMonthlyPlan);

    app.route('/addmonthlyplan')
        .post(digitalManagementStatusMgr.addMonthlyPlan);   // add monthly plan

    app.route('/id/:id/monthid/:monthid') // add year
        .put(digitalManagementStatusMgr.editMonthlyPlan);

    app.route('/id/:id/monthid/:monthid') // delete year
        .delete(digitalManagementStatusMgr.deleteMonthlyPlan);

        app.route('/id/:id/month/:monthid/status/:status') // update status
        .get(digitalManagementStatusMgr.updateMonthlyStatus);

       
    app.route('/id/:id/monthid/:monthid/week/:weekno')
        .get(digitalManagementStatusMgr.copyMonthlyPlanToWeekly);

         // weekly plan 
    app.route('/id/:id/weekid/:weekid')
        .put(digitalManagementStatusMgr.editWeeklyPlan);     //edit weekly plan  ..

    app.route('/bookingid/:id/month/:month/year/:year/addweek') // ..
        .put(digitalManagementStatusMgr.addWeeklyPlan);

        app.route('/bookingid/:id/month/:month/year/:year/week/:week')  // view weekly plan ()
        .get(digitalManagementStatusMgr.viewWeeklyPlan);

        app.route('/bookingid/:id/month/:month/year/:year/viewweek')  // view all weekly plan ()
        .get(digitalManagementStatusMgr.viewAllWeeklyPlan);

    app.route('/id/:id/weekid/:weekid')
        .delete(digitalManagementStatusMgr.deleteWeeklyPlan);  // ..


    app.route('/id/:id/weekid/:weekid/day/:day')
        .get(digitalManagementStatusMgr.copyWeeklyPlanToDaily);  //..

        app.route('/id/:id/week/:weekid/status/:status') // update status
        .get(digitalManagementStatusMgr.updateWeeklyStatus);   //..

         // daily plan

         app.route('/bookingid/:id/month/:month/year/:year/day')  // ...
         .put(digitalManagementStatusMgr.addDailyPlan);

         app.route('/id/:id/date/:dateid')
         .put(digitalManagementStatusMgr.editDailyPlan);   // ..

         app.route('/id/:id/dateid/:dateid')
         .delete(digitalManagementStatusMgr.deleteDailyPlan);  // ..

         app.route('/id/:id/daily/:dailyid/status/:status') // update status
         .get(digitalManagementStatusMgr.updateDailyStatus);
 
}