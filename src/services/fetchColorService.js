import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
    .get('/api/colors')
        .then((res) => {
            // console.log("colors resp: ", res);
            return(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
};

export default fetchColorService;



// Data Looks Like:
// data: Array(11)
// 0:
// code: {hex: "#f0f8ff"}
// color: "aliceblue"
// id: 1

