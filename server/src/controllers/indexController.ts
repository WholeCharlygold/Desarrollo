import { Request,Response } from 'express';

import pool from '../database';
import mysql from 'mysql';

class IndexController{

    public index(req:Request,res:Response){
        res.json({"text": "API is /api/desarrollo"});
    }

    public async login(req:Request,res:Response){
        const {usuario} = req.body;
        const {pwd} = req.body;
        console.log(req.body);
        const sql ="select * from usuarios where usuario="+pool.escape(usuario)+"and pwd="+pool.escape(pwd);

        await pool.query(sql,(err:any,ress:any) =>{
            if (err) console.log(err);
            else{
               
                if(ress.length != 0) res.json({text:true});
                else res.json({text:false});
            }
        });
    }

}

export const indexController = new IndexController();