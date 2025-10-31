import axios from "axios";
import Global from "../Global";
export default class ServiceCoches{
    getCoches() {
        return new Promise(function(resolve){
        let coches = [];
        let request = "webresources/coches"
        let url= Global.url+request;
        axios.get(url).then(response => {
            console.log(response)
            coches = response.data
            resolve(coches);
        })
        }) 
    } 
}