const scrapeController = require('./scrapper')

router.get('/project/client',projectController.getProjectByClient);

router.put('/project/setting',projectController.updateProjectSetting);

router.post('/', sMUserController.addRandomProjectManager);
router.post('/user/randomApplicant', sMUserController.addRandomApplicant);


module.exports = router;