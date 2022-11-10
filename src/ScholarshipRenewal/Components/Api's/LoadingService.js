import React from "react";
import { CommonAxiosPost } from "./CommonAxios";


class LoadingService {
  saveData(req) {
    return CommonAxiosPost(
      " http://172.16.150.53:8302/jnbap/promotedstudentsave",
      req
    );
  }
  updateData(req) {
    return CommonAxiosPost("http://localhost:8086/jnb_mdr/updateddetails", req);
  }

  SaveCetData(req) {
    return CommonAxiosPost("http://172.16.150.53:8302/jnbap/saveCetDetails", req);
  }

  SavePersonalDetails(req){
    return CommonAxiosPost("http://172.16.150.53:8302/jnbap/saveStudentPersonalDetails",req);
  }


}
export default new LoadingService();
