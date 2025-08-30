import express from 'express';
import { createLead, getLeads } from '../controllers/leads.controller.js';

const router = express.Router();


router.post('/create', createLead);
router.get('/get', getLeads);

export default router;