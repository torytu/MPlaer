const defaultOptions = {
    headers:{
        isFetch:1
    }
}

export default {
    baseUrl:'/api/',
    fetchData(url,options = defaultOptions){
        return new Promise((resolve,reject)=>{
            fetch(url,options).then(response=>response.json())
            .then(data=>resolve(data)).catch(err=>reject(err))
        })
    },
    async search(title){
       let datas = await this.fetchData(this.baseUrl + 'search/'+ title)
       return datas
    },
    async songDetail(id){
        let detail  = await this.fetchData(this.baseUrl + 'song/detail/' + id)
        return detail
    }
}