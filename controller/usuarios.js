const {response }= require('express');

const userGet = (req, res = response)  => {

    /*Parametros opcionales*/
    const {name, surname = "Diaz" } = req.query;

    res.status(200).json({
        ok: true,
        msg:'GET API CONTROLLER',
        name,
        surname
    });
}



const userPost = ( req, res = response ) => {

    const { name, surname} = req.body;

    res.status(201).json({
        ok: true,
        msg:'POST  API',
        name,
        surname
    })
}


const userPut = ( req, res = response ) => {


      /*Parametros obligatorioss*/
    const { id } = req.params;


    res.status(200).json({
        ok: true,
        msg:'PUT API',
        id
    })
}



const userDelete = ( req, res = response ) => {
    res.status(200).json({
        ok: true,
        msg:'DELETE API'
    })
}



module.exports = {userGet, userPost,userPut,userDelete }