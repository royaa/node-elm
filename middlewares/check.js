'use strict';

import AdminModel from '../models/admin/admin'

class Check {
	constructor(){
		
	}
	async checkAdmin(req, res, next){
		const admin_id = req.session.admin_id;
		if (!admin_id || !Number(admin_id)) {
			res.send({
				status: 0,
				type: 'ERROR_SESSION',
				message: '亲，您还没有登录',
			})
			return
		}else{
			const admin = await AdminModel.findOne({id: admin_id});
			if (!admin) {
				res.send({
					status: 0,
					type: 'HAVE_NO_ACCESS',
					message: '权限不足，请联系管理员提升权限',
				})
				return
			}
		}
		next()
	}
	
}

export default new Check()