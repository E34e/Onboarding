import * as Yup from "yup";


const isValid =   /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;

export const forrmikInitialValues={
  ac_year :"",
  cet_type :"",
  cet_ht_no :"",
  uid :"",
  stu_name :"",
  dob :"",
  stu_father_name  :"",
  stu_mother_name :"",
  cet_rank :"",
  cet_course_name  :"",
  cet_coll_name  :"",

  ssc_htno :"",
  ssc_pass_year  :"",
  ssc_pass_type :"",
  caste :"",
  stu_district :"",
  stu_mandal  :"",
  stu_village:""
};
export const formikValidations = Yup.object().shape({
  uid: Yup.string()
  .required("Please Enter Aadhar Number")
  .min(12, " Aadhar number must be exactly 12 digits only")
  .max(12)
  .matches(isValid, "Please Enter Aadhar Number Correctly"),
  ac_year:Yup.string().required("please select Academic Year"),
  cet_type:Yup.string().required("please select CET Type"),
  cet_ht_no:Yup.string()
  .required("Please Enter CET HAll Ticket Number"),

 cet_rank:Yup.string()
 .required("Please Enter CET Rank"),



cet_course_name:Yup.string().required("please select Course Name"),
cet_coll_name:Yup.string().required("please select College Name"),
stu_name:Yup.string().required("please Enter Your Name"),
dob:Yup.string().required("please choose Date OF Birth"),
stu_father_name:Yup.string().required("please Enter Father NAme"),
stu_mother_name:Yup.string().required("please Enter Mother Name"),
caste:Yup.string().required("please select your caste"),
stu_district:Yup.string().required("please select your District"),
stu_mandal:Yup.string().required("please select your Mandal"),
stu_village:Yup.string().required("please select your Village"),

ssc_htno:Yup.string().required("please enter your SSc Hall Ticket Number"),
ssc_pass_year:Yup.string().required("please select your SSC Passout Year"),
ssc_pass_type:Yup.string().required("please select your SSC Type Of pass"),

})