import {Request,Response} from 'express';
import pool from '../database';
import mysql from 'promise-mysql'
import clientesRoute from '../routes/clientesRoute'; 

class ClientesController{


    public async edit(req:Request,res:Response){
        const {id} = req.params;
        await pool.query("update clientes set ? where id=?",[req.body,id]);
        res.json({"text":"Registro actualizado"})
        
    }

    public async add(req:Request,res:Response){
        console.log(req.body.cliente);
        await pool.query("INSERT INTO clientes set ? ", [req.body.cliente]);
        res.json({"text":"Registro creado"});
    }

    public async getAll(req:Request,res:Response){
        const list = await pool.query("select * from clientes");
        res.json(list);
    }

    public async getOne(req:Request,res:Response){
        const {id} = req.params;
       const registro = await pool.query("select * from clientes where id=?",[id]);
       res.json(registro);
    }

    public async delete(req:Request,res:Response){
        const {id} = req.params;
        await pool.query("delete from clientes where id=?",[id]);
    }

   

}

const clientesController = new ClientesController();
export default clientesController;