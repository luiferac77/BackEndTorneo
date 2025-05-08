class IRepository{

    getAll(){throw new Error('método getAll no implementado');}
    getById(id){throw new Error('método getAById no implementado');}
    getByName(name){throw new Error('método getABName no implementado');}
    create(data){throw new Error('método create no implementado');}
    update(id){throw new Error('método update no implementado');}
    delete(id){throw new Error('método delete no implementado');}
    
}


console.log('Pasó por /respository/IRepository.mjs');
export default IRepository;